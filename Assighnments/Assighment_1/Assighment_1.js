console.log("#".repeat(30));
console.log(
  "%cRegular Expression|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_1

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRe = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;

console.log(ip.match(ipRe));
["2001:db8:3333:4444:5555:6666:7777:8888"];

console.log(ipRe.test(ip)); // true
