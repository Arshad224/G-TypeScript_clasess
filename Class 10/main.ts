//Arshad Thursday 09/May/2024

//1.Aero Function
//2.Arrays 
//3.Arrays Indexing
//4.Arrays.pop
//5.Arrays.push
//6.Arrays.slice
//7.Arrays.splice
//8.Negative Indexing
//9.Shift
//10.Unshift
//11.Objects
//<-------------------------------------------------End---------------------------------------------------->
//Explain

//1#Aero Function

//Aero functions JavaScript mein lambi function expressions ko chhote aur concise banane 
//ke liye istemal hoti hain.

//code

// const num1 :number [] = [10,20,30,40,50] //Orignal Arrays

// const doubleNumber = num1.map(num1 => num1 * 2) //Aero Function

// console.log(doubleNumber)

//OutPut [ 20, 40, 60, 80, 100 ]
// Lambi function expression

//<-------------------------------------------------End---------------------------------------------------->
//Explain

//2#Arrays 
// Arrays ek data structure hain jo multiple values ko ek single variable mein store karta hai.

// let Fruit :string[] = ["Apple","Mango","Banana","Wattermelon"]

// console.log(Fruit)

// OutPut[ 'Apple', 'Mango', 'Banana', 'Wattermelon' ]
//<-------------------------------------------------End---------------------------------------------------->
//Explain

//3#Arrays Indexing
// Arrays mein har element ko ek unique number se associate kiya jata hai jise index kehte hain,
// jo element ki position ko identify karta hai.

//code
// let Fruit :string[] = ["Apple","Mango","Banana","Wattermelon"]
// console.log(Fruit[0])  //arrays indexing 0 se shoro hote ha
// console.log(Fruit[1])
// console.log(Fruit[2])
// console.log(Fruit[3])

//OutPut
// Apple
// Mango
// Banana
// Wattermelon

//<-------------------------------------------------End---------------------------------------------------->
//Explain

//4#Arrays.pop()
// ek array method hai jo array se aakhri element ko hata deta hai aur usay wapas return karta hai.

//code
// let fvrtColour :string [] = ["Red","Blue","Green","purpal"]
// fvrtColour.pop()
// console.log(fvrtColour)

//OutPut [ 'Red', 'Blue', 'Green' ]
//<-------------------------------------------------End---------------------------------------------------->
//Explain

//5#Arrays.push()
// ek array method hai jo naye elements ko array ke aakhir mein add karta hai.

//code
// let fvrtColour :string [] = ["Red","Blue","Green","purpal"]
// fvrtColour.push("Cherry")            //  Jo bhi yha likhoge wo arrays me add ho jaega
// console.log(fvrtColour)

//OutPut [ 'Red', 'Blue', 'Green', 'purpal', 'Cherry' ]
//<-------------------------------------------------End---------------------------------------------------->
//Explain

//6#Arrays.slice
//`slice()` ek array method hai jo ek naya array banata hai, jo original array ke specified portion ko
// shamil karta hai, lekin original array ko tabdeel nahi karta.


//code
// let fruit :string [] = ["Apple","Mango","Banana","Wattermelon"]

// let sliceFruit :string[] = fruit.slice(1,2) //do argument mangta ha 
// console.log(sliceFruit)   //starting number k bad or ending se phele 

//OutPut [ 'Mango' ]

//<-------------------------------------------------End---------------------------------------------------->
//Explain

//7#Arrays.splice
// ek array method hai jo original array ko modify karta hai. Yeh method specified index se 
// elements ko hata deta hai, naye elements ko add karta hai, ya existing elements ko replace karta hai.

//code

// let fruit :string [] = ["Apple","Mango","Banana","Wattermelon"];
// fruit.splice(3,1, 'Cherry' ,'Strowbery') 
// console.log(fruit) 

//OutPut [ 'Apple', 'Mango', 'Banana', 'Cherry', 'Strowbery' ]
//<-------------------------------------------------End---------------------------------------------------->
//Explain

//8#Negative Indexing
//Negative indexing mein, array ke end se elements ko access karne ke liye,
// negative integers ka istemal hota hai.

//code
// let  fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
// let lastFruit: string = fruits[fruits.length-1];
// console.log(lastFruit)

//OutPut Grapes
//<-------------------------------------------------End---------------------------------------------------->
//Explain

//9#Shift
// `shift()` ek array method hai jo array se pehla element ko hata deta hai aur usay wapas return karta hai.

//code
// let  fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
// fruits.shift() //sirf phele value ko remove kr deta ha 
// console.log(fruits)

//OutPut [ 'Banana', 'Orange', 'Mango', 'Grapes' ]

//<-------------------------------------------------End---------------------------------------------------->
//Explain

//10#Unshift
// `unshift()` ek array method hai jo naye elements ko array ke shuru mein add karta hai.

// let  fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
// fruits.unshift("Cherry") //sirf phele value ko remove kr deta ha 
// console.log(fruits);

//OutPut [ 'Cherry', 'Apple', 'Banana', 'Orange', 'Mango', 'Grapes' ]

//<-------------------------------------------------End---------------------------------------------------->
//Explain

//11#Object
// Object programming mein, ek object ek single entity hai jo data aur functionality ko store karta hai, 
// key-value pairs ke form mein. Ye data ko organize aur manipulate karne ka tareeqa faraham karta hai.

let student: {  //Object Data Type = Anonymous 
   Name: string;
   Roll_No: string;
   Distance_Learning: string;
   City: string;
   Center: string;
   Campus: string;
   Days_Time: string;
   Bach: number;
} = {
   Name: "Arshad Hussain",
   Roll_No: "00227547",
   Distance_Learning: "No",
   City: "Karachi",
   Center: "Governor House Karachi",
   Campus: "Main",
   Days_Time: "TuesDay_07:00 PM - 10:00 PM",
   Bach: 1,
};
console.log(student);

//OutPut 
// {
//     Name: 'Arshad Hussain',
//     Roll_No: '00227547',
//     Distance_Learning: 'No',
//     City: 'Karachi',
//     Center: 'Governor House Karachi',
//     Campus: 'Main',
//     Days_Time: 'TuesDay_07:00 PM - 10:00 PM',
//     Bach: 1
//   }
//<-------------------------------------------------End---------------------------------------------------->
//Explain

