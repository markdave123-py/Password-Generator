/** @format */

let gen1 = " ";
let gen2 = " ";
let gen3 = " ";
let gen4 = " ";
const generated1 = document.querySelector("#generated1");
const generated2 = document.querySelector("#generated2");
const generated3 = document.querySelector("#generated3");
const generated4 = document.querySelector("#generated4");
const copy1 = document.getElementById("copy1")
const copy2 = document.getElementById("copy2")
const copy3 = document.getElementById("copy3")
const copy4 = document.getElementById("copy4")
const state = document.querySelector("#state")
let isValid = false
const myValue = document.querySelector("#number");
 const arr = [
   "q",//auto code formatting caused this, and i'm too lazy to do anything about it 
   "w",
   "e",
   "r",
   "t",
   "y",
   "u",
   "i",
   "o",
   "p",
   "a",
   "s",
   "d",
   "f",
   "g",
   "h",
   "j",
   "k",
   "l",
   "z",
   "x",
   "c",
   "v",
   "b",
   "n",
   "m",
   "Q",
   "W",
   "E",
   "R",
   "T",
   "Y",
   "U",
   "I",
   "O",
   "P",
   "A",
   "S",
   "D",
   "F",
   "G",
   "H",
   "J",
   "K",
   "L",
   "Z",
   "X",
   "C",
   "V",
   "B",
   "N",
   "M",
   ";",
   "/",
   "?",
   "!",
   "@",
   "#",
   "$",
   "%",
   "^",
   "&",
   "*",
   "(",
   ")",
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "0",
 ];

const generate = () => {
  if (myValue.value >= 1 && myValue.value < 14) {
    state.textContent = " ";
     isValid = true;
    for (let i = 0; i < myValue.value ;i++) {
      gen1 += arr[Math.floor(Math.random() * arr.length)];
      gen2 += arr[Math.floor(Math.random() * arr.length)];
      gen3 += arr[Math.floor(Math.random() * arr.length)];
      gen4 += arr[Math.floor(Math.random() * arr.length)];
      console.log(gen1,gen2,gen3,gen4)
     }
     generated1.value = gen1;
     generated2.value= gen2;
     generated3.value = gen3;
     generated4.value= gen4;
  } else if (myValue.value == "") {
         state.textContent = "Please enter a valid number!";
   } else {
     generated1.value = "invalid input";
     generated2.value= "invalid input";
     generated3.value = "invalid input";
     generated4.value = "invalid input";
     state.textContent = "You entered an invalid input!";
     console.log("value is either less than 1 or greater than 13");
   } 
}
copy1.addEventListener("click", function () {
  if (isValid) {
    generated1.select();
    generated1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated1.value);
    alert("You copied " + generated1.value);
  } else {
    alert("You have not generated a password");
  }
});
copy2.addEventListener("click", function () {
  if (isValid) {
    generated2.select();
    generated2.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated2.value);
    alert("You copied " + generated2.value);
  } else {
    alert("You have not generated a password");
  }
});
copy3.addEventListener("click", function () {
  if (isValid) {
    generated3.select();
    generated3.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated3.value);
    alert("You copied " + generated3.value);
  } else {
    alert("You have not generated a password");
  }
});
copy4.addEventListener("click", function () {
  if (isValid) {
    generated4.select();
    generated4.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated4.value);
    alert("You copied " + generated4.value);
  } else {
    alert("You have not generated a password");
  }
});
