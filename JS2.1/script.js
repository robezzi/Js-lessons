//   1  задание

// let numMin = +prompt("Первое число")
// let numMax = +prompt("Второе число")
// let sumNum = 0
// while (numMin <= numMax) {
//     sumNum += numMin
//     numMin++
// }
// document.write("Сумма равна: "+sumNum)

// 2 задание
// let num1 = prompt("Введите первое число:");
// let num2 = prompt("Введите второе число:");
// let delitel
// for (i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//     }
//     delitel = i
// }
// document.write("НОД:"+delitel)

// 3 задание
// let num = +prompt("Введите число")
// let i = 1
// while (i <= num) {
//     if (num % i === 0) {
//         document.write(" " + i)
//     }
//     i++
// }

// 4 задание
// let num = +prompt("Введите число")
// let numMuch = 0
// for (i = 1; num / i >= 1; i *= 10) {
//     numMuch++
// }
// document.write(numMuch)

// 5 задание

// let n = 0
// let plusNum = 0
// let minusNum = 0
// let zeroNum = 0
// let chetNum = 0
// let neChet = 0
// for (let i = 0; i < 10; i++) {
//     n = +prompt("Число?")
//     if (n > 0) {
//         plusNum += 1
//     } else if (n < 0) {
//         minusNum += 1
//     } else {
//         zeroNum += 1
//     }
//     !(n % 2) ? (chetNum += 1) : (neChet += 1)
// }
// alert("Положительных:" + plusNum + " Отрицательных:" + minusNum + " Нулевых:" + zeroNum + " Четных: " + chetNum + " Нечетных:" + neChet)

// 6 задание
// let numberOne = 0
// let numberTwo = 0
// let result = true
// let znak = ""
// do {
//     numberOne = +prompt("Число 1")
//     numberTwo = +prompt("Число 2")
//     znak = prompt("Что сделать (+ , - , * , /)")
//     switch (znak) {
//         case "+":
//             alert(`${numberOne} ${znak} ${numberTwo} = ${numberOne + numberTwo}`)   //Честно признаюсь алерты подсмотрел не понял почему не выводит((
//             break;
//         case "-":
//             alert(`${numberOne} ${znak} ${numberTwo} = ${numberOne - numberTwo}`)
//             break;
//         case "*":
//             alert(`${numberOne} ${znak} ${numberTwo} = ${numberOne * numberTwo}`)
//             break;
//         case "/":
//             alert(`${numberOne} ${znak} ${numberTwo} = ${numberOne / numberTwo}`)
//             break;
//         default:
//             alert("Не тот знак емае)")
//             break;
//     }
//     result = confirm("Еще?")
// } while (result == true)

//7 задание                                  я не понял как делать

//8 задани
// let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
// let i = 0
// let stop = true
// while (stop == true) {
//     stop = confirm(`${days[i]}. Следующий?`)//так же подсмотрел вывод. пенек я(
//     i++
//     if (i > 6) {
//         i = 0
//     }
// }
// alert("Конец")

// 9 задание
// let tab = ""
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         tab += `${i} x ${j} = ` + i * j + ", "
//     }
// }
// document.write(tab)

//10 задание
//пень
