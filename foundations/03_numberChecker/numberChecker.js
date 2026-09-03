function numberChecker(number) {
  switch (number) {
    case 1000:
    case 10:
      return true;

    case 9:
    case 6:
      return false;

    default:
      return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
