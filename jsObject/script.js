/////1 задача

// let carInfo = {
//     marka: "bmw",
//     model: "m5",
//     yearMade: "1992",
//     sredSpeed: "150"
// }
// function func1(obj) {
//     document.write("Марка: " + obj.marka + " Модель: " + obj.model + " Год выпуска: " + obj.yearMade + " Средняя скорость: " + obj.sredSpeed + " км.ч")

// }
// func1(carInfo)

// function func2(obj) {
//     let drive = +prompt("Введите расстояние:")
//     let timeTravel = (drive / obj.sredSpeed)
//     let timeTosleep = timeTravel / 4
//     let obweeTime = Math.round(timeTravel + timeTosleep)
//     alert("Время в пути: " + obweeTime)

// }
// func2(carInfo)

/////2 задача
let drob1 = {
    chisl1: 3,
    znam1: 7
}
let drob2 = {
    chisl2: 4,
    znam2: 5
}
///сложение
// function cloj(obj1,obj2) {
//     let obZnam = obj1.znam1 * obj2.znam2
//     let obChisl = (obj1.chisl1 * obj2.znam2) + (obj2.chisl2 * obj1.znam1)
//     alert(obChisl + "/" + obZnam)
// }
// cloj(drob1,drob2)

///вычитание
// function vichet(obj1,obj2) {
//     let obZnam = obj1.znam1 * obj2.znam2
//     let obChisl = (obj1.chisl1 * obj2.znam2) - (obj2.chisl2 * obj1.znam1)
//     alert(obChisl + "/" + obZnam)
// }
// vichet(drob1,drob2)

///умножение
// function umnoj(obj1,obj2) {
//     let obZnam = obj1.znam1 * obj2.znam2
//     let obChisl = obj1.chisl1 * obj2.chisl2
//     alert(obChisl + "/" + obZnam)
// }
// umnoj(drob1,drob2)

///деление 
// function delit(obj1,obj2) {
//     let obZnam = obj1.znam1 * obj2.chisl2
//     let obChisl = obj1.chisl1 * obj2.znam2
//     alert(obChisl + "/" + obZnam)
// }
// delit(drob1,drob2)

///сокращение дроби!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function sokr(obj1) {
//     for (let i = 2; i <= obj1.chisl1; i++) {
//         if (obj1.chisl1 % i === 0 && obj1.znam1 % i === 0) {
//             let chill = obj1.chisl1 / i
//             let znamm = obj1.znam1 / i
//               alert(chill + "/" + znamm)
//         }
//     }

// }
// sokr(drob1)


//////////////////3 задание

let time={
    hours:"20",
    minute:"5",
    second:"9"
}

// function dispTime(obj){
//     let second = ""
//     if (obj.second>10){
//         second = obj.second
//     }
//     else{
//         second = "0" + obj.second
//     }
//     let minute = ""
//     if (obj.minute>10){
//         minute = obj.min
//     }
//     else{
//         minute = "0" + obj.minute
//     }
//     let hours = ""
//     if (obj.hours>10){
//         hours = obj.hours
//     }
//     else{
//         hours = "0" + obj.hours
//     }
//     document.write(hours+":"+minute+":"+second)
// }
// dispTime(time)

let much=+prompt("сколько секунд")
function addSec(secMuch,obj){
    let hourZ=Math.floor(secMuch/3600)
    let minZ = Math.floor((secMuch%3600)/60)
    secMuch=secMuch%60
    if((obj.second+secMuch)>=60){
        minZ=minZ+1
        obj.second=obj.second+secMuch-60
    }else{
        obj.second=obj.second+secMuch
    }
     if((obj.minute+minZ)>=60){
        hourZ=hourZ+1
        obj.minute=obj.minute+minZ-60
    }else{
        obj.minute=obj.minute+minZ
    }
    if((obj.hours+hourZ)>=24){
        obj.hours=(obj.hours+hourZ)%24
    }else{
        obj.hour=obj.hour+hourZ
    }
}
console.log(addSec(much,time))