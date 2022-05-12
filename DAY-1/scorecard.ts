function report(score: any) {
  let total: number = score.reduce((pv: any, cv: any) => pv + cv, 0);
  if (total >= 90) {
    return [total, "A"];
  } else if (total >= 75 && total < 90) {
    return [total, "B"];
  } else if (total >= 55 && total < 75) {
    return [total, "C"];
  } else if (total >= 35 && total < 55) {
    return [total, "D"];
  }
}

let uname: string = "vikrant";

let marks: Array<number> = [15, 10, 15, 11, 10];

console.log(`${uname} grade is ${report(marks)}`);
