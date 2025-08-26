console.log("Hello World");


while (true) {

  let number = prompt('Guess the number between 0 and 10');
      number = Number(number);

  randomNumber = Math.floor(Math.random() * 10);

  if (number === randomNumber ) {

    alert('Congratulations! You guessed the correct number.');
    break;
  }
    else
      console.log(`You guessed the number: ${number}, but the correct number was: ${randomNumber}`);
}