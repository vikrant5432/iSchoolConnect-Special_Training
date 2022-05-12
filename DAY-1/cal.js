function add(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    if (a > b) {
        console.log(a - b);
    }
    else
        console.log(b - a);
}
function div(a, b) {
    if (a > b) {
        console.log(a / b);
    }
    else
        console.log(b / a);
}
function mul(a, b) {
    console.log(a * b);
}
function rightShift(a, b) {
    console.log(a >> b);
}
function leftShift(a, b) {
    console.log(a << b);
}
add(6, 7);
sub(3, 8);
div(34, 989);
mul(5, 56);
rightShift(5, 2);
leftShift(2, 5);
