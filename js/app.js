'use strict'

var userName = prompt("Hello fabulous person, what is your name?");

while(userName === "") {
  userName = prompt("Please ente your name");
}

console.log(userName);

alert("Hello " + userName +"!! ,it's pleasure to know you");
alert("I will introduce my self by asking you some questions. please answer by yes/y or no/n");

var userInput = prompt("Do I like cats?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("Do I like cats?").toLowerCase();
}
if(userInput === "yes" || userInput === "y") {
  alert("That's right, I mean who doesn't, they are so cute.");
  // console.log("That's right, I mean who doesn't, they are so cute.");
} else if (userInput === "no" || userInput === "n") {
  alert("That's not right,I love cats, now you know something about me. :)");
  // console.log("That's not right,I love cats, now you know something about me. :)");
}


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
  // console.log("That's right, my favorite color is blue.");
}

userInput = prompt("One of my hobbies is watching movies, is that right?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("One of my hobbies is watching movies, is that right?").toLowerCase();
}

if(userInput === "yes" || userInput === "y") {
  alert("That's right, I love watching comedy movies.");
  // console.log("That's right, I love watching comedy movies.");
} else if (userInput === "no" || userInput === "n") {
  alert("That's not right, I love watching movies.");
  // console.log("That's not right, I love watching movies.");
}

userInput = prompt("I love reading books, can you relate?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("I love reading books, can you relate?").toLowerCase();
}

if(userInput === "yes" || userInput === "y") {
  alert("That's great for you, for me I don't read but love to in the future.");
  // console.log("That's great for you, for me I don't read but love to in the future.");
} else if (userInput === "no" || userInput === "n") {
  alert("That's fine, I also don't read books but maybe in the future.");
  // console.log("That's fine, I also don't read books but maybe in the future.");
}

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
}

userInput = prompt("I do play video games, is that correct?").toLowerCase();

while(userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n") {
  alert("Please just asnwer by yes/y or no/n");
  userInput = prompt("I do play video games, is that correct?").toLowerCase();
}

if(userInput === "yes" || userInput === "y") {
  alert("Yes, I play games on consoles.");
  // console.log("Yes, I play games on consoles.");
} else if (userInput === "no" || userInput === "n") {
  alert("Really!?, of course I play games.");
  // console.log("Really!?, of course I play games.");
}