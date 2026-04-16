const { calculateScore } = require("./utils/scoring");

function detectFraud(claim) {
let score = 0;
let reasons = [];

// GPS Check
if (claim.userLocation !== claim.eventLocation) {
score += 40;
reasons.push("GPS mismatch");
}

// Time Check (late night suspicious)
if (claim.eventTime >= 0 && claim.eventTime <= 4) {
score += 20;
reasons.push("Unusual claim time");
}

// Weather Check (dummy validation)
const validWeatherEvents = ["rain", "storm"];
if (!validWeatherEvents.includes(claim.weather)) {
score += 30;
reasons.push("Weather inconsistency");
}

return {
score: calculateScore(score),
reasons
};
}

module.exports = { detectFraud };
