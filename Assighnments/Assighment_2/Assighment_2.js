console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesRe = /Os(\d+)?O/g;

console.log(specialNames.match(specialNamesRe)); // ['Os10O', 'OsO', 'Os100O']

// Output
// ['Os10O', 'OsO', 'Os100O']
