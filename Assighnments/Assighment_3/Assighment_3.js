console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_3

let phone = "+(995)-123 (4567)";

let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRe)); // ['+(995)-123 (4567)']

console.log(phoneRe.test(phone)); // true
