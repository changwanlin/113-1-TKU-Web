/*題目 2: 使用 if 和 for 控制流
請寫一個 TypeScript 檔案，使用 if 條件判斷和 for 迴圈來判斷一個數字是否為奇數或偶數，並將 1 到 10 的所有數字列印出來。
要求：
1.使用 if 判斷奇數或偶數。
2.使用 for 迴圈列印結果。*/
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("".concat(i, "\u662F\u5076\u6578"));
    }
    else {
        console.log("".concat(i, "\u662F\u5947\u6578"));
    }
}