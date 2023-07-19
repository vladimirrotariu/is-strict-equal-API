const strictEquals = (valueA, valueB) => {
  Number.isNaN(valueA) || Number.isNaN(valueB)
    ? (typeCombined = "NaN NaN")
    : (typeCombined = typeof valueA + " " + typeof valueB);

  if (valueA <= 0 && valueA >= 0 && valueB <= 0 && valueB >= 0) {
    return true;
  }

  switch (typeCombined) {
    case "NaN NaN":
      return false;

    case "number number":
      return valueA <= valueB && valueA >= valueB;

    case "boolean boolean":
      return valueA ? valueB : !valueB;

    case "string string":
      if (valueA.length >= valueB.length && valueA.length <= valueB.length) {
        const lengthText = valueA.length;
        let charactersA = valueA.split("");
        let charactersB = valueB.split("");
        let isLocallyEqual = [];

        for (let i = 0; i < lengthText - 1; i++) {
          isLocallyEqual.push(
            charactersA.slice(i, i + 1).includes(charactersB[i])
          );
        }

        const lastCharacterA = charactersA[lengthText - 1];
        let lastCharacterB = [];
        lastCharacterB.push(charactersB[lengthText - 1]);
        isLocallyEqual.push(lastCharacterB.includes(lastCharacterA));
        return !isLocallyEqual.includes(false);
      }
      return false;
  }

  return false;
};

console.log(`1 and 1 strictly equal? ${strictEquals(1, 1)}`);
console.log(`NaN and NaN strictly equal? ${strictEquals(NaN, NaN)}`);
console.log(`false and true strictly equal? ${strictEquals(false, true)}`);
console.log(`false and false strictly equal? ${strictEquals(false, false)}`);
console.log(`0 and -0 strictly equal? ${strictEquals(0, -0)}`);
console.log(`1 and "1" strictly equal? ${strictEquals(1, "1")}`);
console.log(
  `"Water" and "oil" strictly equal? ${strictEquals("Water", "oil")}`
);
console.log(`"Oil" and "Oil" strictly equal? ${strictEquals("Oil", "Oil")}`);
