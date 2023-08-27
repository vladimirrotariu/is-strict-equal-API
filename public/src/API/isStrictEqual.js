const isStrictEqual = (valueA, valueB) => {
  let typeCombined;

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

export default isStrictEqual;
