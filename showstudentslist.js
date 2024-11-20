const { MongoClient } = require('mongodb');

// MongoDB 連線設定
const uri = 'mongodb://localhost:27017'; // MongoDB URI
const dbName = '411630816'; // 資料庫名稱
const collectionName = 'studentslist'; // 集合名稱



async function displayStudents() {
    const client = new MongoClient(uri);
    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 查詢所有學生資料
        const students = await collection.find({}).toArray();
        console.log("查詢到的資料：", students); // 調試輸出

        // 在 Console 顯示學生名單
        console.log("學生名單：");
        students.forEach((student, index) => {
            console.log(
                `${index + 1}. 帳號: ${student.帳號}, 座號: ${student.座號}, 姓名: ${student.姓名}, 院系: ${student.院系}, 年級: ${student.年級}, 班級: ${student.班級}, Email: ${student.Email}`
            );
        });

    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        await client.close();
        console.log("MongoDB 連線已關閉");
    }
}

// 執行顯示學生名單的程式
displayStudents();
