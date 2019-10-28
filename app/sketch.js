let result, score, randomLetter, randomNumber, text, letter, number, scale;


//Set up the sketch
function setup() {
  scale = (windowWidth) / 30;

  var canvas = createCanvas(scale*8, scale*8);
  canvas.parent('sketch-holder');
  background(230);
  score = 0;

  text = select("#coords");
  reload();
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
      r.html("Correct!");
      score++;
      scoreText = select("#score");
      scoreText.html(`Score: ${score}`);
      r.style('color', "#00FF01");
    }
    else{
      r = select(".status");
      r.html("Incorrect!");
      score = 0;
      r.style('color', "red");
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
  p3 = scale;
  p4 = scale;

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
      p1 = p1 + scale;
    }
    p1 = 0;
    p2 = p2 + scale;
  }
}
