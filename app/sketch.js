let result, score, randomLetter, randomNumber, text, letter, number;

var correct, incorrect;

//Set up the sketch
function setup() {
  var canvas = createCanvas(480, 480);
  canvas.parent('sketch-holder');
  background(230);
  score = 0;

  text = select("#coords");
  reload();
}

//Preload of sounds
function preload(){
  correct = loadSound("../assets/correct.mp3");
  incorrect = loadSound("../assets/incorrect.wav");
}

//Reloads board
function reload(){
  createBoard();
  result = letter + number;
}

//Correct or incorrect verification
function keyPressed(){
  if(keyCode === ENTER){
    if(text.value().toString() == result){
      r = select(".status");
      r.html("Correto!");
      score++;
      scoreText = select("#score");
      scoreText.html(`Score: ${score}`);
      r.style('color', "#00FF01");
      correct.play();
    }
    else{
      r = select(".status");
      r.html("Incorreto!");
      r.style('color', "red");
      incorrect.play();
    }
    text.value("");
    reload();
  }
}

//Generates a random number (0 not included)
function generateRandom(number){
  result = 0;
  while(result === 0){
    result = floor(Math.random() * number);
  }
  return result;
}

//Generates board
function createBoard(){
  p1 = 0;
  p2 = 0;
  p3 = 60;
  p4 = 60;

  randomLetter = generateRandom(8);
  //Getting coordinate value
  switch(randomLetter){
    case 1:
      letter = 'a';
      break;
    case 2:
      letter = 'b';
      break;
    case 3:
      letter = 'c';
      break;
    case 4:
      letter = 'd';
      break;
    case 5:
      letter = 'e';
      break;
    case 6:
      letter = 'f';
      break;
    case 7:
      letter = 'g';
      break;
    case 8:
      letter = 'h';
      break;
  }

  randomNumber = generateRandom(8);
  //Getting coordinate value
  number = 9 - randomNumber;

  for(i=0;i<8;i++){
    for(j=0;j<8;j++){
      if(i % 2 == 0){
        if(j % 2 == 0){
          fill(0);
        }
        else{
          fill(255);
        }
      }
      else{
        if(j % 2 == 0){
          fill(255);
        }
        else{
          fill(0);
        }
      }

      if(i === randomNumber-1 && j === randomLetter-1){
        noStroke();
        fill(250, 218, 94);
      }

      rect(p1, p2, p3, p4);
      p1 = p1 + 60;
    }
    p1 = 0;
    p2 = p2 + 60;
  }
}
