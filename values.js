('use strict');



// *****************************
// Chapter 1. Values
// *****************************



let country = 'Taiwan';

console.log(`i'm ${country}`); 
// Template Literals

console.log('a' > 'Z'); // true
// 大寫字型永遠"小於"小寫字型

console.log(1+1 == 2 && 10 * 10 > 50); // true

console.log(true ? 1 : 2); // 1
// 三元運算子 Ternary Operator

// 型別轉換 Type Coersion
console.log( 8 * null); //0
console.log( "5" - 1); // 4
console.log( "5" + 1); //51
console.log("five" * 2); //NaN
console.log(false == 0); // true

// 當 null 或 undefined 出現在運算子的一側時，只有當另一側也是null 或 undefined 時才會是 true
console.log(null == undefined) // true
console.log(null == 0); // false

// || 運算子會回傳左側的值，當左側可轉為 true，若是不行則傳回右側的值
console.log(null || "default"); // default
console.log("Agnes" || "default"); // Agnes

// 右側的值可以當作預設值，當左側的值為 falsy value 時，falsy value 如 0、""、null、undefined

// && 運算子會回傳左側的值，當左側可轉為 false，若是不行則傳回右側的值
console.log(null && "default");



// *****************************
// Chapter 2. Program Structures
// *****************************



// 產生 value 的程式片段稱為 expression 
// 每個逐字寫的 value 也是一個 expression，如 22 或是 "psychoanalysis"

// 最簡單的 statement 為 expression 加上分號
// 1;
// !false;

// To catch and hold values, JavaScript provides a thing called a binding, or variable
let caught = 5 * 5;

// let 可以同時定義多個變數
let one = 1, two = 2;
console.log(one + two);

// 常數
const greeting = "hello";

// 變數名稱(binding name)規則
// 不可為數字開頭，可包含$、_

// value 的其中一種 type 為 function
// 檔 function 產生 value 時，因為在 JavaScript 中，有產生值(produces a value)的都稱為 expression
// 這表示 function calls 可以被當成 expression 使用
console.log(Math.min(2,4) + 100);



// *****************************
// Chapter 3. Functions
// *****************************



// A function definition is a regular binding where the value of the binding is a function
// 方法定義即是 binding 的 value 剛好為 function
// 

const square = function(x){
	return x * x;
};

// 每個 function 呼叫會建一個新的 binding，呼叫同個方法不同次都會是一個新的 instance

// 用 const 或 let 宣告的 binding，scope 存在於 block 中 
// ES6 以前只有 function 會建立新的 scope
// 用 var 宣告的 binding，scope 存在於他們所在的 function 中，若是沒有在 function 中，則存在於 global scope 中 

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}

// 在此無法存取 y
console.log(x + z); // → 40


var caller = function(){
	var x1 = 3;
}

// console.log(x1); // undefined

// 每個 local scope 可以看見包含他的其他 local scopes
// 每個 scope 都可以看見 global scope
// 此稱為 Lexical Scoping

// function value
// 可以做到其他 value 一樣，而不僅止於呼叫
let bose = function(para){
	console.log(para + " success");
}

let bose2 = bose; // 將 function value 存在一個新的 binding 

// Function Declaration
function test_Function(para1, para2){
	para2(50);
}

test_Function('0', bose2); // 將 function value 當參數傳遞 

// Function Declaration 回被移到 scope 的最上方，且可以被該 scope 的成員使用

// Arrow Functions
// 第三種函數寫法

const square1 = base => {  
  return base * base;
} // 一個參數可以省略()

const square2 = base =>  base * base;
// 方法內容只有一行可以省略{}

const square3 = (base, multi) => {  
  return base * multi;
}

const horn = () => {
  console.log("Toot");
}; // 無參數


function square4(x) { return x * x; }
console.log(square4(4, true, "hedgehog")); // 多給參數不會錯

// Optional 參數
function square5(x, y = 2) { return x * y; }
console.log(square5(4));  // 8
console.log(square5(4, 3)); // 12

// CLOSURE



