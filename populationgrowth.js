// Parameters: p0 - initial population, percent - population growth rate, aug - additional population increase, p - target population
function nbYear(p0, percent, aug, p) {
  let years = 0;

  // Returns: The function returns the number of years it takes for the population (p0) to reach or exceed the target population (p).
  while (p0 < p) {
    // Performance: The function uses a while loop to simulate population growth over time until the target population is reached.
    // Performance: The use of Math.floor ensures that the population is represented as an integer.

    // Errors: The code might not handle edge cases well. For example, if the growth rate is negative or zero,
    // the function will result in an infinite loop.

    // Performance: The code could be improved by validating the input parameters to handle edge cases and prevent potential issues.
    // For instance, checking if the growth rate is non-negative.

    // Population growth calculation
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    years++;
  }

  // Returns: The function returns the number of years it takes for the population (p0) to reach or exceed the target population (p).
  return years;
}
