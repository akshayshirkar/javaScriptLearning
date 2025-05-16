// function likeCount(){
//   let countLike = 0;
//   return function addLike(){
//     return countLike += 1;
//   }
// }
//
// const countOfLike = likeCount();
// console.log(countOfLike());

// makeing the add like function as the arrow function

// We can pass the arugument to the
// function likeCount(countToIncrase){
//   return function addLike(){
//     return countToIncrase+1;
//   }
// }
//
// const finalCount = likeCount(1);
// console.log(finalCount());

// function countOfLike(){
//   let countLike = 0;
//   return function addLike(){
//     countLike += 1;
//     return countLike;
//   }
// }
//
// const count = countOfLike();
// console.log(count());


// const Name = (name) =>{
//   return `My name is ${name}`;
// }
//
// console.log(Name("Test"));

// const Numbers = ({Name='Test',rollNumber = 10} = {} )=>{
//   return `My name is ${Name} and my roll number is ${rollNumber}`;
// }
//
// console.log(Numbers());


// Call the function inside the object

// const users = {
//   sayHello : ()=>{
//    return "Hello";
//   }
// }
//
// console.log(users.sayHello());

// const colors = {
//   red: '#ff0000',
//   green: '#00ff00',
//   blue: '#0000ff'
// }
//
// console.log(colors.red);
// console.log(colors.green);
// console.log(colors.blue);
//
// const colorFunction  = function getColor(color){
//   return colors[color];
// }
//
// console.log(colorFunction('red'));

// const students = {
//   Akshay: 'Topper',
//   John: 'Average',
//   Lisa: 'Excellent'
// };
//
// const getStudent = (student) => {
//   return students[student];
// };
//
// console.log(getStudent('Akshay')); // Output: Topper



const Account = {
  Name : 'ACME',
  Industry : 'IT',
  Active : true,
  HasContact : false,
  chaneAccountName : function(name){
    this.Name = name;
    return this.Name;
  },
  SubAccounts : {
    Title : 'Sub Account'
  }
}

// const getAccountName = (acc) =>{
//   return Account[acc];
// }
//
// console.log(getAccountName('Industry'));
//
//
// console.log(Account.chaneAccountName('Test'));

// Object destructuring
// const {Name,industry} = Account;
// console.log(Name);
//
//
// // Accessing the nested object
// const{SubAccounts:{Title}} = Account;
// console.log(Title);

const account = {
  Name : 'ACME',
  Industry : 'IT',
  Active : true,
  HasContact : false,
}

const newAccount = {
  Name : 'Test 1',
  industry : 'IT',
  Active : true,
  HasContact : false,
}


// const newlyCreatedAccount = Object.assign({}, account , newAccount);
// console.log(newlyCreatedAccount);

// Merg the object using spread operator
// const newlyCreatedAccount = {
//   ...account,
//   ...newAccount
// }
//
// console.log(newlyCreatedAccount);
//
// console.log(account);

// const userMap = new Map();
// userMap.set('Akshay', 'Topper');
// userMap.set('John', 'Average');
// userMap.set('Lisa', 'Excellent');
//
// console.log(userMap);
//
// userMap.forEach((key,value)=>{
//   console.log(key,value);
// })

// const temperatures = [
//   { degrees: 69, isRecordTemp: false },
//   { degrees: 82, isRecordTemp: true },
//   { degrees: 73, isRecordTemp: false },
//   { degrees: 64, isRecordTemp: false }
// ];
//
// //  const newTempArray = temperatures.map(temp =>{
// //   temp.isRecordTemp = true;
// //   return temp;
// // })
// //
// // console.log(newTempArray);
//
//  // Adding the new property to the array
//
// const setIsHeigh = temperatures.map(temp =>{
//   temp.isHeigh = true;
//   return temp;
// })
//
// console.log(setIsHeigh);

// const restaurants = [
//   { name: 'Cap City Diner', milesAway: 2.2 },
//   { name: 'Chop Shop', milesAway: 4.1 },
//   { name: 'Northstar Cafe', milesAway: 0.9 },
//   { name: 'City Tavern', milesAway: 0.5 },
//   { name: 'Shake Shack', milesAway: 5.3 }
// ]
//
// const restaurantsStartWithC = restaurants.filter(res => res.name.startsWith('C') && res.milesAway < 2);
// console.log(restaurantsStartWithC);


// Create the temprature array

// const temprature = [12,20,20,30,40];
// // console.log(temprature[0]);
//
// console.log(temprature.includes(201));

const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

// const newTemp = temperatures.map(tem => {
//   tem.isRecordTemp = true;
//   return tem;
// })
//
// console.log(newTemp);

// const newMap2  = temperatures.map(tem => {
//   tem.isHeigh = false;
//   return tem;
// })
//
// console.log(newMap2);

temperatures.forEach(temperature =>{
  if(temperature.degrees > 60){
    console.log(`Temprature was ${temperature.degrees}`);
  }
})




// Find the restaurant with the Northstar




