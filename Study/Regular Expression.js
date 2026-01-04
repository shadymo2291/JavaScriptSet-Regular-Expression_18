console.log("#".repeat(30));
console.log(
  "%cRegular Expression|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// ===========================================================

/*
Regular Expression:
-------------------

- Syntax:
1- /pattern/modifier(s);
2- new RegExp("pattern", "modifier(s)")

- Modifiers => Flags
1- i ==> case-insensitive
2- g ==> global
3- m ==> multilines

- Search Methods:
match(pattern)
*/

// let myString = "Hello Elzero Web School i Love elzero";

// let regex = /elzero/;
// let regex = /elzero/g;
// let regex = /elzero/i;
// let regex = /elzero/gi;
// let regex = new RegExp("elzero", "gi");

// console.log(myString.match(regex));
// ['elzero', index: 31, input: 'Hello Elzero Web School i Love elzero', groups: undefined]

// console.log(myString.match(regex)); // ['elzero']

// console.log(myString.match(regex));
// ['Elzero', index: 6, input: 'Hello Elzero Web School i Love elzero', groups: undefined]

// console.log(myString.match(regex)); // ['Elzero', 'elzero']
// console.log(myString.match(regex)); // ['Elzero', 'elzero']

// ===========================================================

/*

-Ranges:

- Part 1:

- (X|Y) ==> X Or Y
- [0-9]
- [^0-9] ---- ^ ===> means "not"
- Practice

*/

// let tld = "com net org info code io";

// let tldRe = /info|org|io/gi;

// console.log(tld.match(tldRe)); // ['org', 'info', 'io']

// let nums = "12345678910";

// let numsRe = /[0-9]/g;
// let numsRe = /[0-3]/g;
// let numsRe = /[^0-3]/g;

// console.log(nums.match(numsRe)); // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']
// console.log(nums.match(numsRe)); // ['1', '2', '3', '1', '0']
// console.log(nums.match(numsRe)); // ['4', '5', '6', '7', '8', '9']

// let specialNums = "1!23@4$56%78&9";

// let specialNumsRe = /[^0-9]/g;

// console.log(specialNums.match(specialNumsRe)); // ['!', '@', '$', '%', '&']

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";

// let practiceRe = /OS[5-9]OS/gi;
// let practiceRe = /Os[5-9]Os/g;

// console.log(practice.match(practiceRe));

// ===========================================================

/*
-Ranges:

- Part 2:

-[a-z]
-[^a-z]
-[A-Z]
-[^A-Z]
-[abc]
-[^abc]

*/

// let myString = "AaBbcdefG123!234%^&*";

// let atozSmallRe = /[a-z]/g;
// let atozSmallRe = /[^a-z]/g;
// let atozSmallRe = /[A-Z]/g;
// let atozSmallRe = /[a-z]/gi;
// let atozSmallRe = /[a-zA-Z]/g;
// let atozSmallRe = /[a-z]|[A-Z]/g;
// let numbers = /[^a-z0-9]/gi;

// let numberAndSpsArr = myString.match(numbers);

// console.log(myString.match(atozSmallRe)); // ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(myString.match(atozSmallRe)); // ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// console.log(myString.match(atozSmallRe)); // ['A', 'B', 'G']
// console.log(myString.match(atozSmallRe)); // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
// console.log(myString.match(atozSmallRe)); // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
// console.log(myString.match(atozSmallRe)); // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
// console.log(numberAndSpsArr); // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']

// ===========================================================

/*

Character Classes:

1- .  ==> matches any Character, Except newline or other line terminators.
2- \w ==> matches word Character, [a-z, A-Z, 0-9, underscore]
3- \W ==> matches Not word Character
4- \d ==> matches digits 0-9.
5- \D ==> matches Not digits 0-9.
6- \s ==> matches whitespace character.
7- \S ==> matches Notwhitespace character.

*/

// let email = "O@@@g...com o@g.com o@g.net A@Y.com O-g.com o@s.org 1@1.com";

// let anyCharacter = /./g;
// let word = /\w/g;
// let notWord = /\W/g;
// let digit = /\d/g;
// let notDigit = /\D/g;
// let whiteSpace = /\s/g;
// let NotWhiteSpace = /\S/g;

// let validEmail = /\w@[a-zA-Z].(com|org|net)/g;

// console.log(email.match(anyCharacter));
// console.log(email.match(word));
// console.log(email.match(notWord));
// console.log(email.match(digit));
// console.log(email.match(notDigit));
// console.log(email.match(whiteSpace));
// console.log(email.match(NotWhiteSpace));
// console.log("#".repeat(20));

// console.log(email.match(validEmail));

// ===========================================================

/*

Character Classes:

1- \b ==> matches at the beginning or end of the a word
2- \B ==> matches Not at the beginning or end of the a word

test Method:
- pattern.test(input)

*/

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 spamShady Spam5 Osama Ahmed";

// let spamList = /(\bspam|spam\b)/gi;

// console.log(names.match(spamList));

// console.log(spamList.test(names)); // true
// console.log(/(\bspam|spam\b)/gi.test("spam22")); // true
// console.log(/(\bspam|spam\b)/gi.test("shady")); // false
// console.log(/(\bspam|spam\b)/gi.test("shadyspam")); // true

// ===========================================================

/*

Quantifiers:

1- n+ ==> One Or More
2- n* ==> Zero Or More
3- n? ==> Zero Or One

*/

// let emails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";

// let mailsRe1 = /\w+@\w+.\w+/gi;
// let mailsRe2 = /\w+@\w+.(com|net)/gi;

// console.log(emails.match(mailsRe1));
// console.log(emails.match(mailsRe2));

// let nums = "0110 10 150 05120 0560 350 00";

// let numsRe1 = /0\d+0/gi;
// let numsRe2 = /0\d*0/gi;

// console.log(nums.match(numsRe1)); // ['0110', '05120', '0560']
// console.log(nums.match(numsRe2)); // ['0110', '05120', '0560', '00']

// let urls = "https://google.com http://www.website.net web.com";

// let urlsRe1 = /((https|http):\/\/)?(www.)?\w+.\w+/g;
// let urlsRe2 = /(https?:\/\/)?(www.)?\w+.\w+/g;

// console.log(urls.match(urlsRe1)); // ['https', 'http']
// console.log(urls.match(urlsRe2)); // ['https', 'http']

// ===========================================================

/*

Quantifiers:

1- n{x} ==> Number of
2- n{x,y} ==> Range
3- n{w,} ==> At Least x

*/

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/S\d{3}S/g)); // S[Three Numbers]S => ['S100S']
// console.log(serials.match(/S\d{4,5}S/g)); // S[Four Or Five Numbers]S => ['S3000S', 'S50000S']
// console.log(serials.match(/S\d{4,}S/g)); // S[At Least Four Numbers]S => ['S3000S', 'S50000S', 'S950000S']

// ===========================================================

/*

Quantifiers:

1- $  ==> End With Something
2- ^  ==> Start With Something
3- ?= ==> Followed By Something
3- ?! ==> Not Followed By Something

*/

// let myString = "We Love Programming";

// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/g.test(myString)); // true
// console.log(/lz$/g.test(names)); // false
// console.log(/lz$/gi.test(names)); // true

// console.log(/^we/g.test(myString)); // false
// console.log(/^we/gi.test(myString)); // true
// console.log(/^1/gi.test(names)); // true
// console.log(/^\d/gi.test(names)); // true

// console.log(names.match(/\d\w{5}z/gi)); // ['1OsamaZ', '2AhmedZ', '5GamalZ']
// console.log(names.match(/\d\w{5}(?=z)/gi)); // ['1Osama', '2Ahmed', '5Gamal']
// console.log(names.match(/(\d)\w{8}/gi)); // ['3Mohammed', '4Moustafa']
// console.log(names.match(/(\d)\w{8}(?!z)/gi)); // ['3Mohammed']

// ===========================================================

/*

Quantifiers:

1- replace.
2- replaceAll.

*/

// let txt = "We Love Programming And @ Because @ is Amazing";

// console.log(txt.replace("@", "JavaScript")); // We Love Programming And JavaScript Because @ is Amazing
// console.log(txt.replaceAll("@", "JavaScript")); // We Love Programming And JavaScript Because JavaScript is Amazing

// console.log(txt.replace(/@/g, "JavaScript")); // We Love Programming And JavaScript Because JavaScript is Amazing
// console.log(txt.replaceAll(/@/gi, "JavaScript")); // We Love Programming And JavaScript Because JavaScript is Amazing

// ===========================================================

/*

Quantifiers:

- Input Form Validation Practice

*/

document.querySelector("#register").onsubmit = function () {
  let phoneInput = document.querySelector("#phone").value;

  let phoneInputRe = /\(\d{4}\)\s\d{3}-\d{4}/gi;

  if (phoneInputRe.test(phoneInput)) {
    return true;
  } else {
    return false;
  }
};
