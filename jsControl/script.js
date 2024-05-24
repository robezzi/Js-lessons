//1
// function split(n) {
//   let slogNum = []
//   for (let i = 0; i < n; ++i){
//     slogNum.push(1)
//   }



// let arr1 = []
// let arr2 = []

//   while (slogNum[0] != n) {
//       res = slogNum.reduce((acc, rec) => acc * rec)
//       let arrSlogNum = []
//       slogNum.forEach(element => {
//         arrSlogNum.push(element)
//       });
//       arr1.push(arrSlogNum)
//       arr2.push(res)

//       let min = slogNum[0]
//       let minindex = 0
//       let sum = slogNum[0]
//       let tempsum = slogNum[0]
//       for (let j = 1; j < slogNum.length - 1; ++j) {
//         tempsum += slogNum[j]
//         if (min > slogNum[j]) {
//           min = slogNum[j]
//           minindex = j
//           sum = tempsum
//         }
//       }
//       slogNum[minindex] += 1
//       sum += 1
//       slogNum.splice(minindex + 1)
//       for (let k = 0; k < n - sum; ++k) slogNum.push(1)
//     }
// let maxNam = Math.max.apply(null, arr2)
// let indexMaxNam = arr2.indexOf(maxNam)
// let arrMaxNam = arr1[indexMaxNam]
// let otVEEEED = []
// otVEEEED.push(arrMaxNam)
// otVEEEED.push(maxNam)
// return otVEEEED
// }
// console.log(split(8))

//2
// function arrik(arr){
//     let newArr=[]
//     for(i=0;i<arr.length;i++){
//         let n=0
//         for(j=i;j<arr.length;j++){
//             if(arr[i]>arr[j+1]){
//                 n+=1
//             }
//         }
//         newArr.push(n)
//     }
//     return newArr
// }
// console.log(arrik([5,4,3,2,1]))



//4
let str="abc"
function perm(str) {
    let strArr=str.split("")
    if (strArr.length > 1) {
        let beg = strArr[0];
        let arr1 = perm(strArr.slice(1));
        let arr2 = [];
        let l =  arr1[0].length;
        for(let i=0; i < arr1.length; i++) 
            for(let j=0; j <= l; j++) 
        arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
    console.log(strArr)
    return arr2
    } else return strArr;
}
console.log(perm("abc"))
