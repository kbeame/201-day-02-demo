var userName = prompt('What is your name?');
alert("Hello "+userName+ "! I am going to ask you an important question.");
console.log("The user\'s name is " +userName+ ".");
var answer1 = prompt("Do you like pumpkins? YES or NO");
  if (answer1.toUpperCase() === "YES") {
    alert("Yay " +userName+ ", you have good taste!");
  }
  else {
    alert("No. Wrong. Suck a squash.");
  }
