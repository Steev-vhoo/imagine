const btn = document.getElementById("btn");
btn.onclick = function () {
    console.log('You clicked me');
    alert('You clicked me');
}
const btn1 =document.getElementById("btn1");
btn1.onclick =function() {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

/* Variables */
const pi = 3.142;
let username = 'Steev';
let age = '69';
let present = false;

/*Objects */
const person = {
    username : 'Steev',
    age : 69,
    present : false,
    child: {
        name: 'Vhoo',
        friend: {
            name : 'Tesla',
        }
    }  
}

console.log(person.username);
console.log(person.age);
console.log(person.present);

person.age = 74;
console.log(person.age);
console.log(person);

person.child.friend.name = 'Sabrina';
console.log(person);

const age1 =18;
if (age1 >= 18) {
  'You are true';
} else {
  'You are false';
}

/*For loop*/
for (let i = 0; i<=5; i++ ){
  console.log ( 'We did it!');
}

//function
// Defining a function
function login(username,password){
  //validate username and password
  if (username || !password){
    return 'username or password not provided';
  }
  if (username =='Steev vhoo' && password == '4334' ){
     return 'user is logged in';
   } else{
      return 'Invalid username or password';
   }
}

//invoking a function
login('Steev vhoo','4334')

// Basic arithmetic operations
14%5
Math.random() * 100
'3'+' beautiful'
'2' * 4


// String in Js
//Concatenation
const firstName = 'Steev';
const lastName = 'Vhoo';
firstName + ' '+ lastName;

//Template literal
`${firstName}`


// Write a function that will add a participant to our Google classroom
const participant = []
function addParticipant(email) {
  //Check if email was provided
  if (email === undefined || email === null){
    return 'No email provided';
  }
  //Check if email is valid
  if (!email.includes('@')){
    return 'Invalid email provided';
  }
  // Add email to participants 
  participant.push(email)
  return 'Participant added';
}

addParticipant('holdbrook@gmail.com')
addParticipant('vhoobroo@icloud.com')
participant;
participant;

// Arrays in Js
const users = [
  {
    username:'Steev',
    password: '12345',
    email: 'vhoo@gmail.com'
  },
   {
    username:'Ama',
    password: '12345',
    email: 'dagna@gmail.com'
  },
   {
    username:'Naa',
    password: '12345',
    email: 'naakoshie@gmail.com'
  },
   {
    username:'Kpakpo16',
    password: '12345',
    email: 'kpapz@gmail.com'
  },
]
users;

// Write a function that will take a user with firstname and lastname and return fullname
function userName() {
  return{
    ...user, //three dots is called a spread and rearranges the array 
    fullName: `${user.firstName} ${user.lastName}`
  }
    return `${user.firstName} ${user.lastName}`;
}
  const user = {
      firstName : "Steev",
      lastName : "vhoo"
  }
userName(user);

//Array map
const users = [
{firstName: 'Michael', lastName: 'Hammond'},
{firstName: 'Ama', lastName: 'Atta'},
{firstName: 'Rachael', lastName: 'Ludwig'},
{firstName: 'Banki', lastName: 'Moon'},
{firstName: 'Burna', lastName: 'Bwoy'},
]
users.map(userName)

function squaredNum(newNum) {
  const squareNum = newNum * newNum;
  return `The square is ${squareNum}`;
}
squaredNum(6);
const numbers = [2,3,4,5,6,7,8,9,10]
numbers.map(squaredNum)


//Array filter
function isEven(evenNum) {
  if (evenNum % 2 ===0){
    return true;
  } else {
    return false;
  }
}
numbers.filter(isEven);
isEven(5)

//Write a function that will allow a user to reset their password
const user = {
  email: 'mickeymond@gmail.com',
  password: '12345'
}
function passwordReset(email, newPassword){
// Check if provided email and password was provided
if (!email || !newPassword){
  return 'Email or password not provided'
}  
//Update password with new one
if (email=== user.email){
 user.password = newPassword;
  return `Password reset successful`;
}
if (email !== user.email){
  return `invalid email`;
}
}

passwordReset()


//You have been given an array of students with some of them marked as present and others marked as absent. write a function to return the total number of students present.
const students = [
  { id: 1, present: true },
  { id: 2, present: true },
  { id: 3, present: false },
  { id: 4, present: true },
  { id: 5, present: false },
];

function studentPresent(){
  
if (students === false){
  students.pop();
}
const totalStudentPresent = students.length -2;
return `There are ${totalStudentPresent} students present`   

  
 
}

studentPresent()


//Classes in Javascript
class laptop {
  constructor(brand, color){
    this.brand = brand;
    this.color = color;
  }
}

const laptop1 = new laptop('Dell', 'black');
const laptop2 = new laptop('Lenovo', 'blue');
laptop2.color;

