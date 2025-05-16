// document.getElementById('Count').innerText = 7;
// let myAge = 28;
// console.log(myAge);

let count = 0;
function increment(){
  count++;
  document.getElementById('Count').innerText = count;
}

console.log(4+4);
console.log(4+"44");

function save(){
  count = 0;
  document.getElementById('Count').innerText = count;
}

let name = "Akshay";
let greetings = "Welcome back !";
let welcomeMesaage = document.getElementById('Welcome-el');
welcomeMesaage.innerText = greetings + " " +name;

function likeCount(){
  let countLike = 0;
    function addLike(){
      return countLike += 1;
    }
    addLike();
}

console.log(likeCount());
console.log(likeCount());
console.log(likeCount());
