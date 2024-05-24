// // // 1

// let questAnswer = document.querySelectorAll(".questAnswer")

// for (let i = 0; i < questAnswer.length; i++) {
//   const element = questAnswer[i];
//   console.log(element)
//   element.firstElementChild.addEventListener("click", e => {
//     // e.target.nextElementSibling.classList.toggle('hiddeen')
//     if(e.target.nextElementSibling.style.display != "block"){
//       questAnswer.forEach(element => {
//         element.lastElementChild.style.display = "none"
//       });
//       e.target.nextElementSibling.style.display = "block"
//     }else{
//       e.target.nextElementSibling.style.display = "none"
//     }
//   });
// }




// //2

// function createCalendar(elem, year, month) {

//   let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12

//   let d = new Date(year, mon);

//   let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';


//   // пробелы для первого ряда
//   // с понедельника до первого дня месяца
//   // * * * 1  2  3  4
//   for (let i = 0; i < getDay(d); i++) {
//     table += '<td></td>';
//   }


//   // <td> ячейки календаря с датами
//   while (d.getMonth() == mon) {
//     table += '<td>' + d.getDate() + '</td>';
    
//     if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
//       table += '</tr><tr>';
//     }

//     d.setDate(d.getDate() + 1);
//   }

//   // добить таблицу пустыми ячейками, если нужно
//   // 29 30 31 * * * *
//   if (getDay(d) != 0) {
//     for (let i = getDay(d); i < 7; i++) {
//       table += '<td></td>';
//     }
//   }

//   // закрыть таблицу
//   table += '</tr></table>';

//   elem.innerHTML = table;
// }

// function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
//   let day = date.getDay();
//   if (day == 0) day = 7; // сделать воскресенье (0) последним днем
//   return day - 1;
// }

// createCalendar(calendar, 2015, 8);






// 3
// let liList = document.querySelector('#liList')
// let liListA = liList.getElementsByTagName("a")

// let RegExp = /^(http|https)?\:\/\//

// for (let i = 0; i < liListA.length; i++) {
//   const element = liListA[i];
//   // console.log(RegExp.test(element.innerText))
//   console.log(element.href)

//   if(RegExp.test(element.innerText)){
//     liListA[i].style.borderBottom = '1px dashed'
//   }
// }





