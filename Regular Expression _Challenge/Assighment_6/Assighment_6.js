console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_6

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

// RegExp_1:
// let re = /(https?:\/\/)?(\w+.)?\w+.\w{3}(:\w+\/\w+\.\w{3}\?\w+\=\d+\&\w+\=\w+)?/g;

// RegExp_2:
let re = /(https?:\/\/)?(\w+.)?\w+.\w{3}(:\d+.*)?$/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
