# AI-Based Fraud Detection System

## Overview

This module detects potentially fraudulent claims in a parametric insurance system for gig delivery workers.

It assigns a **fraud score** based on multiple signals and provides **clear reasons** for flagging suspicious claims.

---

## Features

* Fraud score (0–100)
* Multi-factor analysis: 

  * GPS mismatch
  * Weather inconsistency
  * Time anomalies
* Transparent fraud reasons
* Easy integration with claim processing

---

## How It Works

Each claim is evaluated using predefined rules:

| Factor        | Description                                      |
| ------------- | ------------------------------------------------ |
| GPS Check     | Verifies if user location matches event location |
| Weather Check | Confirms if reported weather event is valid      |
| Time Check    | Detects unusual claim timing                     |

Each factor contributes to the final fraud score.

---

## Fraud Score Interpretation

* **0–30** → Low Risk
* **31–70** → Medium Risk
* **71–100** → High Risk

---

## Example

```js
const claim = {
  userLocation: "Hyderabad",
  eventLocation: "Bangalore",
  eventTime: 2,
  weather: "rain"
};

const result = detectFraud(claim);

console.log(result);
```

### Output

```
{
  score: 75,
  reasons: [
    "GPS mismatch",
    "Unusual claim time"
  ]
}
```

---

## Future Improvements

* AI/ML model integration
* Historical behavior analysis
* Real-time API validation
