const strictEquals = (valueA, valueB) => {
  Number.isNaN(valueA) || Number.isNaN(valueB)
    ? (typeCombined = "NaN NaN")
    : (typeCombined = typeof valueA + " " + typeof valueB);

  switch (typeCombined) {
    case "NaN NaN":
      return false;
    case "number number":
      return valueA <= valueB && valueA >= valueB;
    case "boolean boolean":
      if (valueA) {
        if (valueB) return true;
        else return false;
      } else {
        if (!valueB) return true;
        else return false;
      }
  }

  return false;
};

console.log(`1 and 1 are strict equal? ${strictEquals(1, 1)}`);
console.log(`NaN and NaN are strict equal? ${strictEquals(NaN, NaN)}`);
console.log(`false and true are strict equal? ${strictEquals(false, true)}`);
console.log(`false and false are strict equal? ${strictEquals(false, false)}`);
