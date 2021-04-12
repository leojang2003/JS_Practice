('use strict');

// Chapter 1. Values

let country = 'Taiwan';

console.log(`i'm ${country}`);
// Template Literals

console.log('a' > 'Z');
// uppercase letters are always “less” than lowercase ones

console.log(1+1 == 2 && 10 * 10 > 50);

console.log(true ? 1 : 2);
// 三元運算子 Ternary Operator

// 型別轉換 Type Coersion
console.log( 8 * null);
console.log( "5" - 1);
console.log( "5" + 1);
console.log("five" * 2);
console.log(false == 0);

// 當 null 或 undefined 出現在運算子的一側時，只有當另一側也是null 或 undefined 時才會是 true
console.log(null == undefined) // true
console.log(null == 0); // false

// || 運算子會回傳左側的值，當左側可轉為 true，若是不行則傳回右側的值
console.log(null || "default");
console.log("Agnes" || "default");

// 右側的值可以當作預設值，當左側的值為 falsy value 時，falsy value 如 0、""、null、undefined

// && 運算子會回傳左側的值，當左側可轉為 false，若是不行則傳回右側的值
console.log(null && "default");