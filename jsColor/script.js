document.forms[0].addEventListener("submit", checkForm)

function checkForm(event) {
    event.preventDefault()
    let colorName = document.getElementById("nameColor").value
    let colorType = document.getElementById("typeColor").value
    let colorCode = document.getElementById("codeColor").value
    if (colorName == '') {
        alert("Заполни колор")
    } else if ((/\W/g).test(colorName) || (/\d/g).test(colorName) || (/[_]/g).test(colorName)) {
        alert("проверь имя")
    }

    switch (colorType) {
        case 'RGB':
            if (rgbTest(colorCode)) {
                elemGo(colorName, colorType, colorCode)
            }
            break
        case 'RGBA':
            if (rgbaTest(colorCode)) {
                elemGo(colorName, colorType, colorCode)
            }
            break
        case 'HEX':
            if (hexTest(colorCode)) {
                elemGo(colorName, colorType, colorCode)
            }
            break
        default:
            alert("не то вводишь в code")
    }

}

function elemGo(colorName, colorType, colorCode) {
    document.getElementById("colors").innerHTML += `
<div class="newWrap">
    <div class="newInnerWrap">
        <h4 id="nameByColor">${colorName}</h4>
        <p id="newColorType">${colorType}</p>
        <h3 id="codeByColor">${colorCode}</h3>
    </div>
</div>`
}



function rgbTest(str) {
    console.log(str)
    let isRight = false
    let numbers = str.split(",")
    for (i = 0; i < numbers.length; i++) {
        if (Number.isInteger(+numbers[i]) && +numbers[i] >= 0 && +numbers[i] <= 255 && numbers.length == 3) {
            isRight = true
        } else {
            return false
        }
    }
    return isRight
}


function rgbaTest(str) {
    let isRight = false
    let numbers = str.split(",")
    for (i = 0; i < numbers.length - 1; i++) {
        if (Number.isInteger(+numbers[i]) && +numbers[i] >= 0 && +numbers[i] <= 255 && numbers.length == 4 && numbers.at(-1) >= 0 && numbers.at(-1) <= 1) {
            isRight = true
        } else {
            return false
        }
    }
    return isRight
}


function hexTest(str) {
    let isRight = false
    let hasWrongZnak = str.slice(1).match(/[^a-fA-F0-9]/gi) || []
    console.log(hasWrongZnak)
    for (i = 0; i < str.length; i++) {
        if (str.length == 7 && str[0] == '#' && hasWrongZnak.length == 0) {
            isRight = true
        } else {
            return false
        }
    }
    return isRight
}
hexTest('#43_)23')
let arrBig = [{
    name: 'classnii',
    type: 'RGB',
    code: '255,255,255'
}]

function cookieArrColorName(arr) {
    document.cookie = `array:${JSON.stringify(arr)}`

}