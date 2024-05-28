// Arshad ==9th ====07-5-2024
//1_ForEach or map me kia didifrance ha?
//2_Lenght
//3_split mehthod
//4_Object mehthod all mehthod anonymous type, interface type, Custom Type 
//5_object in ovject value acces in 2 way
//6_type Aliyas
//7_Object pass in function  and then function pass in array
//8_aik studend detail ka object bana ha phr aik function create krna ha jiske ander
//ham object ko pass karwaeinge main data base mein idke ander adding delete rename replace k option moujod hoga.
//HOME WORK ASSIGNMENT START 
//basic function createion
// 1.Using default para meter
// 2.Arrwo function parameter
// 3.Implementio=ng a rest parameter
//<----------------------------------------------------------End-------------------------------------------------------->
//Explain

// 1#ForEach & Map difrence kia ha?
//`forEach`
//Har element par function execute karta hai, magar naya array return nahi karta.

// `map`
//  Har element ko transform karke naya array return karta hai.



//forEach code

// const Student = "ARSHAD";
// const student  = Student.split("");
// student.forEach((winer) => {
//     console.log(winer)
// }
// );


//OutPut in String

// A
// R
// S
// H
// A    arryas ki value ko alag alag kr k print krne k lye use kya jata ha
// D

//Code map

// const math: number [] = [1,2,3,4,5,6,];
 
// const Multiply = math.map((mat) => mat + 90
// )

// console.log(Multiply);

//OutPut
//[ 91, 92, 93, 94, 95, 96 ]

//<----------------------------------------------------------End-------------------------------------------------------->
//Explain

//2#Lenght
//`map` method ka istemal karke har string ka length naya array mein store karte hain.

// const Fruit:string [] = ["WaterMelon","Apple","Cherry","Strowbery"];
// const Lenght = Fruit.map((fruit) => fruit.length);
// console.log( "Fruit ka lenght",Lenght);

//OutPut
//Fruit ka lenght [ 10, 5, 6, 9 ]

//<----------------------------------------------------------End-------------------------------------------------------->
//Explain


//3#Split mehthod
// split method:Yeh method string ko kisi specific character ya delimiter par tod kar ek array banata hai.

// const Flower = "Cherry Balossom"
// const convert = Flower.split(" ");

// console.log(convert);

//OutPut [ 'Cherry', 'Balossom' ]

//<----------------------------------------------------------End-------------------------------------------------------->
//Explain

//4#Object mehthod all mehthod anonymous type, interface type, Custom Type 

//1. Anonymous Type:
// Bina kisi specific type ya interface ke seedha object aur uske methods banate hain.

//2.Interface Type:
//Definition: Ek structured aur type-safe approach jo objects ko follow karni padti hai.

//3. Custom Type
  // Definition:Flexible type definition jo aapke banaye huye types ko support karti hai.



// 1.Anonymous types

  //   let Student ={
//     Name:"Shoaib",
//     Roll_No:23457737,
//     City:"Karachi",
//     ClassDays: "Sunday",
//   }

//   console.log(Student);

// 2.Interface type

// interface Person {
//     name: string;
//     age: number;
//     greet: () => void;
//     updateAge: (newAge: number) => void;
// }

// const person: Person ={
//     name:"Arshad",
//     age:20,
//     greet() {
//         console.log(`My name is ${this.name}`);
// },
// updateAge(newAge:number) {
//     this.age = newAge;
// },
// }
// person.greet()
// person.updateAge(21)
// console.log(person.age);


// 3.Custom Type

// type Student = {
// name: string,
// Contact: number,
// Adress: string,
// Roll_No:string,
// }

// const student:Student ={
//   name: "Shoaib",
//   Contact: 3092949224,
//   Adress: "new karachi",
//   Roll_No: "222727882"
// }

// console.log(student);

 //OutPut 
//  name: 'Shoaib',
//   Contact: 3092949224,
//   Adress: 'new karachi',
//   Roll_No: '222727882'



//<----------------------------------------------------------End-------------------------------------------------------->
//Explain
// 1. Define a student class with default parameters
class Student {
  id: number;
  name: string;
  age: number;
  course: string;

  constructor(id: number, name: string = 'Unknown', age: number = 0, course: string = 'None') {
      this.id = id;
      this.name = name;
      this.age = age;
      this.course = course;
  }
}

// 2. Create a student database interface
interface StudentDatabase {
  students: Student[];
  addStudent: (student: Student) => void;
  deleteStudent: (id: number) => void;
  renameStudent: (id: number, newName: string) => void;
  replaceStudent: (id: number, newDetails: Partial<Student>) => void;
}

// Implement the student database
const studentDatabase: StudentDatabase = {
  students: [],

  addStudent: (student: Student) => {
      studentDatabase.students.push(student);
      console.log(`Student ${student.name} added.`);
  },

  deleteStudent: (id: number) => {
      const index = studentDatabase.students.findIndex(student => student.id === id);
      if (index !== -1) {
          const removedStudent = studentDatabase.students.splice(index, 1);
          console.log(`Student ${removedStudent[0].name} deleted.`);
      } else {
          console.log(`Student with ID ${id} not found.`);
      }
  },

  renameStudent: (id: number, newName: string) => {
      const student = studentDatabase.students.find(student => student.id === id);
      if (student) {
          student.name = newName;
          console.log(`Student ID ${id} renamed to ${newName}.`);
      } else {
          console.log(`Student with ID ${id} not found.`);
      }
  },

  replaceStudent: (id: number, newDetails: Partial<Student>) => {
      const student = studentDatabase.students.find(student => student.id === id);
      if (student) {
          Object.assign(student, newDetails);
          console.log(`Student ID ${id} replaced with new details.`);
      } else {
          console.log(`Student with ID ${id} not found.`);
      }
  }
};

// 3. Implement functions using arrow functions and rest parameters
type Action = 'add' | 'delete' | 'rename' | 'replace';

const manipulateDatabase = (action: Action, ...params: any[]) => {
  switch(action) {
      case 'add':
          studentDatabase.addStudent(params[0]);
          break;
      case 'delete':
          studentDatabase.deleteStudent(params[0]);
          break;
      case 'rename':
          studentDatabase.renameStudent(params[0],params[1]);
          break;
      case 'replace':
          studentDatabase.replaceStudent(params[0],params[1]);
          break;
      default:
          console.log('Invalid action.');
  }
};

// Example usage:
const student1 = new Student(1, 'John Doe', 20, 'Computer Science');
const student2 = new Student(2, 'Jane Doe', 22, 'Mathematics');

manipulateDatabase('add', student1);
manipulateDatabase('add', student2);
manipulateDatabase('rename', 1, 'John Smith');
manipulateDatabase('replace', 2, { name: 'Jane Smith', age: 23, course: 'Physics' });
manipulateDatabase('delete', 1);

console.log(studentDatabase.students);

