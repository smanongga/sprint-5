//Looping a triangle
var line = " ";

while (line.length < 8) {
  console.log(line);
  line += "#";
}


//FizzBuzz
for (var i = 1; i <=100; i++) {
  if (i%3 == 0 && i%5 ==0) {
    console.log("FizzBuzz");
  }
 else if (i % 3 == 0) {
  console.log("Fizz");
  }
  else if (i %5 == 0) {
  console.log("Buzz");
  }
  else {
  console.log(i);
  }
}

//Chess board
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
