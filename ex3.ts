/*題目 3: 輸出 99 乘法表的函數
請寫一個 TypeScript 檔案，定義一個函數來輸出 1 到 9 的九九乘法表，並將結果以 console.log 印出。
要求：
定義一個函數 printMultiplicationTable()，函數不接受任何參數。
使用兩層 for 迴圈，分別列出 1 到 9 的乘積。
每一行應輸出類似格式：i x j = (i * j)，例如：2 x 3 = 6。
呼叫該函數來列印完整的乘法表。*/

function printMultiplicationTable(): void {
  
  for (let i = 1; i <= 9; i++) {
    
    for (let j = 1; j <= 9; j++) {
      
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}


printMultiplicationTable();
