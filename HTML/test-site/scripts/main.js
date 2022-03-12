// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

// Changing image on click event
let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  
  if(mySrc === 'images/firefox-logo.jpg'){
    myImage.setAttribute('src', 'images/doge.jpg');
  }else{
    myImage.setAttribute('src', 'images/firefox-logo.jpg');
  }
}

// Custom username
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function that will set username
function setUserName(){
  // taking input from the user via prompt
  let myName = prompt('Please enter your name: ');

  // if the user click on ok or cancel without entering a name
  if(!myName){
    setUserName();
  }
  else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

// initial check for name inside local storage
if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// onclick event listener attached on the button to listen for click events
myButton.onclick = function(){
  setUserName();
}