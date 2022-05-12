function add(a: number, b: number) {
  console.log(a + b);
}

function sub(a: number, b: number) {
  if (a > b) {
    console.log(a - b);
  } else console.log(b - a);
}

function div(a: number, b: number) {
  if (a > b) {
    console.log(a / b);
  } else console.log(b / a);
}

function mul(a: number, b: number) {
  console.log(a * b);
}

function rightShift(a: number, b: number) {
  console.log(a >> b);
}

function leftShift(a: number, b: number) {
  console.log(a << b);
}

add(6, 7);

sub(3, 8);
div(34, 989);
mul(5, 56);
rightShift(5, 2);
leftShift(2, 5);
