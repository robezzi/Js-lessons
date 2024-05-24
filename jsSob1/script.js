  //задание 1 (попробовал так)
  //   function inputCheck(e) {
  //             const input = event.target
  //             const value = input.value
  //             let filteredValue = ''
  //             for (let i = 0; i < value.length; i++) {
  //                 if (isNaN(value[i])) { 
  //                     filteredValue += value[i]
  //                 }
  //             }
  //             input.value = filteredValue
  //         }

  // задание 2
  // let openSpace=document.getElementById("openModal")
  // let shadow=document.getElementById("shadowModal")
  // openSpace.addEventListener("click",function(){
  // shadow.style.display="block"
  // })
  // let closeSpace=document.getElementById("closeModal")
  // closeSpace.addEventListener("click",function(){
  //   shadow.style.display="none"
  // })

  //3 задание
  // let pole = document.getElementById("pole")
  // let ball = document.getElementById("ball")
  // pole.onclick = moveBall

  // function moveBall(e) {
  //   let x = e.clientX
  //   let y = e.clientY
  //   ball.style.left = x + "px"
  //   ball.style.top = y + "px"
  //   let coordPole = pole.getBoundingClientRect()
  //   x = x - coordPole.x - pole.clientLeft
  //   y = y - coordPole.y - pole.clientTop
  //   let coordPoleXleft = ball.offsetWidth / 2
  //   let coordPoleYleft = ball.offsetHeight / 2
  //   let coordPoleXright = pole.clientWidth - ball.offsetWidth / 2
  //   let coordPoleYright = pole.clientHeight - ball.offsetHeight / 2
  //   if (x < coordPoleXleft) {
  //     x = coordPoleXleft
  //   }
  //   if (y < coordPoleYleft) {
  //     y = coordPoleYleft
  //   }
  //   if (x > coordPoleXright) {
  //     x = coordPoleXright
  //   }
  //   if (y > coordPoleYright) {
  //     y = coordPoleYright
  //   }
  //   ball.style.left = x + "px"
  //   ball.style.top = y + "px"

  // }

  //4 задание

  // let nextBut = document.getElementById("nextButton")
  // let i = -1
  // nextBut.addEventListener("click", function () {
  //   i++
  //   let colorArr = ['red', 'yellow', 'green']
  //   round = document.querySelectorAll("#round")
  //   if (round[i - 1]) {
  //     round[i - 1].style.background = ""
  //   }
  //   if (i == colorArr.length) {
  //     i = 0
  //   }
  //   round[i].style.background = colorArr[i]
  // })

  //5 задание

  // let liList=ulSpisok.children

  // for(let i=0;i<liList.length;i++){
  //   let active="yellow"
  //   let diactive=""
  //   liList[i].addEventListener("click",function(){
  //     liList[i].style.background=active
  //   })
  //   for(let j=0;j<liList.length;j++){
  //     liList[j].addEventListener("click",function(){
  //       liList[j].style.background=active
  //       liList[i].style.background=diactive
  //       console.log(liList)
  //     })
  //   }
  // }

  //задание 6
  // let toolTip
  // botText.onmouseover = function (event) {
  //   let target = event.target
  //   let toolTipHtml = target.dataset.tool
  //   console.log(toolTipHtml)
  //   toolTip = document.createElement("div")
  //   toolTip.id = "toolTipElem"
  //   toolTip.innerHTML = toolTipHtml
  //   document.body.append(toolTip)
  //   console.log(toolTip.style)
  //   let coords = target.getBoundingClientRect()
  //   let left = coords.left + (target.offsetWidth - toolTip.offsetWidth) / 2
  //   if (left < 0) {
  //     left = 0
  //   }
  //   let top = coords.top - toolTip.offsetHeight - 5
  //   if (top < 0) {
  //     top = coords.top + target.offsetHeight + 5
  //   }
  //   toolTip.style.left = left + "px"
  //   toolTip.style.top = top + "px"

  // }
  // botText.onmouseout = function () {
  //   if (toolTip) {
  //     toolTip.remove()
  //     toolTip.null
  //   }
  // }
  // topText.onmouseover = function (event) {
  //   let target = event.target
  //   let toolTipHtml = target.dataset.tool
  //   console.log(toolTipHtml)
  //   toolTip = document.createElement("div")
  //   toolTip.id = "toolTipElem"
  //   toolTip.innerHTML = toolTipHtml
  //   document.body.append(toolTip)
  //   console.log(toolTip.style)
  //   let coords = target.getBoundingClientRect()
  //   let left = coords.left + (target.offsetWidth - toolTip.offsetWidth) / 2
  //   if (left < 0) {
  //     left = 0
  //   }
  //   let top = coords.top - toolTip.offsetHeight - 5
  //   if (top < 0) {
  //     top = coords.top + target.offsetHeight + 5
  //   }
  //   toolTip.style.left = left + "px"
  //   toolTip.style.top = top + "px"

  // }
  // topText.onmouseout = function () {
  //   if (toolTip) {
  //     toolTip.remove()
  //     toolTip.null
  //   }
  // }

  // 7 задание
// document.addEventListener('click',look)
// function look(e){
//   if(e.target.className=='main'){
//     let param=e.target.children[0]
//     if(param.style.display==='none'){
//       param.style.display="block"
//       param.style.marginLeft="30px"
//     }else{
//       param.style.display="none"
//       param.style.marginLeft="30px"
//     }
//   }
// }
// document.onmouseover=function(e){
//   let param=e.target.children[0]
//   if(e.target.className=="main"){
//     e.target.style.fontWeight="bold"
//     param.style.fontWeight="normal"
//   }
// }
// document.addEventListener("mouseout",outGet)
// function outGet(e){
//   if(e.target.className=="main"){
//     e.target.style.fontWeight="normal"
//   }
// }
// 8 задание
// let buttonDrag=document.getElementById("butSpot")
// let textAr=document.getElementById("textArea")
// function hookAndSized(e){
//   e.preventDefault()
//   window.addEventListener("mousemove",hook)
//   window.addEventListener("mouseup",sizeDone)
// }


// function hook(e){
// textAr.style.width=(e.clientX-textAr.offsetLeft)+"px"
// textAr.style.height=(e.clientY-textAr.offsetTop)+"px"
// }
// function sizeDone(e){
//   window.removeEventListener("mouseup",sizeDone)
//   window.removeEventListener("mousemove",hook)
// }
// buttonDrag.addEventListener("mousedown",hookAndSized)