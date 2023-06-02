document.addEventListener('DOMContentLoaded', function() {

  var sectionH2Elements = document.querySelectorAll('section h2');
  sectionH2Elements.forEach(function(h2) {
    h2.style.color = 'teal';
  });



  var newButton = document.createElement('button');
  newButton.textContent = 'Click me';

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete paragraphs';

  var paragraphs = [];


  newButton.addEventListener('click', function() {

    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'Thank you for visiting the site.';

    var header = document.querySelector('header');
    header.insertAdjacentElement('afterend', newParagraph);

    paragraphs.push(newParagraph);
  });

  deleteButton.addEventListener('click', function() {

    paragraphs.forEach(function(paragraph) {
      paragraph.remove();
    });


    paragraphs = [];
  });


  var header = document.querySelector('header');
  header.insertAdjacentElement('afterend', newButton);
  header.insertAdjacentElement('afterend', deleteButton);


var button = document.querySelector('button');



// Mouseover event
button.addEventListener('mouseover', function(event) {
  event.target.style.backgroundColor = 'red';
});


button.addEventListener('mouseout', function(event) {
  event.target.style.backgroundColor = '';
});


button.addEventListener('click', function(event) {
  alert('Button clicked!');
});


document.addEventListener('keypress', function(event) {
  var key = event.key;
  console.log('Key pressed:', key);
});



var input = document.getElementById('myInput');
var button = document.getElementById('submitButton');
var output = document.getElementById('output');
var countdownIntervalId;

button.addEventListener('click', function() {
  var inputValue = input.value;

  output.textContent = "Countdown: 5";

  countdownIntervalId = setInterval(function() {
    var countdown = parseInt(output.textContent.split(':')[1]);

    if (countdown > 0) {
      output.textContent = "Countdown: " + (countdown - 1);
    } else {
      clearInterval(countdownIntervalId);
      output.textContent = "Hello, " + inputValue + "!";
    }
  }, 1000);
});


// Get the current date
var currentDate = new Date();

var dateString = currentDate.toDateString();


var dateElement = document.getElementById("currentDate");


var randomRed = Math.floor(Math.random() * 256);
var randomGreen = Math.floor(Math.random() * 256);
var randomBlue = Math.floor(Math.random() * 256);


dateElement.textContent = dateString;
dateElement.style.color = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";



});
