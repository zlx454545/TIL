// ///////assignment 1
// let country = "광명";
// let continet = "Asia" ;
// let population ="50000000";
// console.log(country + continet + population);

// //////assignment 2
// let isIsland = false;
// let language;
// console.log(isIsland);
// console.log(language);

// //coding challange # 1

// let markMass, johnMass, markHeight, johnHeight;

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

// let markBMI, johnBMI;

// markBMI = markMass / markHeight **2 ;
// johnBMI = johnMass / johnHeight **2 ;

// let markHigherBMI = markBMI > johnBMI;

// if(markHigherBMI){
//     console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
// }else{
//     console.log (`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})`);
// }

///////////챌린지3
// const DolphinsScore1 = 97,
//   DolphinsScore2 = 112,
//   DolphinsScore3 = 101;
// const KoalasScore1 = 109,
//   KoalasScore2 = 95,
//   KoalasScore3 = 106;

// const averageDolphin = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
// const averageKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;

// if (
//   (averageDolphin >= 100 && averageKoalas >= 100) ||
//   averageDolphin === averageKoalas
// ) {
//   console.log(`Draw!`);
// } else if (averageDolphin > averageKoalas && averageDolphin >= 100) {
//   console.log(`Dolphin wins!`);
// } else if (averageDolphin < averageKoalas && averageKoalas >= 100) {
//   console.log(`Koalas WIns!`);
// } else {
//   console.log(`no team`);
// }

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
