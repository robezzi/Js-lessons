$(document).ready(function(){
    $("#leftSideBar").mouseenter(function(){
        $(this).animate({width:'300px'})
       
    })
    $("#leftSideBar").mouseleave(function(){
        $(this).animate({width:'30px'})
    })
    $.ajax({
        url:'https://dummyjson.com/recipes',
        method:'get',
        dataType:'json',
        success:function(data){
            console.log(data)
            let recipesArr=data.recipes
            recipesArr.forEach(recipe => {
                console.log(recipe.image)
                let cardText=`<div class="col-4"><div class="card mt-3"> <img src="${recipe.image}" alt="asdasdasd" class="card-img-top"> <div class="card-body"> <h5 class="card-title">${recipe.name}</h5> <p class="card-text">${recipe.cuisine},${recipe.tags},${recipe.difficulty}</p> <a href="#" class="btn btn-primary">Подробнее......</a> </div></div>`
                $("#cardGrid").append(cardText)

            })
        }
    })
})

// https:/dummyjson.com/recipes
// <div class="col-4">
// <div class="card mt-3">
// <img src="" alt="" class="card-img-top">
// <div class="card-body">
// <h5 class="card-title">Заголовок
// </h5>
// <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis alias magni minima vitae dolor architecto maxime perferendis, aspernatur nihil?</p>
// <a href="#" class="btn btn-primary">Подробнее......</a>
// </div>
// </div>
'let cardText=<div class="col-4"> <div class="card mt-3"> <img src="" alt="" class="card-img-top"> <div class="card-body"> <h5 class="card-title">Заголовок</h5> <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis alias magni minima vitae dolor architecto maxime perferendis, aspernatur nihil?</p> <a href="#" class="btn btn-primary">Подробнее......</a> </div></div>'