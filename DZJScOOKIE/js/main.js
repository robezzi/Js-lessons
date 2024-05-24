
console.log(document.cookie)













// Функция, которая добавляет новые куки
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

// Функция, которая достаёт из куки значение по имени
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : false;
}
// console.log(getCookie('ttt'))


// Функция, которая генерирует квадраты из куков
function generateBlock() {
  const values = [];
  const cookieValues = decodeURIComponent(document.cookie).split(" ");
  cookieValues.forEach((value) => {
    const regex = /^[^=]*/g;
    const colorName = value.match(regex)[0];
    values.push(colorName);
  });

  values.forEach((value) => {
    const arrObj = getCookie(value).split(";");
    const [color, type, code] = arrObj;
    getElement(color, type, code);
  });
}
generateBlock()



// Функция с проверками, которая вызывает функцию генерации квадрата
but.addEventListener('click', function(){
  
  let color = document.getElementById('Color').value
  let type = document.getElementById('Type').value
  let code = document.getElementById('Code').value

if(getCookie(`${color}`) != false){
  return alert('Такой цвет уже есть')
}


  if(color == ''){
    return alert('Заполните поле "Color"')
}
if((/\W/g).test(color) || (/\d/g).test(color) || (/[_]/g).test(color)){
  return alert('Проверьте поле "Code"')
}
if((code == '')){
  return alert('Заполните поле "Code"')
}

switch(type){
  case 'RGB':
    if(rgbTest(code)){
      getElement(color,type,code)
    }
    break
  case 'RGBA':
    if(rgbaTest(code)){
      getElement(color,type,code)
    }
    break
  case 'HEX':
    if(hexTest(code)){
      getElement(color,type,code)
    }
    break
}

let valueCookie = ''
if(type == 'RGB'){
  valueCookie = `${color};${type};${code}`
}
if(type == 'RGBA'){
  valueCookie = `${color};${type};${code}`
}
if(type == 'HEX'){
  valueCookie = `${color};${type};${code}`
}
setCookie(`${color}`, `${valueCookie}`, {'max-age': 10800});


})




// функция для генерации цветного кватрата
function getElement(color,type,code){

  let bg = ''
  if(type == 'RGB'){
    bg = `rgb(${code})`
  }
  if(type == 'RGBA'){
    bg = `rgba(${code})`
  }
  if(type == 'HEX'){
    bg = `${code}`
  }
  // console.log(bg)
  document.getElementById("allCol").innerHTML +=
  `<div style="background-color: ${bg} ;" class="colBox">
  <div class="minBox">
    <p class="textColor">${color}</p>
    <p class="textType">${type}</p>
    <p class="textCode">${code}</p>
  </div>
  </div>`
}
// getElement(color,type,code)








// Функции для проверки поля ввода Code 
function rgbTest(str){
  let isRight=false
  let numbers=str.split(",")
  for(i=0;i<numbers.length;i++){
      if(Number.isInteger(+numbers[i]) && +numbers[i]>=0 && +numbers[i]<=255 && numbers.length==3){
          isRight=true
      }else{
        alert(`Проверь код RGB`)
          return false
      }
  }
  return isRight
  }


  function rgbaTest(str){
      let isRight=false
  let numbers=str.split(",")
  for(i=0;i<numbers.length-1;i++){
      if(Number.isInteger(+numbers[i]) && +numbers[i]>=0 && +numbers[i]<=255 && numbers.length==4 && numbers.at(-1)>=0 && numbers.at(-1)<=1 ){
          isRight=true    
      }
      else{
        alert(`Проверь код RGBA`)
          return false
      }
  }
  return isRight
  }
  

  function hexTest(str) {
    let isRight = false
    let hasWrongZnak = str.slice(1).match(/[^a-fA-F0-9]/gi) || []
    for (i = 0; i < str.length; i++) {
        if (str.length == 7 && str[0] == '#' && hasWrongZnak.length == 0) {
            isRight = true
        } else {
          alert(`Проверь код HEX`)
            return false
        }
    }
    return isRight
}



// function treatmentInput(){
//   let color = document.getElementById('Color').value
//   let type = document.getElementById('Type').value
//   let code = document.getElementById('Code').value

// }
