// let girlband = ["newjeans", "snsd", "exo"];
// // menerima parameter
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// var name = "john";
// console.log(`My name is ${name}`);

// function myLog() {
//   console.log("ini log ku sendiri");
// }

// function showMassage(name = "anonymous", greetig = "hi") {
//   console.log(`${greetig}, ${name}`);
// }

// showMassage();

// function sumNumbers(numberA, numberB) {
//   return numberA + numberB;
// }

// sumNumbers(1, 1); // will not log anything

// console.log(sumNumbers1(1, 1)); // will log

// const logMassageA = () => {
//   console.log("Hello World!");
// }; // without Parameter

// const logMassageB = (text) => {
//   console.log(text);
// }; // with one Parameter

// const logMassageA = (text, mark) => {
//   console.log(`${text}${mark}`);
// }; // without Parameter

// //one line
// const logMassageA = () => console.log("Hello World!");
// const checkCondition = (condition) => (condition ? true : false);

// function transferWithBCA(amount){
//     //transfer BCA
//     console.log(`Transfer with BCA sebar ${amount}`);
// }
// function transferWithBRI(amount){
//     //transfer BRI
//     console.log(`Transfer with BRI sebar ${amount}`);
// }
// function transferWithQRIS(amount){
//     //transfer QRIS
//     console.log(`Transfer with QRIS sebar ${amount}`);
// }
// function transfer(amount=0, transferMethode = transferWithQRIS){
//     return transferMethode(amount);
// }
// transfer(50000, transferWithBRI);
// transfer(50000);

// var isBuildingTall = true;
// var color = "red";
// if (color === "blue") {
//   console.log("blue");
// } else {
//   console.log("not blue");
//   console.log("not blue");
//   console.log("not blue");
// }

// function shoutAsKid() {
//   console.log("i'm a kid");
// }
// function shoutAsTeen() {
//   console.log("i'm a teen");
// }
// var age = 10;
// isKid = age < 6 ? shoutAsKid : shoutAsTeen;
// console.log(isKid);

// function shoutAsKid() {
//   console.log("i'm a kid");
// }
// function shoutAsTeen() {
//   console.log("i'm a teen");
// }
// var age = 10;
// var shout = age < 6 ? shoutAsKid : shoutAsTeen;
// shout();

// function shoutAsKid() {
//   console.log("i'm a kid");
// }
// function shoutAsTeen() {
//   console.log("i'm a teen");
// }
// var age = 10;
// isKid = age < 6 ? shoutAsKid : shoutAsTeen;
// console.log(isKid());

// var paymentMethode = "QRIS";
// switch (paymentMethode) {
//   case "BCA": {
//     console.log("BCA");
//     break;
//   }
//   case "QRIS": {
//     console.log("QRIS");
//     break;
//   }
//   default: {
//     console.log("Default Payment");
//   }
// }

// var paymentMethode = "QRIS";
// switch (paymentMethode) {
//   case "BCA": {
//     console.log("BCA");

//   }
//   case "QRIS": {
//     console.log("QRIS");
//     break;
//   }
//   default: {
//     console.log("Default Payment");
//   }
// }

// Function paymentCheckout (amount = 0, paymentProvider = “cash”){
// 	Switch(paymentProvider) {
// 	Case “QRIS”:{
// 	Console.log("payment success with QRIS");
// 	Break;}
// 	Case “BCA”:{
// 	Console.log("payent success with BCA");
// 	Break;}
// 	Case “BNI”:{
// 	Console.log("payent success with BNI");
// 	Break;}
// }
// }
// paymentCheckout(500);
// paymentCheckout(500,”BNI”);

// console.log("Hello World");
// var IntroductionText = document.getElementById("introductionText");
// IntroductionText.innerHTML = "Hello I'm a At Engineer";

// console.log("Hello World");
// var IntroductionText = document.getElementById("introductionText");
// var images = document.querySelectorAll("img");
// console.log(images);
// //image.src = "https://plus.unsplash.com/premium_photo-1673967796686-154ab5ad9ca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// IntroductionText.textContent = "Hello I'm a At Engineer";
// IntroductionText.style.color = "red";

// var textById = document.getElementById("text");
// var buttonColor = document.querySelector("button");
// buttonColor.onclick = setColorToRed;
// var imgTag = document.querySelector("img");
// textById.textContent = "Hello i'm a At Engineer";
// var inputText = document.querySelectorAll("input")[0];

// function setColorToRed() {
//   textById.style.color = "red";
// }
// function setLowerCase() {
//   var currentValue = inputText.value;
//   var lowerCaseValue = currentValue.toLowerCase();
//   inputText.value = lowerCaseValue;
// }
