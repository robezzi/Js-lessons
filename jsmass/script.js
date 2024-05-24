//задание 1

// let spisok=[]
// spisok[0]={
//     name:"banana",
//     kolvo:2,
//     bought:true
// }
// spisok[1]={
//     name:"apple",
//     kolvo:1,
//     bought:false
// }
// spisok[2]={
//     name:"moloko",
//     kolvo:3,
//     bought:true
// }
// spisok[3]={
//     name:"kolbasa",
//     kolvo:4,
//     bought:false
// }

// spisok.sort(function(a,b){
//     if(a.bought===true || b.bought===false){// спросить про а и б
//         return 1
//     }
//     if(a.bought===false || b.bought===true){
//         return -1
//     }
//     return 0
// })
// console.log(spisok)

// function add(name, kolvo) {
 
//     let index = spisok.findIndex(function(item) {
//         return item.name === name
//     });
//     if (index == 1) {
//         spisok[index].kolvo += kolvo
//     } else {
//         spisok.push({ name: name, kolvo: kolvo, purchased: false })
//     }
// }

// add('kolbasa', 5)

// function buy(name) {
//     let index = spisok.findIndex(function(item) {
//         return item.name === name
//     });
    
//     if (index == 1) {
//         spisok[index].bought = true
//     } else {
//         console.log("Не найден товар")
//     }
// }
// buy('kolbasa')

//задание 2

// let spisok=[]
//  spisok[0]={
//      name:"banana",
//      kolvo:2,
//      price:1234
//  }
//  spisok[1]={
//      name:"apple",
//      kolvo:1,
//      price:234
//  }
//  spisok[2]={
//      name:"moloko",
//      kolvo:3,
//      price:546 }
//  spisok[3]={
//      name:"kolbasa",
//      kolvo:4,
//      price:621
//  }
// function printCheck(arr) {
//     console.log("Чек в магазине:");
//     arr.forEach(function(item) {
//         console.log(item.name + " - " + item.kolvo + " шт. по " + item.price + " руб.");
//     });
// }
// printCheck(spisok)

// function calculateTotal() {
//     let total = 0;
//     spisok.forEach(function(item) {
//         total += item.kolvo * item.price
//     });
//     return total;
// }
// console.log("Общая сумма покупки: "+calculateTotal()+" руб.")

// function highPrice() {
//     let mostHigh = spisok.reduce(function(a, b) {
//         return (a.price > b.price) ? a : b
//     });
//     return mostHigh
// }
// console.log("Самая дорогая покупка: "+ highPrice().name)

// function sredBuy() {
//     let sumKolvo = spisok.reduce(function(sum, item) {
//         return sum + item.kolvo
//     }, 0);
//     let sumPrice = spisok.reduce(function(sum, item) {
//         return sum + (item.kolvo * item.price)
//     }, 0);
//     return sumPrice / sumKolvo
// }
// console.log("Средняя стоимость одного товара в чеке: "+sredBuy()+" руб.")

/// 3 задание
// let styles = [
//     { name: "color", value: "lightcoral" },
//     { name: "font-size", value: "25px" },
//     { name: "text-align", value: "center" },
//     { name: "text-decoration", value: "line-through" }
// ]
// function cssGo(text, styles) {
//     let csska = styles.map(function(style) {
//         return style.name + ": " + style.value + ";"
//     }).join(" ")

//     document.write("<p style='" + csska + "'>" + text + "</p>")
// }
// cssGo("Почти понял,но кое-что подсматривал", styles)

/// 4 задание

let aud1={ name: "ib1", seats: 15, facultet: "Информационные технологии" }
let aud2={ name: "ib2", seats: 20, facultet: "Инженерные науки" }
let aud3={ name: "ib3", seats: 12, facultet: "Медицина" }
let aud4={ name: "ib4", seats: 18, facultet: "Информационные технологии" }
let aud5={ name: "ib5", seats: 10, facultet: "Инженерные науки" }

let cabs=[aud1,aud2,aud3,aud4,aud5]
function vseCabs(arr) {
for(i=0;i<arr.length;i++){
    document.write("<p>")
    for(key in arr[i]){
        document.write(key+":"+arr[i][key]+"<br>")
    }
    document.write("</p>")
}
}
// vseCabs(cabs)
function showForFac(arr,str){
    document.write("Аудитория для"+str+" :<br>")
    for (let i=0;i<arr.length;i++){
        if(arr[i].facultet==str){
            document.write(arr[i]+"<br>")
        }
    }
}
// showForFac(cabs,"Инженерные науки")
let group1={
    name:"ibRan1",
    kolvo:10,
    facultet:"Инженерные науки" 
}
let group2={
    name:"ibRan2",
    kolvo:5,
    facultet:"Медицина" 
}
function showOneToOne(arr,obj){
    for (let i=0;i<arr.length;i++){
        if((arr[i].seats>=obj.kolvo)&&(arr[i].facultet==obj.facultet)){
            document.write(arr[i].name+"<br>")
        }
}
}
// showOneToOne(cabs,group1)

