//if statement
// const age = 17;
// if(age==18){
//     console.log("You are eligible to vote");
// }
//if else statement
// if(age>=18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }
// //else if statement
// const marks = 50.5;

// if(marks>=80 && marks<=100){
//     console.log("A grade");
// } 
// else if(marks>=60 && marks<80){
//     console.log("B grade");
// }else if(marks>=40 && marks<60){
//     console.log("C grade");
// }
// else if(marks>=30 && marks<40){
//     console.log("D grade");
// } 
// else if(marks>=20 && marks<30){
//     console.log("S grade");
// } 

//  let day = 0;

//  while( day<=7){
//     day++;
// if(day==1){
//     console.log("day is Monday");                     
//  }else if(day==2){
//     console.log("day is Tuesday");
//  }else if(day==3){
//     console.log("day is Wednesday");
//  }else if(day==4){
//     console.log("day is Thursday");
//  }else if(day==5){
//     console.log("day is Friday");
//  }else if(day==6){
//     console.log("day is Saturday");
//  }else if(day==7){
//     console.log("day is Sunday");
//  }
// }

// const days = 2;
// switch(days){
//     case 1:
//         console.log("day is Monday");
//         break;
//     case 2:
//         console.log("day is Tuesday");
//         break;
//     case 3:
//         console.log("day is Wednesday");
//         break;
//     case 4:
//         console.log("day is Thursday");
//         break;
//     case 5:
//         console.log("day is Friday");
//         break;
//     case 6:
//         console.log("day is Saturday");
//         break;
//     case 7:
//         console.log("day is Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

//do while loop
// let i = 0;
// do{
//     console.log("Value of i is: ",i);
//     i++;
// }while(i<5);
    
//function
// function fullName(firstname,middlename,lastname){
//     console.log("My full name is: ",firstname," "+middlename+" "+lastname);
// }
// fullName("Toni","Njemet","Smith");

//function with parameter
// function greet(name){
//     console.log("Good afternoon "+name);
// }

// greet("Alice");
// greet("Bob");
// greet("Charlie");

//addition of two numbers
// function addNumbers(num1,num2){
//     const sum = num1 + num2;
//     console.log("The sum of ",num1," and ",num2," is: ",sum);
// }
// addNumbers(5,10);

// //days of the week
// function day(day){
//    switch(day){
//       case 1:
//          console.log("Monday");
//          break;
//       case 2:
//          console.log("Tuesday");
//          break;
//       case 3:
//          console.log("Wednesday");
//          break;
//       case 4:
//          console.log("Thursday");
//          break;
//       case 5:
//          console.log("Friday");
//          break;
//       case 6:
//          console.log("Saturday");
//          break;
//       case 7:
//          console.log("Sunday");
//          break;
//       default:
//          console.log("Invalid day");
//    }
// }
// day(5);

//function to store variable
// const fullName = function(name){
//    console.log(name);
// };
// const address = function address(){
//    console.log("Kinondoni, Dar es Salaam");
// }
// fullName("Toni Njemet Smith");
// address();

//object
// const person = {
//    fullName: "Toni Njemet Smith",
//    university: "Institute of Finance Management",
//    programe: "Bachelor of Science in information Technology",
//    address: "Kinondoni, Dar es Salaam"
// };
// console.log("fullName :" +person.fullName + ", university :" +person.university + ", programe :" +person.programe + ", address :" +person.address);

//defining function inside object
// const car={
//    brand:"Toyota",
//    model:"Corolla",
//    year:2020,
//    speed:0,
//    drive: function(name){
//       this.speed = this.speed + name;
//       return this.brand + "is moving at a speed of"+ this.speed ;
//    }
// }
// console.log(car.drive(30));

//function to determine even numbers