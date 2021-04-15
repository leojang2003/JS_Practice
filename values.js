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
// JavaScript 中，scope 是由 function 或是 code block 建立 

// 為了方法參數建立的 binding 或是在方法內宣告的 binging 只能在該方法內被參考，此稱為 local bindings

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

// 在此無法存取 y，y 屬於 if block 建立的 scope
console.log(x + z); // → 40

function foo() {
  // The function scope
  let count = 0;
  console.log(count); // logs 0
}

foo();
// console.log(count); // 在此無法存取 count 屬於 foo() 方法建立的 scope

var caller = function(){
	var x1 = 3;
}

// console.log(x1); // undefined

// 每個 local scope 可以看見包含他的其他 local scopes
// 每個 scope 都可以看見 global scope
// 此稱為 Lexical Scoping

// Lexical scoping means that the accessibility of variables is determined by the position of the variables inside the nested scopes.
// 語彙範疇的意思是變數的可存取性是由變數在巢狀範疇的位置所決定

// Simpler, the lexical scoping means that inside the inner scope you can access variables of outer scopes.
// 簡單來說，在內層範疇中，程式可以存取外層範疇的變數

const myGlobal = 0;

function func() {
  const myVar = 1;
  console.log(myGlobal); // logs "0"

  function innerOfFunc() {
    const myInnerVar = 2;
    console.log(myVar, myGlobal); // logs "1 0"

    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal); // logs "2 1 0"
    }

    innerOfInnerOfFunc();
  }

  innerOfFunc();
}

func();

// innerOfInnerOfFunc() 的 lexical scope 包含 innerOfFunc()，func()和 global scope。
// 在 innerOfInnerOfFunc()中，可以存取 lexical scope 變數 myInnerVar、myVar、myGlobal。

// 最後，func()的 lexical scope 僅包含 global scope。在func()中，可以存取 lexical scope 變數 myGlobal。


// Function As Value
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

// CLOSURE 概念
// https://dmitripavlutin.com/simple-explanation-of-javascript-closures/#comments
// 在 innerFunc() 的 scope 中, 變數 outerVar 可以從 lexical scope 中存取
// innerFunc() 呼叫的時候是在 outerFunc() 的 scope 之內，所以是正確的

// To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to anot//her function.
// The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
// 要使用 Closure，在一個方法中定義一個內部方法並回傳出來
// 內部方法可以存取外部方法 scope 中的變數，即便外部方法已經回傳



function outerFunc() {
  let outerVar = 'I am outside!';

  function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }

  innerFunc();
}

outerFunc();


// 當 innerFunc() 呼叫的時候不在 outerFunc() 的 scope 之中，innerFunc() 仍舊可以從 lexical scope 中存取
// outerVar 變數，即便是在 lexical scope 的外面，換句話說 innerFunc() closes over(capture, remember) 他的 lexical scope 中的變數 outVar

// The closure is a function that accesses its lexical scope even executed outside of its lexical scope.
// Closure 就是一個方法，即使是在他的 lexical scope 之外執行，仍舊可以存取他的 lexical scope

function outerFunc() {
  let outerVar = 'I am outside!';

  function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }

  return innerFunc;
}

const myInnerFunc = outerFunc();
myInnerFunc();

// 簡單來說，closure 記得定義當下的變數，不論何時呼叫

// 為什麼需要 Closure ? 
// When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods.
// 主要是為了資料隱私性，無法從 scope 之外存取資料，除非透過該物件的特權方法

// 什麼是 Pure Function ?
// A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change. A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else).
// 一個純淨方法指的是一種特別的產生值的方法，不會產生副作用，也不會依賴其他程式產生的副作用。
// 舉例來說，不使用全域變數。當傳入同樣的參數時，永遠回傳同樣的值

// *****************************
// Chapter 4. Objects & Arrays
// *****************************

// 在 JavaScript 中存取屬性(property)有兩種方式，value.x跟value[x]，value[x]會試著評估 expression x 並將結果轉為字串作為屬性名稱

// 屬性名稱為字串，所以可以是任何字串，但.僅能適用如正常的 binding 名稱，所以如果要存取屬性名稱像是 2 或是 John Doe， 則只能用 value[2] 或是 value ["John Doe"]

// 陣列的元素是儲存成陣列的屬性，使用數字做為屬性名稱，因數字無法以.存取，所以用[]存取

// 包含方法 (function) 的屬性通常稱為該 value 的 methods，如同 "toUpperCase 是 string 的 method"

// array 有 push() 跟 pop() 方法

// Values of the type object are arbitrary collections of properties. 
// 物件型別的值為任意屬性的集合
// 使用大括號建立物件，由逗號隔開屬性

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };

// Properties whose names aren’t valid binding names or valid numbers have to be quoted.
// 屬性名稱非有效的 binding name 時須加上括號

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
  };

// 物件的 delete 方法可以移除屬性
// delete anObject.left; // 移除屬性
let father = {name: 'Tom'};
let years = 18 // gets you a reference to the immutable 18
let son = {dad: father, age: years};

father.name =  'Chris'
years = 9 // assign a new reference to the immutable 9
console.log('son.dad' + son.dad); // {name : 'Chris'} 因為屬性的 value 值已經變更了
console.log(son.age); // 18，因為 number 為 immutable

console.log("dad" in son); // 檢查是否有屬性
console.log("age" in son); // → true

// 取得物件的屬性陣列可以用 Object.keys()
console.log(Object.keys({x: 0, y: 0}));// → ["x", "y"]

// 複製所有屬性至另一個物件
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});

// numbers, strings, and Booleans, are all immutable
// 數字、字串、布林值為不可改變的

// The numbers themselves are immutable. The references to them that are stored in the variable are not.
// 數字本身為不可改變的，但變數儲存數字的參考是可以改變的

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);// → true
console.log(object1 == object3);// → false

object1.value = 15;
console.log(object2.value);// → 15
console.log(object3.value);// → 10


let journal = [];

// push 到陣列的物件不像一般的物件有冒號 events : events
// 傳進來的 events 就變成屬性名稱，value 就是傳進來的 event
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
		  
console.log(journal);		  

// Loop Array - Modern JavaScript 寫法
for(let entry of journal)
{
	console.log(`${entry.events.length} events.`);
}

journal[0].events.shift(); // 從陣列開始移除元素
console.log(journal[0].events); //["touched tree", "pizza", "running", "television"]
journal[0].events.unshift('trader'); // 從陣列開始增加元素
console.log(journal[0].events); //["touched tree", "pizza", "running", "television"]

console.log([1, 2, 3, 2, 1].indexOf(3));
console.log([1, 2, 3, 2, 1].lastIndexOf(-1));

// 另一個基本的陣列方法是 slice()，它採用開始索引和結束索引，並返回僅包含元素之間的陣列。含起始索引，不含結束索引。
console.log([0, 1, 2, 3, 4].slice(2, 4));// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));// → [2, 3, 4]
console.log([0, 1, 2, 3, 4].slice());// → [0, 1 2, 3, 4]

// 字串也有 slice 和 indexOf
console.log("coconutss".slice(4, 7));// → nut
console.log("coconut".indexOf("con"));// 可搜尋

// trim() 方法從字符串的開頭和結尾刪除空格（空格，換行符號，tab）

console.log(String(6).padStart(1, "0"));// → 006


let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words); // → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". ")); // → Secretarybirds. specialize. in. stomping
console.log("LA".repeat(3));// → LALALA

// Rest Parameters
// rest 參數會被組合成一個陣列。如果前面還有其他參數，則它們的值不屬於該陣列。

function max(tmp, ...numbers) {
  console.log(numbers);
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

// 可以使用類似的...符號來呼叫有陣列參數的方法。
// 這會將陣列展開，將其元素作為單獨的參數傳遞來呼叫方法。
function max_t(t1, t2) {
    
  return Math.max(t1,t2);
}

console.log(max_t(...numbers));
