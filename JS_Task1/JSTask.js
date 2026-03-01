// التكليف 01
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); 

// التكليف 02
// let num = 3 ;
// console.log(num + num) ;
// console.log(num + true + true +true);
// console.log( num * (true + true))
// console.log( num * num - num)
// console.log(num * num -(true + true + true))
// console.log(num / (true /(true + true)))
// // typeof(console.log(num << true) );
// console.log(num << true);      

// التكليف 03
// let num = "10" ;
// console.log(+num + +num);
// console.log(num - - num);
// console.log(num * ( true + true));
// console.log( num / ( true /(true + true))) ;
// console.log(num << true);

// التكليف 04
// let points = 10 ;
// console.log( points + true + true + true);
// console.log(points - true - true);

// -----------------------------------------------------------------------
// التكليف 01
// let numberOne = 10 ;
// let numberTwo = 20 ;
// console.log(numberOne + "" + numberTwo); 
// console.log(typeof (numberOne + "" + numberTwo));
// console.log( typeof`${numberOne}${numberTwo}`);
// console.log(numberOne + "\n" + numberTwo);
// console.log(`${numberTwo}
// ${numberOne}`);

// التكليف 02
// console.log(elzero.innerHTML);
// console.log(typeof elzero);

// التكليف 03
// console.log("`I'm In\n\\\\\nLove \\\\\"\"\"'''\n++ with ++\n\\\"\"\"\\\"\"\"\n\"\"\"JavaScript\"\"``")

// التكليف 04
// let a = 21;
// let b = 20;
// console.log("_"+ a + "_" + b +a + "_" + b + a + "_" + b + a +"_"+ b +"_");

// --------------------------------------------------------------------------

// التكليف 01
// console.log(100_000);
// console.log(100000);
// console.log(5e4 + 5e4);
// console.log(1e5);
// console.log(10**5);
// console.log(50000*2);
// console.log(1000000/10);
// console.log(Math.pow(10 , 5));
// console.log(200000 - 100000);
// console.log(+"100000");
// console.log(Math.ceil(99999.2));
// console.log(Math.min(1000000 , 100000));

// // التكليف 02
// console.log(-Number.MIN_SAFE_INTEGER)

// //  التكليف 03
// console.log(Number.MAX_SAFE_INTEGER.toString().length)

//  التكليف 04
// let myVar = "100.56789 Views"; 
// console.log(parseInt(myVar));
// console.log(parseFloat(myVar).toFixed(2));

//  التكليف 05
// let num = 10 ;
// console.log(Number.isInteger(num) +Number.isInteger(num) );

// //  التكليف 06
// let flt = 10.4 ;
// console.log(Math.floor(flt));
// console.log(Math.round(flt));
// console.log(Math.trunc(flt));
// console.log(parseInt(flt));
// console.log(parseFloat(flt).toFixed(0));
// console.log(~~flt);

// //  التكليف 06
// const randomNamber = Math.floor(Math.random()*5);
// console.log(randomNamber)

// ------------------------------------------------------------------

// //  التكليف 01
// let userName = "Elzero";
// console.log(userName[0].toLowerCase());
// console.log(userName.charAt(0).toLowerCase());
// console.log(userName.slice(0,1).toLowerCase());
// console.log(userName.split("")[0].toLowerCase());
// console.log(userName.substring(0,1).toLowerCase());
// console.log(userName.charAt(0).toLowerCase().repeat(3));

// //  التكليف 02
// let word = "Elzero" ;
// let letterZ = "z" ;
// let letterE = "e" ;
// let letterO = "o" ;
// console.log(word.includes(letterZ));
// console.log(word.includes(letterE));
// console.log(word.includes(letterO));

// -------------------------------------------------------------------

// //  التكليف 01
// console.log(100 == "100");
// console.log(100<1000);
// console.log((110+100) > (10+20)) ;
// console.log(-10 == "-10");
// console.log(typeof -50 === typeof +"-40");
// console.log(typeof 10 === typeof +"-40");
// console.log(+"10" == 10);
// console.log(typeof 20 != false);

// //  التكليف 02
// let num1 = 10 ;
// let num2 = 20 ;
// console.log(typeof num1 === typeof num2);
// console.log(num1*(true + true) == num2);
// console.log(num1 == num2*(true / (true+ true)));
// console.log(num1 <= num2);
// console.log(num1 != num2);
// console.log(num1 < num2);

// //  التكليف 03
// let a = 20 ;
// let b = 30 ; 
// let c = 10 ;
// console.log(a < b && a < c || a< b);
// console.log(a + b > a + c);
// console.log(!( a > b ) && !(a>= b) && !( a < c) && !( a <= c));

// ----------------------------------------------------------------

//  التكليف 01
// let num = 9 ;
// if(num < 10 ){
//     console.log(`00${num}`);
// }
// let num = 20 ;
// if (num >=10 && num <100 ){
//     console.log(`0${num}`);
// }
// let num = 110 ;
// if ( num >= 100){
//     console.log(`${num}`);
// }

// //  التكليف 02
// let num1 = 9 ;
// let str = "9" ;
// let str2 ="20" ;
// if(num1 == str){
//     console.log(`${num1} Is The Same Value As ${str} `)
// }
// if(num1 == str && typeof num1 != typeof str){
//     console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`)
// }
// if(num1 != str2 && typeof num1 != typeof str2){
//     console.log(`${num1} Is Not The Same Value Or The Same Type As  ${str2}`)
// }
// if(str != str2 && typeof str == typeof str2){
//     console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
// }

// //  التكليف 03
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
// if (num3 > num1 && typeof num3 != typeof num1){
//     console.log(`${num3} Is Larger Than ${num1} And Type ${typeof num3} string Not The Same Type ${typeof num2} As number`)
// }
// if (num3 > num1 && num2 == num3 && typeof num2 != typeof num3){
//     console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} string Not The Same Type ${typeof num2} As number"`)
// }
// if (num3 != num1 && typeof num3 != typeof num2){
//     console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${typeof num2} `)
// }

// //  التكليف 04
// let num1 = 10;
// let num2 = 5;
// let num3 = 10;
// let num4 = 36;
// // Condition 1
// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2
// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3
// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4
// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5
// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6
// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7
// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// ------------------------------------------------------------------------------

// //  التكليف 01
// let day = "   friday  ";
// day = day .trim();
// day = day.charAt(0).toUpperCase() + day.slice(1,).toLowerCase();
// console.log(day) ;

// switch (day){
//     case  "Friday":
//     case  "Saturday":
//     case  "Sunday":
//         console.log("No Appointments Available")
//         break ;
//     case "Monday":
//     case "Thursday":
//         console.log("From 10:00 AM To 5:00 PM") ;
//         break ;
//     case "Tuesday":
//         console.log("From 10:00 AM To 6:00 PM");
//         break ;
//     default :
//         console.log("Its Not A Valid Day");
//         break ;             

// }

// ---------------------------------------------------------------------------------

// //  التكليف 01
// let start = 10;
// let end = 100;
// let exclude = 40;
// for( i= start ; i<= end ; i +=10){
//     if (i == exclude){
//         continue
//     }
//     console.log(i)
// }

// //  التكليف 02
// let start = 10;
// let end = 0;
// let stop = 3;
// for( i = start ; i >=stop ; i--){
//     if(i< start){
//         console.log(`${end}${i}`);
//     }
//     else{
//         console.log(i);
//     }
// }

// //  التكليف 03
// let start = 1;
// let end = 6;
// let breaker = 2;
// for ( i = start ; i<= end ; i++){
//     console.log(i)
//     console.log("-- " + breaker);
//     console.log("-- " + (end - breaker));
    
// }

// //  التكليف 04
// let index = 10;
// let jump = 2;
// for( i = index ; i>jump ; i-=jump){
//     console.log(i);
// }

// //  التكليف 05
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter = letter . length ;
// let index = counter - counter ;
// for (let i = index ; i< length.friends ; i++){
//     if (friends[i][index] !== letter.toUpperCase()) {
//     console.log(`${counter++} => ${friends[i]}`);
//   }
// }

// //  التكليف 06
// let start = 0;
// let swappedName = "elZerO";
// let result = swappedName.slice(start,start);
// for( i = start ; i < swappedName.length ; i++ ){
//     if (swappedName[i]=== swappedName[i].toLowerCase()){
//         result =result + swappedName[i].toUpperCase();
//     }
//     else{
//         result = result + swappedName[i].toLowerCase();
//     }
// }
// console.log(result);

// //  التكليف 07
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for ( let i = mix[start] ; i< mix.length ; i++ ){
//     if (typeof mix[i]== typeof start){
//         console.log(mix[i]);
//     }
//     else{
//         continue ;
//     }
// }

// ----------------------------------------------------------------------

// //  التكليف 01
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// while ( index < friends.length){
//     if ( typeof friends[index] != typeof counter && !friends[index].startsWith("A")){
//         console.log(`${++counter}>= ${friends[index]}`)
//     }
//     index ++ ;     
// }

// ----------------------------------------------------------------------