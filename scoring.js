function calculateScore(score) {
  if (score > 100) return 100;
  return score;
}

module.exports = { calculateScore };