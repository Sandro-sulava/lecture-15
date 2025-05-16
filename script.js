//
// let b = "Hello";

// alert(b + "world");

// confirm("Your age is under 10 ? ");

// let a = confirm("Your age is under 10 ?");

// console.log(a);

// let firstName = prompt("what is yout name ?");

// console.log(firstName);

// let weather = "cold";

// let a = 5;
// let b = 10;
// let c = 30;

// if (a < b) {
//   console.log("this is true");
// } else if (a > c) {
//   console.log("5-i metia 30-ze");
// } else {
//   console.log("yvela sxva danarcheni");
// }

// let d = 10;
// let f = 0;

// if (d > f) {
//   console.log("positive");
// } else if (d < f) {
//   console.log("negative");
// } else {
//   console.log(" this is 0");
// }

// let yourNumber = 10;

// let zeroNumber = 0;

// if (yourNumber > zeroNumber) {
//   console.log("positive number");
// } else if (yourNumber < zeroNumber) {
//   console.log("negative number");
// } else {
//   console.log("your number is 0 or u chosed negative number ");
// }

// let firstColor = "witeli";

// let secondColor = "yviteli";

// let lastColor = "mwvane";

// let ourFriendAnswer = prompt("what color is on lighttrafic");

// if (ourFriendAnswer === firstColor) {
//   console.log("stop");
// } else if (ourFriendAnswer === secondColor) {
//   console.log("get ready");
// } else if (ourFriendAnswer === lastColor) {
//   console.log("you can go");
// } else {
//   console.log("im going to try and figure it out");
// }

let weather = "rain";

let secondWeather = "cold";

let thirdWeather = "hot";

let extraWeather = "snow";

let isGoingOutside = confirm("გასასვლელი ხარ თუ არა გარეთ ");

let ourFriendAnswer = prompt("რა ამინდია გარეთ ?");

if (ourFriendAnswer === weather && isGoingOutside) {
  console.log("მოვიცვათ კურტკა");
} else if (ourFriendAnswer === secondWeather && isGoingOutside) {
  console.log("თბილად ჩავიცვათ");
} else if (ourFriendAnswer === thirdWeather && isGoingOutside) {
  console.log("თხლად ჩავიცვათ");
} else {
  console.log("არ აქვს მნიშვნელობა მაინც არ გადიხარ გარეთ");
}
