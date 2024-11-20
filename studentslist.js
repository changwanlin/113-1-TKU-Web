const { MongoClient } = require('mongodb');
const fs = require('fs');
const csv = require('csv-parser');

// MongoDB 連線設定
const uri = 'mongodb://localhost:27017'; // MongoDB URI
const dbName = '411630816'; // 資料庫名稱
const collectionName = 'studentslist'; // 集合名稱

const client = new MongoClient(uri);

async function importCsvToMongoDB() {
    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName); // 確保使用字串
        const collection = db.collection(collectionName);

        // 讀取 CSV 檔案
        const results = [];
        fs.createReadStream('studentslist.csv') // CSV 檔案路徑
            .pipe(csv())
            .on('data', (data) => {
                // 檢查並處理資料格式
                const sanitizedData = {};
                Object.keys(data).forEach((key) => {
                    if (!key.startsWith('$')) { // 過濾掉以 "$" 開頭的欄位
                        sanitizedData[key] = data[key];
                    }
                });
                results.push(sanitizedData);
            })
            .on('end', async () => {
                try {
                    // 插入資料到 MongoDB
                    const insertResult = await collection.insertMany(results);
                    console.log(`成功插入 ${insertResult.insertedCount} 筆資料！`);
                } catch (insertError) {
                    console.error("插入資料時發生錯誤：", insertError);
                } finally {
                    // 關閉連接
                    await client.close();
                    console.log("MongoDB 連線已關閉");
                }
            });
    } catch (error) {
        console.error("發生錯誤：", error);
        await client.close();
    }
}

// 執行匯入程式
importCsvToMongoDB();
