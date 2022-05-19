const YAND = [
'+----------------0---------------+\n' +
'|                                |\n' +
'|                                |\n' +
'|          Y        D            |\n' +
'|     A                          |\n' +
'|              E                 |\n' +
'|           N                    |\n' +
'|  Y                             1\n' +
'3        Y    D                  |\n' +
'|         A              X       |\n' +
'|                                |\n' +
'+----------------2---------------+']
const NUMBER = ['0','1','2','3']          // отверсия
const STRING = [`Y`,`A`,`N`,`D`,`E`,`X`] // макароны

let hole = [];  let holeY = []                          //координаты отверстий X Y
let past = []; let pastY = []                       //координаты макарон X Y
let aX = []; let aY = []                       //a X Y

let n = 0;
let a = 0;


const yaStroka = YAND.join().split('\n'); //разделение массива YAND на масссив yaStroka
let   yaSimvol = []

for (let y = 0; y!==12; y++)  //высота массива y=11
{
   yaSimvol = yaStroka[y].split(''); //разделение массива yaStroka на масссив yaSimvol

   for (let x = 0; x!==35; x++) //длинна массива x=34
   {
      if (STRING.includes(yaSimvol[x]))
      {console.log(`past`,yaSimvol[x],x,y);a=yaSimvol[x]; past.push({a,x,y})}     //буква (макароны)

      if (NUMBER.includes(yaSimvol[x]))
      {console.log(`hole`,yaSimvol[x],x,y);a=yaSimvol[x]; hole.push({a,x,y})}     //числа (отверстия)
   }
}

// console.log(`1. past`,past);
// console.log(`2. hole`,hole);
// let min = 10000;
// let max = -1;

// // for (let j = 0; j < 10; j++)
// // {
// //    console.log(`Буква`,past[j].a);
// //    for (let i = 0; i < 4; i++)
// //    {
// //       // n = (Math.abs(past[j].x-hole[i].x)+Math.abs(past[j].y-hole[i].y));

// //       // console.log(hole[i].a,`= ABS (`,past[j].x,`-`,hole[i].x,`) + ABS(`,past[j].y,`-`,hole[i].y,`) =`,n);
// //       /*if (max < n) {max = n}
// //       console.log(`4. if min`,max,`<`,n);*/
// //    };/*
//    if (min > max) {min = max}
//    console.log(`5. if max`,max,`>`,max);
//    console.log(`max=`,max,`min=`,min);*/
// };

// console.log(`6. max`,max);