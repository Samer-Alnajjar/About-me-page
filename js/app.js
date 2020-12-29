'use strict'
var score = 0;
var userName = prompt("Hello fabulous person, what is your name?");

while(userName === "") {
  userName = prompt("Please enter your name");
}

console.log(userName);

alert("Hello " + userName +"!! ,it's pleasure to know you");
alert("I will introduce my self by asking you some questions. please answer by yes/y or no/n");

//First question
var userInput = prompt("Do I like cats?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("Do I like cats?").toLowerCase();
}
if(userInput === "yes" || userInput === "y") {
  alert("That's right, I mean who doesn't, they are so cute.");
  score = score+1;
  // console.log("That's right, I mean who doesn't, they are so cute.");
} else if (userInput === "no" || userInput === "n") {
  alert("That's not right,I love cats, now you know something about me. :)");
  // console.log("That's not right,I love cats, now you know something about me. :)");
}

//Second question
userInput = prompt("my favorite color is red, is it?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("my favorite color is red, is it?").toLowerCase();
}

if(userInput === "yes" || userInput === "y") {
  alert("That's not right, my favorite color is blue.");
  // console.log("That's not right, my favorite color is blue.");
} else if (userInput === "no" || userInput === "n") {
  alert("That's right, my favorite color is blue.");
  score = score+1;
  // console.log("That's right, my favorite color is blue.");
}

//Third question
userInput = prompt("One of my hobbies is watching movies, is that right?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("One of my hobbies is watching movies, is that right?").toLowerCase();
}

if(userInput === "yes" || userInput === "y") {
  alert("That's right, I love watching comedy movies.");
  score = score+1;
  // console.log("That's right, I love watching comedy movies.");
} else if (userInput === "no" || userInput === "n") {
  alert("That's not right, I love watching movies.");
  // console.log("That's not right, I love watching movies.");
}

//Fourth question
userInput = prompt("I love reading books, can you relate?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("I love reading books, can you relate?").toLowerCase();
}

if(userInput === "yes" || userInput === "y") {
  alert("That's great for you, for me I don't read but I love to have this hobby in the future.");
  // console.log("That's great for you, for me I don't read but love to in the future.");
} else if (userInput === "no" || userInput === "n") {
  alert("That's fine, I also don't read books but maybe in the future.");
  // console.log("That's fine, I also don't read books but maybe in the future.");
  score = score+1;
}

//Fifth question
userInput = prompt("Can I swim?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("Can I swim?").toLowerCase();
}

if(userInput === "yes" || userInput === "y") {
  alert("That's correct, but in the kid's pool, because I can walk in there.");
  // console.log("That's correct, but in the kid's pool, because I can walk in there.");
} else if (userInput === "no" || userInput === "n") {
  alert("you guessed right.");
  // console.log("you guessed right.");
  score = score+1;
}

//Sixth question

for(let i = 1; i < 5; i++) {
  userInput = prompt("Please guess the number between 1 to 10, you have four attempts");
  var userNumber = parseInt(userInput);
  //I found a source that we can check a value if it's NaN or not by checking if it's equal to itself.
  //Source: https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript
  while(userNumber !== userNumber) {
    userInput = prompt("Please enter a number");
    userNumber = parseInt(userInput);
  }
  if(userNumber === 4) {
    alert("You guessed it right, it's the number four :)");
    i = 5;
    score = score+1;
  } else if (userNumber > 4) {
    alert("Too high");
  } else if (userNumber < 4) {
    alert("Too low");
  }
  if(i === 4) {
    alert("You don't have any attempts left");
  }
}

//Seventh question
var movies = ["deadpool", "r.i.p.d", "the hitman's bodyguard"];
var answer = false;

alert("I love movies, please try to guess from the following movies in which movies Ryan Reynolds did act, you have six attempts");


for(let i = 1; i < 7; i++) {
  userInput = prompt("Deadpool, Identity Thief, Spiderman, Mama, Game Night, The Hitman's Bodyguard, R.I.P.D, Ride Along").toLowerCase();
  for(let j = 0; j < movies.length; j++) {
    if(userInput === movies[j]) {
      alert("you gussed it right");
      j = movies.length;
      i = 7;
      score = score+1;
      answer = true;
    } 
  }
  if(answer === false) {
    alert("Not right, please try again");
    if(i === 6) {
      alert("You are out of attempts, sorry :(");
    }
  }
}
alert("The correct answers are: deadpool, r.i.p.d, the hitman's bodyguard");

userInput = confirm("You did great regradless the score :), would you like to know your score?");

if(userInput === true) {
  alert("Your score is: " + score + " out of 7");
} else {
  alert("it's really doesn't matter");
}