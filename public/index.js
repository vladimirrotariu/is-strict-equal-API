const strictEquals = (valueA, valueB) => {
  if (!Number.isNaN(valueA) && !Number.isNaN(valueB)) {
    return valueA <= valueB && valueA >= valueB;
  }
};
