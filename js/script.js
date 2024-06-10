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