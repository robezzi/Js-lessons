$(document).ready(function () {
    $("#leftSideBar").mouseenter(function () {
        $(this).animate({
            width: '300px'
        })

    })
    $("#leftSideBar").mouseleave(function () {
        $(this).animate({
            width: '30px'
        })
    })
    $.ajax({
        url: 'https://dummyjson.com/recipes',
        method: 'get',
        dataType: 'json',
        success: function (data) {

            let recipesArr = data.recipes
            recipesArr.forEach(recipe => {
                let cardText = `<div class="col-4"><div class="card mt-3"> <img src="${recipe.image}" alt="asdasdasd" class="card-img-top"> <div class="card-body"> <h5 class="card-title">${recipe.name}</h5> <p class="card-text">${recipe.cuisine},<span class="badge rounded-pill bg-secondary">${recipe.tags}</span>,${recipe.difficulty}</p> <button href="##" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" onclick="asd('${recipe.instructions}','${recipe.caloriesPerServing}','${recipe.name}')">Подробнее......</button> </div></div>`
                $("#cardGrid").append(cardText)
            })

        }
    })
    $("#sortByNami").click(function () {
        $("#cardGrid").empty()
        $.ajax({
            url: 'https://dummyjson.com/recipes',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                let sortNameArr = data.recipes.sort((a, b) => a.name > b.name ? 1 : -1)
                sortNameArr.forEach(recipe => {
                    let cardText = `<div class="col-4"><div class="card mt-3"> <img src="${recipe.image}" alt="asdasdasd" class="card-img-top"> <div class="card-body"> <h5 class="card-title">${recipe.name}</h5> <p class="card-text">${recipe.cuisine},<span class="badge rounded-pill bg-secondary">${recipe.tags}</span>,${recipe.difficulty}</p> <button href="##" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" onclick="asd('${recipe.instructions}','${recipe.caloriesPerServing}','${recipe.name}')">Подробнее......</button> </div></div>`
                    $("#cardGrid").append(cardText)
                })
            }
        })

    })
    $("#sortByKitchen").click(function () {
        $("#cardGrid").empty()
        $.ajax({
            url: 'https://dummyjson.com/recipes',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                let sortKitchenArr = data.recipes.sort((a, b) => a.cuisine > b.cuisine ? 1 : -1)
                sortKitchenArr.forEach(recipe => {
                    let cardText = `<div class="col-4"><div class="card mt-3"> <img src="${recipe.image}" alt="asdasdasd" class="card-img-top"> <div class="card-body"> <h5 class="card-title">${recipe.name}</h5> <p class="card-text">${recipe.cuisine},<span class="badge rounded-pill bg-secondary">${recipe.tags}</span>,${recipe.difficulty}</p> <button href="##" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" onclick="asd('${recipe.instructions}','${recipe.caloriesPerServing}','${recipe.name}')">Подробнее......</button> </div></div>`
                    $("#cardGrid").append(cardText)
                })
            }
        })

    })
    $("#sortByTagi").click(function () {
        $("#cardGrid").empty()
        $.ajax({
            url: 'https://dummyjson.com/recipes',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                let sortTagiArr = data.recipes.sort((a, b) => a.tags > b.tags ? 1 : -1)
                sortTagiArr.forEach(recipe => {
                    let cardText = `<div class="col-4"><div class="card mt-3"> <img src="${recipe.image}" alt="asdasdasd" class="card-img-top"> <div class="card-body"> <h5 class="card-title">${recipe.name}</h5> <p class="card-text">${recipe.cuisine},<span class="badge rounded-pill bg-secondary">${recipe.tags}</span>,${recipe.difficulty}</p> <button href="##" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" onclick="asd('${recipe.instructions}','${recipe.caloriesPerServing}','${recipe.name}')">Подробнее......</button> </div></div>`
                    $("#cardGrid").append(cardText)
                })
            }
        })

    })

$("#searchAndDestroy").click(function(e){
e.preventDefault()
  $("#cardGrid").empty()
    $.ajax({
        url: 'https://dummyjson.com/recipes',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            let arrRec = data.recipes
            let inputGo = document.getElementById("searchInput").value.toLowerCase()
            arrRec.forEach(recipe => {
                let lowerTags=recipe.tags.map(e => e.toLowerCase())
                console.log(lowerTags)
                if (recipe.name.toLowerCase().includes(inputGo) || recipe.cuisine.toLowerCase().includes(inputGo) || lowerTags.includes(inputGo)){
                    let cardText = `<div class="col-4"><div class="card mt-3"> <img src="${recipe.image}" alt="asdasdasd" class="card-img-top"> <div class="card-body"> <h5 class="card-title">${recipe.name}</h5> <p class="card-text">${recipe.cuisine},<span class="badge rounded-pill bg-secondary">${recipe.tags}</span>,${recipe.difficulty}</p> <button href="##" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" onclick="asd('${recipe.instructions}','${recipe.caloriesPerServing}','${recipe.name}')">Подробнее......</button> </div></div>`
                    $("#cardGrid").append(cardText)
                }
            })
        }
    })
    })
})

function asd(str, str1, str2) {
    $("#titleModal").html(str2)
    $("#instModal").html("Инструкция:<br>" + str)
    $("#calModal").html("Калории:<br>" + str1)
}