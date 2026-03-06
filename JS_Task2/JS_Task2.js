
// // 01 التكليف
// let userName = "Elzero";
// console.log(userName[0].toLowerCase());
// console.log(userName.charAt(0).toLowerCase());
// console.log(userName.slice(0, 1).toLowerCase());
// console.log(userName.substring(0, 1).toLowerCase());
// console.log(userName.substr(0, 1).toLowerCase());
// console.log(userName.charAt(0).toLowerCase().repeat(3));


// // 02 التكليف
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";
// console.log(word.includes(letterZ)); // true
// console.log(word.startsWith(letterE.toUpperCase())); // true
// console.log(word.endsWith(letterO.toLowerCase()));

// -------------------------------------------------------------------

// // 01 التكليف
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// myFriends.length = num;
// console.log(myFriends);
// console.log(myFriends.slice(num - num , num));

// // 02 التكليف
// let friends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = true + true;
// friends.pop();
// friends.shift();
// console.log(friends);

// // 03 التكليف
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// finalArr = arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr);

// // 04 التكليف
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// console.log(words[website.length][0] . slice(website.length).toUpperCase());

// // 05 التكليف
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// if (haystack.includes(needle)){
//     console.log("Found");
    
// }
// if (haystack.indexOf(needle)!==-1){
//     console.log("Found");
    
// }
// if (haystack.lastIndexOf(needle)!==-1){
//     console.log("Found");
    
// }


// --------------------------------------------------------------------   
// 01 التكليف
let dateNow = new Date();
let birthDate = new Date("2007-11-03");
let diff = dateNow - birthDate;

let seconds = diff / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = days / 365;

console.log(Math.trunc(seconds) + " Seconds");
console.log(Math.trunc(minutes) + " Minutes");
console.log(Math.trunc(hours) + " Hours");
console.log(Math.trunc(days) + " Days");
console.log(Math.trunc(months) + " Months");
console.log(Math.trunc(years) + " Years");

let myDate = new Date();
myDate.setFullYear(1980);
myDate.setHours(0, 0, 1);
console.log(myDate);



