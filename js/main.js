// JavaScript Document

document.getElementById("pageTitle").innerHTML = "Hellow World";

var myString = "My awesome project kinda sucks...";

var myElement = document.getElementById("pageSubTitle");

myElement.innerHTML = myString;

var myString = "My awesome project is getting better..";

myElement.innerHTML = myString;

// console loggin'

var w = 42;
var x;

var y = 42;

var z = "42";

// fun w/ auto~type
var answer = w + z;//num+num
var answer = y + z;//num+string

console.info("Now we're whatever");
console.log(myElement);
console.log(myString);
console.log(x);
console.log(y);
console.log("-------");
console.log(answer);

//click events and anonymous functions

var myButtons = document.getElementsByClassName("headerbutn");

for (var i=0; i<myButtons.length; i++) {
	
	myButtons[i].onclick = function(e)	{
		
		e.preventDefault();
		console.log(e);
		alert("the " + e.srcElement.localName + " " + e.srcElement.className + " was clicked!!!");
		
	}
	
}
