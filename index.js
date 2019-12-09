/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let realTime = parseInt(timeString, 10); 

  if (realTime < 12) {
  return "Good Morning"}
  else if (realTime >= 12 && realTime < 17)
  {return "Good Afternoon"}
  else {
    return "Good Evening"}
}

function displayMessage(newMessage){
  document.getElementById("greeting").innerText= newMessage;
}