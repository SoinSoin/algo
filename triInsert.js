var myArray1 = [
  4,
  9,
  11,
  14,
  19,
  19,
  21,
  27,
  28,
  31,
  32,
  33,
  38,
  39,
  39,
  39,
  40,
  41,
  45,
  45,
  50,
  50,
  51,
  52,
  52,
  58,
  59,
  60,
  62,
  64
];

var myArray2 = [
  595,
  687,
  266,
  687,
  118,
  792,
  98,
  19,
  246,
  666,
  586,
  434,
  923,
  581,
  336,
  92,
  504,
  352,
  485,
  969,
  42,
  380,
  251,
  938,
  369,
  957,
  11,
  776,
  953,
  196,
  120,
  233,
  153,
  288,
  168,
  715,
  287,
  868,
  209,
  669,
  505
];

// var j = 50;

// while (j > 0) {
//   var alea = Math.round(Math.random() * 1000);
//   myArray2.push(alea);
//   j--;
// }
// console.log(myArray2);

var size1 = myArray1.length;
console.log(size1);
var size2 = myArray2.length;
console.log(size2);

for (var i = 0; i < size1; i++) {
  for (var j = 0; j < size2; j++) {
    while (myArray2[j] > myArray1[i]) {
        if (myArray1[i] >= myArray2[j]) {
            myArray1.push(myArray2[j]) - i;
        } else {
            myArray1.push(myArray2[j]);
        }
        i++;
    }
  }
}
console.log(myArray1);
