// Extend the functionality of the Array prototype
Array.prototype.remove_ = function (integer_list, values_list) {
  // Create a Set for efficient lookup of values to be removed
  const valuesSet = new Set(values_list);

  // Return a new array that includes only the elements not present in values_list
  const result = integer_list.filter((x) => !valuesSet.has(x));

  // Return the filtered array
  return result;
};
