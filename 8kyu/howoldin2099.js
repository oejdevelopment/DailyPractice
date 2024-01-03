function calculateAge(birthYear, countYear) {
  if (birthYear === countYear) {
    return "You were born this very year!";
  }

  const isFuture = countYear > birthYear;
  const ageDifference = Math.abs(countYear - birthYear);
  const yearPlural = ageDifference === 1 ? "year" : "years";

  if (isFuture) {
    return `You are ${ageDifference} ${yearPlural} old.`;
  } else {
    return `You will be born in ${ageDifference} ${yearPlural}.`;
  }
}
