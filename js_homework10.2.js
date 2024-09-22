let text = "Wonderful, Joyful, Happiness, Time, Task, Apple";
let regex = /\b[^Aa]{6,}\b/g;

let matches = text.match(regex);
console.log(matches);