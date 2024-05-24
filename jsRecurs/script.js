// function rec1(x,step){
//   if (step == 1) {
//     return x;
//   } else {
//     return x * rec1(x, step - 1);
//   }  
// }
// console.log(rec1(2,3))

// function rec2(m,n){
//     if(n>m){
//         return rec2(n,m)
//     }if(!n){
//        return m
//     }
//      return rec2(n,m%n)
// }
// console.log(rec2(12,9))


// function rec3 (n,m=0){
// if (n % 10 > m) {
//     m = n % 10}
// if (n > 10) {
//    return rec3(parseInt(n / 10),m)
// }
// return m
// }
// console.log(rec3(127534))

// function rec4(n, b=2) {
// if(n==1 || n==2 || n==3){
// return true
// }
// if(b>9){
//     return true
// }
// if(n==b){
//     return rec4(n,b+1)
// }
// if(n%b==0){
//     return false
// }else{
//     return rec4(n,b+1)
// }
// }
// console.log(rec4(7))

// function rec5(n,b=2, arr=[]){
//   if(rec4(n)==true){
//     arr.push(n)
//     return arr
//   }
//   if(n%b==0){
//     n=n/b
//     arr.push(b)
//     return rec5(n, b, arr)
//   }else{
//     return rec5(n, b+1, arr)
//   }
// }
// console.log(rec5(52))


//   function rec6(a) {
//     if (a == 1 || a == 2) {
//       return 1
//     }
//     return rec6(a - 1) + rec6(a - 2)
//   }
//   console.log(rec6(6))