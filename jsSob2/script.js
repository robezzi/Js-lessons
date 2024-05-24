//1 задание
// let str = prompt("Введите строку")

// function findAll(str) {
// let sumNumbers = 0
// let sumLetters = 0
// let sumSigns = 0

// if(str.match(/\d/g)){
//   sumNumbers = str.match(/\d/g).join('').length;
// }
// if(str.match(/[a-z]/gi)){
//   sumLetters = str.match(/[a-z]/gi).join('').length;
// }
// if(str.match(/\W/g) && str.match(/g/)){
//   sumSigns = str.match(/g/).length + str.match(/\W/g).join('').length
// }else 
// if(str.match(/\W/g)){
//   sumSigns = str.match(/\W/g).join('').length
// }else
// if(str.match(/_/g)){
//   sumSigns = str.match(/_/g).length
// }
// console.log(`Букв: ${sumNumbers} , Цифр:${sumLetters}, Знаков:${sumSigns}`);
// }
// findAll(str)
//2 задание
// function textNumber(number) {
//   let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//   let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//   let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//   if (number > 0 && number <= 9) {
//     return first[number - 1];
//   }
//   if (number >= 10 && number <= 20) {
//     return second[number - 10];
//   }
//   if (number > 20 && number <= 99) {
//     let str = `${number}`;
//     str = str.split('');
//     let firstNumber = str[0];
//     let secondNumber = str[1];
//     return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//   }
// }
// console.log(textNumber(24))
//3 задание 
// let str = "ASDdsa123"

// function lowUpCase(str) {
//     let inpWord = Array.from(str)
//     let sorted = []
//     for (i = 0; i < inpWord.length; i++) {
//         if (inpWord[i] === inpWord[i].toUpperCase()) {
//             sorted[i] = inpWord[i].toLowerCase()
//         } else if (inpWord[i] === inpWord[i].toLowerCase()) {
//             sorted[i] = inpWord[i].toUpperCase()
//         }
//     if(/^\d+$/.test(str[i])) {
//       sorted[i]=('_')
//     }
//     }
//     return sorted.join('')
// }
// console.log(str)
// console.log(lowUpCase(str))

//4 задание
// function camelCase(str) {
//     return str.split('-')
//         .map((w, i) => i ? (w = w.split(''), w.shift().toUpperCase() + w.join('')) : w)
//         .join('')
// }

// console.log(camelCase("font-size-arr-sss"))

//5 задание 
// function abbre(str){
//     let arrUpper=str.split(" ")
//     for(i=0;i<arrUpper.length;i++){
//         arrUpper[i]=arrUpper[i].substring(1,-1).toUpperCase()
//     }

//     console.log(arrUpper.join(""))

// }
// console.log(abbre("объектно ориентированное программирование"))

//6 задание
// function moreStr() {
//     let containerStr=[]
//     let goStr = +prompt("Сколько строк?")
//     for(i=0;i<goStr;i++){
//         let strings=prompt("Введи строку)")
//         containerStr.push(strings)
//     }
//     let bigStr=containerStr.join("")
//     console.log(bigStr)
// }
// moreStr()

//7 задание
// function calc(a, b, operator) {
//     switch (true) {
//         case operator === '*':
//             return a * b
//             break
//         case operator === '/':
//             return a / b
//             break
//         case operator === '+':
//             return +a + +b
//             break
//         case operator === '-':
//             return a - b
//             break
//         default:
//             return a
//     }
// }
// let rightToleftCalcilations=(str)=>{
//     const numbers=str.match(/[^\/\+\*\-]+/g)
//     const opearators=str.match(/[\/\+\*\-]/g)
//     let currentValue=numbers[0]
//     const otherValues=numbers.slice(1)
//     otherValues.forEach((num,index,array)=>{
//     currentValue=calc(currentValue,otherValues[index],opearators[index])
//     })
//     return currentValue
// }
// const calculator=(str)=>{
//     let currentString=str
//     const firtsOrder=str.split(/[+-]/).filter((el)=>/[/*]/.test(el))
//     firtsOrder.forEach((expression)=>{
//         currentString=currentString.replace(expression,(str=>rightToleftCalcilations(str)))
//     })
// }

//8 задание
// function urlka(url) {
//     let arr1 = url.split("://")
//     let protocol = arr1[0]
//     let arr2 = arr1[1].split("/")
//     let domain = arr2[0]
//     arr2.shift()
//     let way = arr2.join("/")
//     return "Протокол " + protocol + " Домен " + domain + " Путь " + way
// }
// console.log(urlka('https://google.com/search/eu'))

//9 задание

// function split(){
//     let str = prompt('Введите строку: ')
//     let separ = prompt('Введите разделитель: ')
//     let len = str.length
//     let arr = []
//     let ind = 0

//     for (let i = 0; i < len; i++) {
//         if (str[i] == separ) {
//             let l = str.slice(ind, i)
//             arr.push(l)
//             ind = i + 1
//             console.log(l)
//         }else if(i == (len - 1)){
//             let k = str.slice(ind)
//             arr.push(k)
//         }        
//     }
//     return arr
// }
// console.log(split())

// 10 задание 
//  function printf(template, ...values){
// [...values].forEach((item,index)=> template=template.replace('%'+(index+1),item))
// return template
// }
// console.log(printf("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020))