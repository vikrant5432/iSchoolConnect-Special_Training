function report(score) {
  var total = score.reduce(function (pv, cv) {
    return pv + cv;
  }, 0);
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
var uname = "vikrant";
var marks = [15, 10, 15, 11, 10];
console.log("".concat(uname, " grade is ").concat(report(marks)));
