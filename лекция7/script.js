//валидация 
// function formSubmit(){
// let form1=document.forms[0]
// let login=form1.elements[0].value
// if(login.length<=6){
//     return false
// }else{
//     return true
// }

// }
// document.forms[0].addEventListener("submit",checkForm)
// function checkForm(event){
//     event.preventDefault()
//     let login=document.form1[0].elements[0].value
// //проверка формы if или еще чето)
//     document.forms[0].submit
// }
//регулярные выражения
// let regExp=/\d*/
// let str="https://www.google.com"
// let number="+770262629226"
// console.log(strTemplate.test(number))

// let strTemplate=/^\+\d{12}$/
// let nameTemplate=/^[a-z]{1}[A-Z]{3,}$/

// document.forms[0].addEventListener("submit",checkForm)
//  function checkForm(event){
//     event.preventDefault()
//      let login=document.forms[0].elements[0].value
//      if(!nameTemplate.test(login)){
//         alert("логин не подходит")
//      }else{
//         document.forms[0].submit
//      }
//     }

// console.log(document.cookie)
// let date=new Date(Date.now()+12*60*60*1000)
// date= date.toUTCString()

// document.cookie="name=Misha;expires="+date
// let name="Dima"
// document.cookie="name="+encodeURIComponent(uName)+";max-age=3600"

// document.forms[0].addEventListener("submit",checkForm)
// function checkForm(event){
//    event.preventDefault()
//    let login=document.forms[0].elements[0].value
//    let pass=document.forms[0].elements[1].value
//    document.cookie="name"+encodeURIComponent(login)+";max-age=3600"
//    document.cookie="pass"+encodeURIComponent(pass)+";max-age=3600"
//    window.location.href="homepage.html"
//    }
function findShort(s){
let newS=s.split(" ")
console.log(newS)
for(i=0;i<newS.lenght;i++){
}
}
findShort("bitcoin take over the world maybe who knows perhaps")