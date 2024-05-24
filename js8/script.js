// let textArray=[
//     "Шапки",
//     "Обувь",
//     "Куртки",
//     "Футболки",
//     "Толстовки"
// ]
// if(document.getElementById("myList").hasChildNodes()){
// let lis = document.getElementById("myList").children//обращаемся по id к элементу в  html .childNodes - обращение к внутр объектам
// for(let i=0;i<textArray.length;i++){
// console.log(lis[i])
// lis[i].innerText=textArray[i]
// }
// }
// document.getElementById("but").addEventListener('click',add)
// function add(){
//     let newLi=document.createElement("li")
//     newLi.innerText="test"
//     let lastChild=document.getElementById("but")
//     document.getElementById("myList").insertBefore(newLi,lastChild)

// }

// document.getElementById("buttonchik").addEventListener('click',add)
// let count=0
// function add(){
//     count++
//     let newSpan=document.createElement("span")
//     newSpan.id="span"+count
//     newSpan.style.backgroundColor="rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+")"
//     newSpan.style.padding="20px"
//     newSpan.style.margin="20px"
//     newSpan.style.display="inline-block"
//     document.getElementById("boxWrap").appendChild(newSpan)
//     newSpan.addEventListener("click",function(){
//         document.getElementById("boxWrap").removeChild(newSpan)
//     })
    
// }
document.getElementById("formGo").addEventListener("submit",add)
function add(e){
    e.preventDefault()
let name=document.getElementById("name").value
let areaBox=document.getElementById("areaBox").value
let newWrap=document.createElement("div")
let newAh=document.createElement("h1")
let newDate=document.createElement("p")
let newCom=document.createElement("p")
let dateTime=new Date()
newAh.innerText=name
newDate.innerText=dateTime
newCom.innerText=areaBox
document.getElementById("newWrap").appendChild(newAh)
document.getElementById("newWrap").appendChild(newDate)
document.getElementById("newWrap").appendChild(newCom)
document.getElementById("topSide").appendChild(newWrap)
}


    
