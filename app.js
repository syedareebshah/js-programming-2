// String Method file no # 1

// var fName = prompt("enter your first name :");
// var lName = prompt("enter your last name :");
// var fullName = fName + " " + lName;
// document.write("Welcome " + fullName);


// var favPhone = prompt("Enter favourit Phone :");
// var lenOfInput = favPhone.length;
// document.write("My fav phone is : " + favPhone + '<br />');
// document.write("Length of Input = "+ lenOfInput);


// var given = prompt("Enter string :" , "pakistani");
// var findIndex = given.indexOf('n');
// document.write("Given string is : " + given + '<br />');
// document.write("index number : " + findIndex);


// var given = prompt("Enter string :" , "hello world");
// var findIndex = given.lastIndexOf('l');
// document.write("Given string is : " + given + '<br />');
// document.write("index number : " + findIndex);


// var given = prompt("Enter string :" , "pakistani");
// var findIndex = given.charAt(3);
// document.write("Given string is : " + given + '<br />');
// document.write("letter at given index : " + findIndex);


// var str1 = "Bilal ";
// var str2 = "Ahmad!";
// var res = str1.concat(str2);
// document.write(res);


// var cityName = 'hydrabad';
// var replaceName = cityName.replace('hydr', 'islam');
// document.write(replaceName);


// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replaceMessage = message.replace(/and/g, '&');
// document.write(message + '<br />');
// document.write(replaceMessage);


// var num = 472;
// document.write('value : ' + num + '<br />');
// var typeNum = typeof(num);
// document.write('type : ' + typeNum + '<br />');
// var typeNum = typeof(num.toString());
// document.write('value : ' + num + '<br />');
// document.write('type : ' + typeNum);


// var userInput = prompt("Enter string : ");
// document.write(userInput + '<br />');
// var userInputToUpper =  userInput.toUpperCase();
// document.write(userInputToUpper);


// var userInput = prompt("Enter string : ");
// document.write(userInput + '<br />');
// var firstChar =  (userInput.charAt(0)).toUpperCase();
// var remChar =  (userInput.slice(1, )).toLowerCase();
// document.write(firstChar + remChar);


// var num = 35.36;
// document.write('Number : ' + num + '<br />');
// var numToString = num.toString();
// var res = numToString.replace('.', '');
// document.write("Result : " + res);


// var name = prompt('Enter your name : ');
// for (var i = 0; i < name.length; i++) {
//     if (name.charAt(i) === '!' || name.charAt(i) === '@'){
//         alert("enter coorect user name.")
//         break;
//     }
//     else{
//         console.log(name);
//     }
// }


// var bakeryItems = ['cake', 'apple pie,', 'cookie', 'chips', 'patties'];
// var searchItem = prompt("Enter item name : ");
// var a = false;
// searchItem  = searchItem.toLowerCase();
// for (var i = 0; i < bakeryItems.length; i++){
//     if (searchItem === bakeryItems[i]){
//         document.write("Item found on Index " + i);
//         a = true;
//         break;
//     }
// }
// if ( a === false){
//     document.write('Item not found.')
// }


// var userInput = prompt("Enter word :");
// var lenOfInpt = userInput.length;
// document.write(userInput.charAt(lenOfInpt - 1));


// var c = prompt('Enter Password :');
// var lengthOfInput = c.length;
// if (c.charAt(0) === (c >= '0' && c <= '9')) {
//     alert('not valid')
// }
// else if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
//     if (lengthOfInput > 6) {
//         alert('Password length exceede');
//     }
//     else{
//         alert('Password Saved')
//     }
// }
// else {
//     alert("Enter Correct Password");
// }


// var university = 'University of Karachi';
// var universityIntoString = university.split('');
// for (var i=0;i<universityIntoString.length; i++){
//     document.write(universityIntoString[i] + '<br />');
// }


// MATH METHODS file No # 2


// var num = +prompt("enter number :");
// var roundNum = Math.round(num);
// document.write(roundNum + '<br />');
// var ceilNum = Math.ceil(num);
// document.write(ceilNum + '<br />');
// var floorNum = Math.floor(num);
// document.write(floorNum + '<br />');


// var num = +prompt("enter number :");
// var roundNum = Math.round(num);
// document.write(roundNum + '<br />');
// var ceilNum = Math.ceil(num);
// document.write(ceilNum + '<br />');
// var floorNum = Math.floor(num);
// document.write(floorNum + '<br />');


// var diceNum = (Math.random() * 7);
// diceNum = Math.floor(diceNum);
// document.write('Dice num is : ' + diceNum);


// var coin = (Math.random() * 3);
// var coinNum = Math.floor(coin);
// if (coinNum === 2){
//     document.write('Random Coin value is head');
// }
// else if (coinNum === 1){
//     document.write('Random Coin value is tail');
// }
// else{
//     document.write('Try Again')
// }


// var coin = (Math.random() * 100);
// var coinNum = Math.floor(coin);
// document.write(coinNum);


// var coin = (Math.random() * 10);
// var coinNum = Math.floor(coin);
// var userInput = +prompt("enter a number");
// if (userInput === coinNum){
//     alert("Congrats your number is correct.")
// }
// else{
//     alert("Try again")
// }


// DATE METHODS file No # 3


// var todayDate = new Date();
// document.write(todayDate);


// var now = new Date();
// var currentMonth = now.getMonth();
// var months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
// document.write('Current Month : ' + months[currentMonth]);


// var now = new Date();
// var today = now.getDay();
// var days = ['sun','mon','tus','wed','thr','fri','sat'];
// document.write("Today is : " + days[today]);


// var now = new Date();
// var today = now.getDay();
// var days = ['sun','mon','tus','wed','thr','fri','sat'];
// if (today === 0 || today === 1){
//     document.write("today is fun day");
// }
// else{
//     document.wri('Working day');
// }


// var now = new Date();
// var today = now.getDate();
// if (today < 15) {
//     document.write('First fifteen days of the month');
// }
// else{
//     document.write('Last fifteen days of month.')
// }


// var now = new Date();
// var currentHour = now.getHours();
// alert(currentHour);
// if (currentHour < 12) {
//     document.write('AM time');
// }
// else {
//     document.write('PM time')
// }


// file No # 4 functions


// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }

// tellTime();


// function greetUser (){
//     var fName = prompt('Enter firstName : ');
//     var lName = prompt('Enter LastName : ');
//     var fullName = fName + ' ' + lName;
//     document.write('Welcome ' + fullName);
// }

// greetUser();


// function addNum (){
//     var a = +prompt('Enter firstName : ');
//     var b = +prompt('Enter LastName : ');
//     var c = a + b;
//     document.write(c);
// }

// addNum();


// function calculator() {
//     var a = +prompt('Enter firstNumber : ');
//     var b = +prompt('Enter secondNumber : ');
//     var opr = prompt('Enter Operator : ');
//     if (opr === '+') {
//         document.write(a + b);
//     }
//     else if (opr === '-') {
//         document.write(a - b);
//     }
//     else if (opr === '*') {
//         document.write(a * b);
//     }
//     else if (opr === '/') {
//         document.write(a / b);
//     }
//     else {
//         alert('Enter right operator.')
//     }
// }

// calculator();


// function arg (a){
//     document.write(a * a);
// }

// arg(2);