// // This is the first attempt at calculation on a alertpopup.
// document.getElementById("sum").addEventListener("click", function (){
//     const val1 = parseFloat(document.getElementById('inputA').value);
//     const val2 = parseFloat(document.getElementById("inputB").value);

//     if (isNaN(val1) || isNaN(val2)){
//         alert('Please Enter Valid Nmbers');
//     }
//     else{
//         const result = val1 + val2;
//         alert(`The sum of the input is ${result}`);
//         return 0;
//     }
    
// })

// This is the second revised version ====  Crosschecking
//================================================================================
document.getElementById("sum").addEventListener("click", function () {
  var a = document.getElementById("inputA").value.trim();
  var b = document.getElementById("inputB").value.trim();

  // Validation
  if ([a, b].some(v => v.trim() === "" || isNaN(v))) {
  alert("Please enter valid numbers.");
  return;
}

  var sum = Number(a) + Number(b);

  document.getElementById("popup-title").textContent = document.title;
  document.getElementById("popup-message").textContent = "The sum of the input is " + sum;

  document.getElementById("custom-alert").style.display = "flex";
  logHistory(`${a} + ${b}`, sum);
});

function closePopup() {
  document.getElementById("custom-alert").style.display = "none";
}

// Seems the Second Option is more stylish, I'll keep it.
// However let's do a history state

// Input and history setup

const historyList = document.getElementById("historyList");
let history = [];

function logHistory(expression, result) {
  const entry = `${expression} = ${result}`;
  history.push(entry);

  if (history.length > 5) {
    history = [entry]; // Reset to fresh
    historyList.innerHTML = ""; // Clear display
  }

  const div = document.createElement("div");
  div.textContent = entry;
  historyList.appendChild(div);
}



// This is a varied generated text box => 👇
const varyText = ['i am the first in the iteration','I am the second in the interation. Want to know more? Check out your Instructor\'s tutorial','I am the third in the iteration, Keep going!'];

function changeText() {
  document.getElementById('editables').innerHTML = varyText[Math.floor(Math.random() * 3)];

}

// The above code turns a piece of text to one out of a predetermined set list of possible scripts, changing with each action


// Next we are going to bind the values of one element to another
let rangeRule = document.getElementById('rangeValue');
const baseText = rangeRule.textContent;

document.getElementById('range').addEventListener('input', function() {
  rangeRule.textContent = baseText  + this.value;
});



// The below is an example on using multiple event handling on an element 

let el = document.getElementById("p1");
let le = document.getElementById('p2');

  // Setting the fadeout effect param

let fadeTimers = [];

function clearFadeTimers() {
  fadeTimers.forEach(timer => clearTimeout(timer));
  fadeTimers = [];
}

el.addEventListener("mouseover", function() {
    // console.log("You entered p1!");
  clearFadeTimers();
  

  le.style.visibility = 'visible';
  le.style.opacity = '1';
  le.textContent = 'You entered p1';


});


el.addEventListener("mouseout", function() {

    // console.log("You left p1!");
    clearFadeTimers();
    le.style.opacity = "0";
    

    fadeTimers.push(setTimeOut(()=> {
      le.textContent = 'You\'ve left p1';
      le.style.opacity = "1";
      le.style.visibility = 'visible';

      fadeTimers.push(setTimeOut(() => {
        le.style.opacity = "0";

          fadeTimers.push(setTimeOut(() => {
            le.style.visibility = "hidden";
          }, 400));
        }, 1000));
      }, 400));
    });


    // The below shows the tooltip when on mouse stop for two seconds, displays the dynamically updated mouse coordnates!


  const tooltip =document.getElementById('mouseXY');
  let delay;
  let lastMouseX = 0;
  let lastMouseY = 0;

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    tooltip.style.left = x + 15 + "px"; // Offset from cursor
    tooltip.style.top = y + 15 + "px";

    lastMouseX = x;
    lastMouseY = y;
    tooltip.textContent = `Current Mouse Position: (x): ${x} (y): ${y}`;

    //Reset any existing delay
    clearTimeout(delay);
    tooltip.style.opacity = "0";
    tooltip.style.visibility = "hidden";


    delay = setTimeout(() => {
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
    }, 2000);
  });