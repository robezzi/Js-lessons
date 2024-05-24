//задание 1

// function func1(a, b) {
//     if (a < b) {
//         return -1
//     } else if (a > b) {
//         return 1
//     } else if (a == b) {
//         return 0
//     }
// }
// let x = +prompt("первое число ");
// let y = +prompt("второе число");
// alert(func1(x, y))

// задание 2

// function fact(n) {
//     if (n == 1) return 1
//     return n * fact(n - 1)
// }
// let x = 1
// do {
//     x = +prompt("Введите число от 1: ")
// } while (x < 1)
// alert(fact(x))

//задание 3

// function func3(a, b, c) {
//     return a * 100 + b * 10 + c
// }
// let one = 0
// let two = 0
// let three = 0
// do {
//     one = +prompt("Введите первое число: ")
//     two = +prompt("Введите второе число: ")
//     three = +prompt("Введите третье число: ")
// } while (one > 9 || two > 9 || three > 9)
// alert(func3(one, two, three))

//задание 4
// function plowad(a, b) {
//     if (arguments.length == 1) {
//         return a * a
//     }
//     return a * b
// }
// alert(plowad(4, 7))
// alert(plowad(6))

//задание 5 и 6

// function soverNum(n) {
//     let sum = 0
//     for (let i = 1; i < n; i++) {
//         if (n % i == 0) {
//             sum += i
//         }
//     }
//     if (sum == n) {

//         return "Совершенное"
//     }
//     return "Не совершенное"
// }
// let x = (+prompt("Число? : "))
// alert(soverNum(x))

// function func6(n) {
//     let sum = 0
//     for (let i = 1; i < n; i++) {
//         if (n % i == 0) {
//             sum += i
//         }
//     }
//     if (sum == n) {

//         return 1
//     }
//     return 0
// }
// let min = 0;
// let max = 0;
// let result = ""
// let soverNum = 0

// do {
//     min = +prompt("Введите первое число диапазона: ")
//     max = +prompt("Введите конечное число диапазона: ")
// } while (min != +min || max != +max)

// for (let j = min; j <= max; j++) {
//     soverNum = func6(j)
//     if (soverNum == 1) {
//         result += j + " "
//     }
// }
// if (result == "") {
//     alert("Нету")
// } else {
//     alert(result)
// }

//задание 7

// function time(a, b, c) {
//     if (a < 10) {
//         a = "0" + a
//     }
//     if (b < 10) {
//         b = "0" + b
//     }
//     if (c < 10) {
//         c = "0" + c
//     }
//     return `${a}:${b}:${c}`
// }

// let x = 0
// let y = 0
// let z = 0

// do {
//     x = +prompt("Введите часы от 0 до 23: ")
//     y = +prompt("Введите минуты от 0 до 59: ")
//     z = +prompt("Введите секунды от 0 до 59: ")
// } while (x > 23 || y > 59 || z > 59)

// alert("Текущее время: " + time(x, y, z))

//задание 8

// function seconds(a, b = 0, c = 0) {
//     let seconds = a * 3600 + b * 60 + c
//     return seconds
// }
// let x = 0;
// let y = 0;
// let z = 0;

// do {
//     x = +prompt("Введите часы от 0 до 23: ")
//     y = +prompt("Введите минуты от 0 до 59: ")
//     z = +prompt("Введите секунды от 0 до 59: ")
// } while (x > 23 || y > 59 || z > 59);

// alert(seconds(x, y, z) + " секунд.")
