// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// 

var dayEl = document.getElementById("currentDay")
//show the current day with the dayjs library

//i need to add timeblocks from standard business hours
// probably going to be until 5pm
// each timeblock needs to have a class letting us know if its in the past present or future
// we need to know the current time with javascript
// we need a way to compare that with the hour in each timeblock
// to which element in the timeblock doo we add the class to

// add a listener to all the buttons
var allButtons = document.querySelectorAll("button")
console.log(allButtons)
allButtons.forEach(function(buttonEl){
  buttonEl.addEventListener("click", saveTask)
})

function saveTask (event){
  console.log("pressed")
  console.log(event)
  // we want each button to know what to save
  // what to save is the text area 
  // the text area that is a sibling to the button is what we want to save
  // what is written in the text area is what I want to save
  var valueToSave = event.target.previousElementSibling.value
  console.log(valueToSave)
  // this will be saved to local storage
  var keyToSave = event.target.parentElement.id
  console.log(keyToSave)
  localStorage.setItem(keyToSave, valueToSave)
  // the key needs to be unique, and we need to able to access it again if we need it


}





$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});