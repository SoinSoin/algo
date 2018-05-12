var myArray = [ 27, 21, 59, 50, 50, 64, 51, 39, 4, 31, 32, 52, 38, 19, 33, 28, 45, 39, 39, 58, 52, 11, 19, 40, 14, 45, 62, 60, 41, 9];

// var j = 30;

// while (j > 0) {
//   var alea = Math.round(Math.random() * 1000);
//   myArray.push(alea);
//   j--;
// }
// console.log(myArray);


var taille = myArray.length;
while(taille!=0){
    for(i=0;  i<taille ; i++ ){
        if(myArray[i]>myArray[i+1]){
            var memories = myArray[i];  
            myArray[i]=myArray[i+1];
            myArray[i+1]=memories;
        }
    }
    taille--; 
}
console.log(myArray);