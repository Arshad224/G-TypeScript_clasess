"use strict";
//Arshad 16/Thurstay/MAy/2024
//1.Type Alyas
//2.Union  littreal
//3.Type Littreals
//4.Object Type Assigning with Functions
//5.nested Object
//6.Interfce
//Home Work
//[Discord Exercise Splice Pratice ====
// month nams print in type littreals exercise in home work
// aik java scrip ka bilton unction hai
// aik arrays banae aik product ka nam or product ka colour or product ki price or use function chalae colour vise ya price vise a
//interface phar k ana ha ]
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain
//1#Type Aliyas
// Alias programming mein ek asaan naam ya label hai jo kisi cheez ko identify karne ke liye istemal hota hai.
//Code
// type user = {
//     Name:string
//     Roll_No: number
//     City: string
//     Area: string
//     ClassDay:string
// }
// const newUser:user = {
// Name:"Arshad",
// Roll_No: 12345,
// City: "Arshad",
// Area: "Old Sbzi Mandi",
// ClassDay: "Thurday"
// }
// console.log(newUser)
//OutPut {
//   Name: 'Arshad',
//   Roll_No: 12345,
//   City: 'Arshad',
//   Area: 'Old Sbzi Mandi',
//   ClassDay: 'Thurday'
// }
//Code 2
// type Items = {
//     CustommerName: string
//     ItemName:{
//         Medicuns:string
//         price:Number
//         Mrp:Number
//         Grocery:{
//             Dooodh:string
//             litter:number
//             Chini:string
//             weight:string
//             Price:string
//         }
//     }
// }
// const Bill:Items ={
//     CustommerName:"Arshad",
//     ItemName:{
//         Medicuns:"PanaDoll",
//         price:40,
//         Mrp: 60,
//         Grocery:{
//             Dooodh:"KhulaDoodh",
//             litter: 12.5,
//             Chini: "Brown suger",
//             weight:"5kg",
//             Price:"500"
//         }
//     }
// }
// const bill2 :Items = {
//       CustommerName:"Shoaib",
//       ItemName:{
//         Medicuns:"Misotin 20mg",
//         price:40,
//         Mrp:80,
//         Grocery: {
//         Dooodh:"Milk pack",
//         litter: 1.2,
//         Chini: "Black suger",
//         weight: "2kg" ,
//         Price:"200kg"
//     }   
//         }
//       }
// console.log(bill2)
//OutPut 
//     CustommerName: 'Shoaib',
//     ItemName: {
//       Medicuns: 'Misotin 20mg',
//       price: 40,
//       Mrp: 80,
//       Grocery: {
//         Dooodh: 'Milk pack',
//         litter: 1.2,
//         Chini: 'Black suger',
//         weight: '2kg',
//         Price: '200kg'
//       }
//     }
//   } 
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain
//2# Type Union
// Union types ek aisa feature hai jahan ek variable ko do ya zyada data types mein store karne ki permission hoti hai.
//  let Student: string | boolean | Number
//  Student = "Shoaib";
//  Student = "Asif";
//  Student = true
//  console.log(Student)
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain
//3# type Littreals 
//Type literals TypeScript mein woh types hain jo specific aur fixed values ko represent karte hain. 
//Yeh ensure karte hain ke ek variable sirf unhi predefined values ko hold kar sakta hai,
//jo type checking ko mazboot banata hai aur errors ko prevent karta hai.
//Code 
//  let Trafic: "Red" | "Green" | "Yellow"
//  Trafic = "Red"
//  Trafic = "Yellow"
//  Trafic = "Green"
// console.log(Trafic)
//OutPut "Green"
// type MaxSheetType ="Fail Persentage 20%" | "4th Persantage 40%" | "3rd Persantage 60%" | "2nd Persantage 80%" | "1st Persantage 100%"
// type StudendType = "Asif" | "Shoaib" | "Salman" | "Amir" | "Yasir"
// let MaxSheet:MaxSheetType
// let Student:StudendType
// Student = "Amir";
// MaxSheet = "Fail Persentage 20%"
// console.log(`Student:\-${Student} MaxSheet\-${MaxSheet}`)
// Student = "Yasir";
// MaxSheet = "4th Persantage 40%"
// console.log(`Student:\-${Student} MaxSheet\-${MaxSheet}`)
// Student = "Salman";
// MaxSheet = "3rd Persantage 60%"
// console.log(`Student:\-${Student} MaxSheet\-${MaxSheet}`)
// Student = "Asif";
// MaxSheet = "2nd Persantage 80%"
// console.log(`Student:\-${Student} MaxSheet\-${MaxSheet}`)
// Student = "Shoaib";
// MaxSheet = "1st Persantage 100%";
// console.log(`Student:\-${Student} MaxSheet\-${MaxSheet}`)
//OutPut 
// Student:-Amir MaxSheet-Fail Persentage 20%
// Student:-Yasir MaxSheet-4th Persantage 40%
// Student:-Salman MaxSheet-3rd Persantage 60%
// Student:-Asif MaxSheet-2nd Persantage 80%
// Student:-Shoaib MaxSheet-1st Persantage 100%
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain
//Object Type Assigning
//  type myCar ={
//     make:string;
//     model:number;
//     value:number;
//     colour:string;
//     capacity:string;
//     number_plate:string;
//     Start: () => string;
//     maxspeed: () => void;
//     isAc: () => boolean;
//  } 
//  let myCar = {
//     make:"Toyota",
//     model: 2024,
//     value: 2000000,
//     colour: "Black",
//     capacity: "4seats",
//     number_plate: "2426",
//     Start: () => "My Car Start Now" ,   //Arrow function in object
//     maxspeed: () => {
//         return "Maxspeed is 300+"
//     }, 
// isAc: () => true
//  }
// console.log(myCar.isAc)
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain
//5#Nested Object
//Nested object ek aisa object hai jo apne andar doosre objects rakhta hai.
// const exam: {
//     StudendName:string;
//    grade:{
//     Subject: string
//     Persantage: Number
//    }
// } ={
//     StudendName:"Shoaib",
//     grade:{
//         Subject: "Maths",
//         Persantage: 80,
//     }
// }
// console.log(exam)
//OutPut { StudendName: 'Shoaib', grade: { Subject: 'Maths', Persantage: 80 }
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain                                        HOME WORK
//6#Interface
// "Interface object ki structure aur types ko define karta hai."
//  interface Person {
//     name:string,
//     age: number,
//     CnicNO?: number,   //optional property
//  }
//  const employee :Person = {
//   name: "Asif",
//   age: 21,
//   CnicNO:32101228830,
//  }
//  const employee2 :Person ={
//     name: "Shoaib",
//     age: 30,
//  }
//  console.log(employee , employee2) 
//{ name: 'Asif', age: 21, CnicNO: 32101228830 } { name: 'Shoaib', age: 30 }
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain                                        HOME WORK 
// type Month = "Januvery" | "Februry" | "March" | "April" | "May" | 
// "June" | "July" | "August" | "September" |"October" | "November" | "Decamber"
// let Months: Month;
// Months = "Januvery"
// Months = "Februry"
// Months = "March"
// Months = "April"
// Months = "March"
// Months = "June"
// Months = "August"
// Months = "September"
// Months = "October"
// Months = "November"
// Months = "Decamber"
// console.log(Months)
// let allMonths: Month [] = [  "Januvery" , "Februry" , "March" , "April" , "May" ,
// "June" , "July" , "August" , "September" , "October" , "November" , "Decamber"]
// console.log(allMonths)
//<--------------------------------------------------End--------------------------------------------------------------->
//Explain                                        HOME WORK 
//  1) Make an array of objects. There should be atleast 6 objects
// 2) Give properties productName and productPrice
// 3) Do the filtration. Use javascript built in filter method on the array.
//  You need to filter the products where price is less than 1000.
let Product = [
    { ProductName: "Laptop", ProductPrice: 1200 },
    { ProductName: "Headpgones", ProductPrice: 800 },
    { ProductName: "Camra", ProductPrice: 550 },
    { ProductName: "SmartWatch", ProductPrice: 400 },
    { ProductName: "Mobile", ProductPrice: 750 },
    { ProductName: "Charger", ProductPrice: 300 },
];
const cheapProducts = Product.filter(Product => Product.ProductPrice < 1000);
console.log(cheapProducts);
