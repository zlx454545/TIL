// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const text = "The sunset sets at twelve o' clock.";

// console.log(text.length);

// function alphabetPosition(text) {
//   let rStr = "";
//   for (let i = 0; i < text.length; i++) {
//     if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
//       rStr += text.charCodeAt(i) - 65 + 1;
//       rStr += " ";
//     } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
//       rStr += text.charCodeAt(i) - 97 + 1;
//       rStr += " ";
//     }
//   }
//   rStr = rStr.substring(0, rStr.length - 1);
//   return rStr;
// }

// const prak = alphabetPosition(text);
// console.log(prak);

// const measureKelvin = function () {
//   const measurement = {
//     type: "tmep",
//     unit: "celsius",
//     value: 10,
//   };

//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   // console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

//what is maximum temperature? day? week? month?

const printForecast = function (arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} in ${i + 1} days...`;
  }
  str += "...";
  console.log(str);
};

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

printForecast(arr1);
printForecast(arr2);
