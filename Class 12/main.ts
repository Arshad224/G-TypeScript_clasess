//Arshad 23/May/2024 "Thursday"

import { log } from "console"
import { after } from "node:test"
import { uptime } from "process"



//1.Interfacse
//2.EnterSection
//3.for loops
//4.while loops
//5.Do-While Loop
//6. For...of Loop
//7. For...in Loop
//8.enum  // enum create krni ha time slot ki
//arrays ko aik ik kr k printkarwana ha for loop k zarye
//person.push ko bhi use krna ha

//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//Interface
// interface typescript ka aik aisa function ha jo objects ki type define krne me use kya jata ha
// Pehle hum ek interface define karte hain

// interface myCar {
//     name:string
//     model: number
//     greet(): void
// }

// const MyCar:myCar ={
//     name:"Honda Civic",
//     model:2024,
//     greet: ()=>{
//       console.log("My Car Colour is MateBlack");
      
//     }
 
    
// }

// function carDetail (gari: myCar) {
//     console.log(`My Car Name is ${MyCar.name}`);
//     console.log(` ${MyCar.greet}`);
    
    
// }
// console.log(carDetail);

//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//InterSection
//Intersection types TypeScript mein do ya zyada types ko `&` operator se combine karte hain.
// Is se naya type banta hai jo sab combined types ki properties aur methods ko include karta hai,
// is tarah resulting type mein har combined type ki tamam khasusiyat shamil hoti hain.

// type Istudent ={
//     Name:string,
//     Roll_No: number
// }

// type ICourse ={
//     CourseName:string
//     Bach:string

// }

// const IdCard: ICourse & Istudent ={
//  Name:"shoaib",
//  Roll_No:2025,
//  CourseName:"Ai Genrative",
//  Bach: "Bach-1"

// }

// console.log(IdCard);

//Output 
// {
//     Name: 'shoaib',
//     Roll_No: 2025,
//     CourseName: 'Ai Genrative',
//     Bach: 'Bach-1'
//   }


//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//3.loops
//For loop: Code ko mukarrar dafaon tak chalane ke liye ek programming construct.


//for loops
// for(let i = 1; i < 9; i++){
//    console.log("Reverce Counting",i);
   
// }

// OutPut
// Reverce Counting 1
// Reverce Counting 2
// Reverce Counting 3
// Reverce Counting 4
// Reverce Counting 5
// Reverce Counting 6
// Reverce Counting 7
// Reverce Counting 8

//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//4#While Loops
//While loop ek programming structure hai jo ek shart ko check karta hai, aur jab tak yeh shart sachi (true) hai, 
//tab tak ek code block ko baar baar execute karta hai. Yeh loop tab tak chalta hai jab tak shart false na ho jaye.

// const IdCard = {
//    Name: "shoaib",
//    Roll_No: 2025,
//    CourseName: "Ai Genrative",
//    Bach: "Bach-1"
// };

// let counting = 0;

// while (counting < 9) {
//    console.log("Governer House me Pharta hu", IdCard);
//    counting++;
// }

//OutPut  x 9
// Name: 'shoaib',
// Roll_No: 2025,             // while loop tab tak chalta ha jab tak condition false na ho jae
// CourseName: 'Ai Genrative', 
// Bach: 'Bach-1'
// }

//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//5#Do while Loops
//Do while loop: Ek loop jis mein pehle code block execute kiya jata hai, phir condition ko check kiya jata hai. 
//Agar condition true ho, to loop dobara chalata hai.  
  
// let i: number = 0;

// do {
//     if (i % 2 === 0) {
//         console.log("even Numbers:", i);
//     }
//     i++;
// } while (i < 10);

//Output
// even Numbers: 2
// even Numbers: 4
// even Numbers: 6
// even Numbers: 8

//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//6.For...of Loop
//For-of loop: Arrays, strings, ya anya iterable objects ke har ek element par loop chalata hai.

// let Fruits:string[]=["Watermelon","Apple","Banana","Mango"]

// for(let num of Fruits){
//    console.log("This is My Favrit Fruit",num)
// }


//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//7.For...in Loop
//For-in loop: Objects mein har ek choti cheez (jo hum property kehte hain), jaise ke naam, umar, ya kuch aur,
// ko ek ek karke dekhta hai. Phir har cheez ko ek variable mein store kar ke uska istemal hota hai.


// let person = {
//    name: "John",
//    age: 30,
//    city: "New York"
// };

// for (let key in person) {
//    console.log(person.age );
// }


//<--------------------------------------------------End---------------------------------------------------------------->
//Explain

//"enumeration"
//Enum: Ek programming concept hai jo ek set ke constants ko define karta hai, 
//jinhe hum descriptive names se represent karte hain.


// enum Day {
//    Monday,
//    Tuesday,
//    Wednesday,
//    Thursday,
//    Friday,
//    Saturday,
//    Sunday
// }

// let Holiday:Day =Day.Sunday
// console.log(`${Holiday} Chutti ka din ha`)
//<--------------------------------------------------End---------------------------------------------------------------->
//Explain                                         HOMEWORK

enum TimeSlot {
   Morning = "8:00 AM - 12:00 PM",
   Afternoon = "12:00 PM - 4:00 PM",
   Evening = "4:00 PM - 8:00 PM",
   Night = "8:00 PM - 12:00 AM"
}
let timeSlots:TimeSlot[]=[TimeSlot.Morning,TimeSlot.Evening,TimeSlot.Afternoon,TimeSlot.Night]

let activities: string[][] = [
   ["Breakfast", "Meeting", "Coding"],
   ["Lunch", "Project Work", "Review"],
   ["Tea Break", "More Coding", "Team Meeting"],
   ["Dinner", "Relax", "Sleep"]
];

// Array to store person details
let person: { name: string, activity: string, timeSlot: TimeSlot }[] = [];

for (let i = 0; i < timeSlots.length; i++) {
   for (let j = 0; j < activities[i].length; j++) {
       person.push({ name: `Person${j+1}`, activity: activities[i][j], timeSlot: timeSlots[i] });
   }
}

// Print combined array
for (let p of person) {
   console.log(`Name: ${p.name}, Activity: ${p.activity}, Time Slot: ${p.timeSlot}`);
}




