function mafct() {
  let a = 3;
}

try {
  mafct();
} catch (err) {
  console.log(err);
} finally {
  console.log("yep");
}

function isNumber(num) {
  if (isNaN(num)) {
    throw "not a number";
  }
}

try {
  isNumber("5f");
} catch (err) {
    console.log(err);
}
