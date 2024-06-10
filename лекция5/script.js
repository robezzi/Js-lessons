// block.onclick=function(){
//     alert("Вы кликнули")
// }
// body.addEventListener("click",function(e){
//     block.style.left=e.pageX+"px"
//     block.style.top=e.pageY+"px"
//     block.style.backgrondColor="rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())0 )"
// })

// genButton.onclick=function(){
//     ranNum.innerHTML=Math.round(Math.random()*100)
//  }
// coords.addEventListener("mousemove",function(e){
//     coords.innerHTML="X="+e.offsetX+"Y="+e.offsetY

// })
// coords.addEventListener("contextmenu",function(e){
//     coords.innerHTML+="клик правой"
//     e.preventDefault()
// })
// coords.addEventListener("click",function(){
//     coords.innerHTML+="клик левой"
// })
// let textVis= true
// hidik.addEventListener("click",function(){
//     if(textVis==true){
//         text.style.display="none"
//         textVis=false
//     }else{
//         text.style.display="block"
//         textVis=true
//     }
// })
// function powersOfTwo(n){
//     let arrik=[]
//   for(i=0;i<=n;i++){
//     let stepNum=2
//     step=2**i
//     arrik.push(step)

//   }
//   return arrik
// }
// console.log(powersOfTwo(2))
// function oddCount(n){
//  let arrik=[]
//  for(i=0;i<n;i++){
//  if((i % 2 !== 0)){
//     arrik.push(i)
//  }
// }
//   return arrik.length
// }
// console.log(oddCount(15))

// function logs(x, a, b) {
//     let sum = a * b
//     let logSum = Math.log(sum) / Math.log(x)
//     console.log(logSum)

// }
// console.log(logs(10, 2, 3))
// const rps = (p1, p2) => {
// if (p1 === p2) {

// return "Draw!"

// } else if((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock")){

// return "Player 1 won!"

// } else {

// return "Player 2 won!"

// }

// }
// console.log(rps('rock', 'scissors'))
// function sum (numbers) {
//     let sum=0
//     if(numbers.length!=0){
// numbers.forEach((num) => {
//   sum +=num
// })
// return sum
// }else{
//     return 0
// }
// }
// console.log(sum([]))
// function smash (words) {
// return words.join(" ")
// }
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]))
// function well(x){
//   let countGood=0
// x.forEach(el => {
// if(el=="good"){
//     countGood++
// }
// })
// if(countGood==0){
//     return "Fail!"
// }else if(countGood>0 && countGood<=2){
//     return "Publish!"
// }else{
//     return "I smell a series!"
// }
// }

// console.log(well(['bad', 'bad', 'bad']))

// function findShort(s){
//     let newArr=s.split(" ")
//     let newArr1=[]
//     newArr.forEach(el => {
//         newArr1.push(el.length)
//     })
//     console.log(newArr1)
//      let min = newArr1[0]
//     for (let i = 0; i < newArr1.length; i++){
//     if (newArr1[i] < min){
//         min = newArr1[i]
//     } 
// }
// console.log(min)
// }
// findShort("bitcoin take over the world maybe who knows perhaps")
// function oddCount(n){
// let num=Math.floor(n/2)
// return num
// }
// console.log(oddCount(15))

// function leastLarger(a, x) {
//     let nume = []
//     let min
//     for (i = 0; i < a.length; i++) {
//         if (a[x] < a[i]) {
//             nume.push(a[i])
//         }
//     }
//     for (j = 0; j < nume.length; j++) {
//         min = nume[0]
//         if (min > nume[j]) {
//             min = nume[j]
//             return a.indexOf(min)
//         } else {
//             return a.indexOf(nume[j])
//         }
//     }
//     return -1
// }
// console.log(leastLarger([4, 1, 3, 5, 6], 0))
// console.log(leastLarger([4, 1, 3, 5, 6], 4))
// console.log(leastLarger([1, 3, 5, 2, 4], 0))


function likes(names) {
  for(i=0;i<names.length;i++){
    if(names.length==0){
        return "no one likes this"
    }if(names.length==1){
        return names[i].join("")+" likes this"
    }if(names.length==2)
  }
}
likes([])
likes(['Peter'])
likes(['Jacob', 'Alex'])
likes(['Max', 'John', 'Mark'])
likes(['Alex', 'Jacob', 'Mark', 'Max'])