let coordenada, randomLetter, randomNumber;

function setup() {
  createCanvas(640, 640);
  background(230);

  input1 = createInput();
  input1.size(10);

  input2 = createInput();
  input2.size(320);

  createBoard();
}

function keyPressed() {
  letter = 0;
  switch(input1.input){
    case 'a':
      letter = 1;
    case 'b':
      letter = 2;
    case 'c':
      letter = 3;
    case 'd':
      letter = 4;
    case 'e':
      letter = 5;
    case 'f':
      letter = 6;
    case 'g':
      letter = 7;
    case 'h':
      letter = 8;
  }

  console.log(letter);

  if (keyCode === ENTER) {
    if(letter = randomLetter && input2.input == randomNumber){
      console.log('Correct');
    }
    else{
      console.log('Incorrect');
    }
  }
}

function createBoard(){
  p1 = 0;
  p2 = 0;
  p3 = 80;
  p4 = 80;

  randomLetter = floor(Math.random() * 8);
  randomNumber = floor(Math.random() * 8);

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

      if(i === randomLetter && j === randomNumber){
        fill(255, 0, 255);
      }

      rect(p1, p2, p3, p4);
      p1 = p1 + 80;
    }
    p1 = 0;
    p2 = p2 + 80;
  }
}
