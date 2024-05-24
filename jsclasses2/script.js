class Mark {
  constructor(color, inkQuantity) {
    this.color = color
    if(inkQuantity > 100){
    this.inkQuantity = 100
    }else{
      this.inkQuantity = inkQuantity
    }
  }

  genText(s) {
    let p = document.createElement('p')
    p.style.color = this.color
    let str = s
    let ch = 0
    let ost = this.inkQuantity
    for (let i = 0; i < str.length; i++) {
      const e = str[i];
      if (ost > ch) {
        p.innerHTML += e
        if (e == ' ') {
          ost -= 0
        } else {
          ost -= 0.5
        }
      }else{
        console.log('Чернила закончились')
      document.body.prepend(p)
        this.inkQuantity = ost
        return
      }
    }
    document.body.prepend(p)
    this.inkQuantity = ost
  }

  prow(){
    console.log(this.inkQuantity)
  }
}
let markRed = new Mark('red', 10)
// markRed.genText('Lorem ipsum dolor siteytriweuewyruiwergiuwegfuygfuewygf.')
// markRed.prow()


class RefillableMark extends Mark{
  constructor(color, inkQuantity){
    super(color, inkQuantity)
  }
  refillMark(inkQ){
    let ost = this.inkQuantity
    let shortage = 100 - ost
    let ink = inkQ

    if(ink > shortage){
      this.inkQuantity = 100
    }else{
      this.inkQuantity = ink + ost
    }
  }
}

let markGreen = new RefillableMark('green', 30)
// markGreen.genText('Lorem ipsum dolor siteytriweuewyruiwergiuw.')
// markGreen.prow()

// markGreen.refillMark(99)
// markGreen.prow()

// markGreen.genText('Lorem ipsum dolor Lorem ipsum dolor siteytriweuewyr uiwergiuw Lorem ipsum dolor siteytriweuewyr uiwergiuw Lorem ipsum dolor siteytriweuewyr uiwergiuw Lorem ipsum dolor siteytriweuewyr uiwergiuw. siteytriweuewyr uiwergiuw Lorem ipsum dolor siteytriweuewyr uiwergiuw Lorem ipsum dolor siteytriweuewyr uiwergiuw.')
// markGreen.prow()

// markGreen.refillMark(15)
// markGreen.prow()



// 2

// class Dates{
//   constructor(year, month, date,){
//     this.date = new Date(year, month-1, date)
//   }
//   chekDate(){
//     console.log(this.date)
//   }
// }

// let date1 = new Dates(2000,10,5)
// // date1.chekDate()


// console.log(new Date())


// class ExtendedDate extends Dates{
//   constructor(year, month, date){
//     super(year, month, date)
//   }

//   genText(){
//     let p = document.createElement('p')
//     p.innerText = this.date
//     document.body.appendChild(p)
//   }

// }


// let date2 = new ExtendedDate(2000,10,5)
// date2.genText()


class Dates {
  constructor(year, month, date, ) {
      this.date = new Date(year, month-1, date)
  }
  chekDate() {
      console.log(this.date)
  }
}
let date1 = new Dates(2000, 10, 5)
date1.chekDate()



class ExtendedDate extends Dates {
  constructor(year, month, date) {
      super(year, month, date)
  }

  genText() {
      let p = document.createElement('p')
      let arrdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
      let day = arrdays[this.date.getDay()];
      let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
      let monthName = months[this.date.getMonth()];
      p.innerText = day + " " + monthName
      document.body.appendChild(p)
  }
  proofDate() {
      let dateNow = new Date()
      if (dateNow.getDay() <= this.date.getDay()) {
          console.log(true)
      } else {
          console.log(false)
      }
  }
  proofYear(){
      if(this.date.getFullYear()%4==0 && this.date.getFullYear()%100!=0 || this.date.getFullYear()%4==0 && this.date.getFullYear()%100==0 && this.date.getFullYear()%400==0){
          console.log("Високосный")
      }else{
          console.log("Не високосный")
      }
  }
  nextDay(){
    let nextDateMs=(this.date.getTime()+86400000)
    let nextDateNormal=new Date(nextDateMs)
    return console.log(nextDateNormal)
  }

}


let date2 = new ExtendedDate(1992, 5, 20)
let date3 = new ExtendedDate(1700, 5, 19)
let date4 = new ExtendedDate(2014, 5, 19)

// date2.genText()
console.log('-----------------------')
date2.proofDate()
console.log('-----------------------')
date2.proofYear()
date3.proofYear()
console.log('-----------------------')
date3.chekDate()
date3.nextDay()




// 4


class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}
const arrEmp = [
  new Employee("John Doe", "Manager", "Sales", 5000),
  new Employee("Bill Freeman", "Manager", "Sales", 5000),
  new Employee("Uno Dirck", "Manager", "Sales", 5000),
  new Employee("Erick Rapid", "Manager", "Sales", 5000),
  new Employee("Chris Rea", "Manager", "Sales", 5000),
  new Employee("Tommy Lee", "Manager", "Sales", 5000),
  new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
  new Employee("Rick Depper",".Net Senior Developer","Desktop Solutions",4000),
  new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
  new Employee("Trinity Matrix",".Net Senior Developer","Desktop Solutions",4000),
  new Employee("Rick Grouy",".Net Junior Developer","Desktop Solutions",1000),
  new Employee("George McCalister",".Net Junior Developer","Desktop Solutions",1000),
  new Employee("Fred Durst",".Net Junior Developer","Desktop Solutions",1000),
  new Employee("Piter Parker",".Net Middle Developer","Desktop Solutions",4000),
  new Employee("Bro Somebody",".Net Senior Developer","Desktop Solutions",4000),
  new Employee("Merlin Mysterier",".Net Middle Developer","Desktop Solutions",4000),
  new Employee("Harry Potter",".Net Senior Developer","Desktop Solutions",4000),
  new Employee("Norton Commander",".Net Middle Developer","Desktop Solutions",4000),
  new Employee("Elon Musk", ".Net Senior Developer", "Desktop Solutions", 4000)
];


class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }
  getHtml() {
    let tableDiv = document.createElement("div");
    tableDiv.setAttribute("id", "content__tableDiv");
    tableDiv.className = "content__tableDiv";
    let tableTag = document.createElement("table");
    tableTag.setAttribute("id", "content__table");
    tableTag.className = "content__table";
    document.body.append(tableDiv);
    tableDiv.append(tableTag);

    let table = document.getElementById("content__table");
    let array = this.arr;
    let head = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.textContent = "Name";
    let th2 = document.createElement("th");
    th2.textContent = "Position";
    let th3 = document.createElement("th");
    th3.textContent = "Department";
    let th4 = document.createElement("th");
    th4.textContent = "Salary";
    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);
    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
      }
    }
  }
}
let tableObj = new EmpTable(arrEmp);
tableObj.getHtml();



class StyledEmpTable extends EmpTable{
  constructor(arr, styleTr, styleTd, styleTable){
    super(arr)

    this.styleTr = {};
    for (let key in styleTr) {
      if (this.checkKey(key)) {
        this.styleTr[key] = styleTr[key];
      }
    }

    this.styleTd = {};
    for (let key in styleTd) {
      if (this.checkKey(key)) {
        this.styleTd[key] = styleTd[key];
      }
    }
    this.styleTable = {};
    for (let key in styleTable) {
      if (this.checkKey(key)) {
        this.styleTable[key] = styleTable[key];
      }
    }
  }
  checkKey(key) { 
    const style = document.body.style;
    return key in style;
  }

  getCss() {
    let sTd = `td${JSON.stringify(this.styleTr).replace(/\,/g, "; \n").replace(/"/g, "")}`;
    let sTr = `tr${JSON.stringify(this.styleTd).replace(/\,/g, "; \n").replace(/"/g, "")}`;
    let sTab = `table${JSON.stringify(this.styleTable).replace(/\,/g, "; \n").replace(/"/g, "")}`;

    let style = document.createElement('style')
    let textContent = `${sTd} ${sTr} ${sTab}`
    style.textContent = textContent
    document.body.appendChild(style)
    console.log(style)
  }
}

let tableObj1 = new StyledEmpTable(arrEmp,{padding: '15px 10px', fontSize: '18px', border: '1px solid #CBC3E3'},{padding: '5px 10px', fontSize: '18px', textAlign: 'center'},{border: '1px solid purple', width: '60%', margin: 'auto', background: 'lightgrey'});

// tableObj1.getCss()
