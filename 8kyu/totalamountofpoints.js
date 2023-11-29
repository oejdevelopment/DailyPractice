// PREP Step 1: Prepare
// The function takes an array of game results as input, where each game result is represented as an array [team1Score, team2Score].
// The function calculates the total points earned by a team based on the game results.
// Teams earn 3 points for a win, 1 point for a draw, and 0 points for a loss.

// PREP Step 2: Review
// The code uses the map() function to transform each game result into points.
// It then uses the reduce() function to sum up the points and return the total.

// PREP Step 3: Execute
// Let's execute the code to see its behavior.
function points(games) {
  return games
    .map((x) => (x[0] > x[2] ? 3 : x[0] === x[2] ? 1 : 0))
    .reduce((a, b) => a + b, 0);
}

// PREP Step 4: Ponder
// In this example, it might be beneficial to add comments explaining the logic within the map() function for clarity.
