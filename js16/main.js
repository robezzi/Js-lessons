let request
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObjekt("Microsoft.XMLHTTP")
}


request.open("GET", "https://jsonplaceholder.typicode.com/users")


request.onload = function () {
    if (request.status == 200 && request.readyState == 4) {
        let userArray = JSON.parse(request.response)
        userArray.forEach(user => {
            document.getElementById("cardGrid").innerHTML +=
                `<div class="col">
                    <div class="card mb-3">
                        <div class="card-header">${user.name}</div>
                        <div class="card-body">
                            <p class="card-text">${user.email}
                            <br>${user.phone}
                            <br> ${user.address.city},
                            ${user.address.street}
                            ${user.address.suite}
                            </p>
                            <button onclick="showPost(${user.id},'${user.name}')"> Посмотреть посты </button>
                        </div>
                    </div>
                </div>`
        })

    }
}
request.send()

function showPost(userId, userName) {
    let request
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
    } else {
        request = new ActiveXObjekt("Microsoft.XMLHTTP")
    }
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    request.onload = function () {
        if (request.status == 200 && request.readyState == 4) {
            let postArray = JSON.parse(request.response)
            document.getElementById("modalUserName").innerText = `${userName}'s posts`
            document.getElementById("titleList").innerHTML = ""
            postArray.forEach(post => {
                document.getElementById("titleList").innerHTML +=
                    `<li> ${post.title} <button onclick="randomPosComm(${post.id})" style="width:40px;height:20px"></button></li>`
            })
            document.getElementById("modalShade").style.display = "block"
            document.getElementById("modalWindow").style.display = "block"
        }
    }
    request.send()
}

document.getElementById("modalShade").addEventListener("click", closeModal)

function closeModal() {
    document.getElementById("modalShade").style.display = "none"
    document.getElementById("modalWindow").style.display = "none"
}

function randomPosComm(postId) {
    let request
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
    } else {
        request = new ActiveXObjekt("Microsoft.XMLHTTP")
    }
    request.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=" + postId)
    request.onload = function () {
        if (request.status == 200 && request.readyState == 4) {
            let commentArray = JSON.parse(request.response)
            commentArray.forEach(comment => {
                let maxW = body.clientWidth
                let ranW = Math.floor(Math.random() * (maxW - 350 + 1)) + 350;
                console.log(ranW)
                let maxH = body.clientHeight
                let ranH = Math.floor(Math.random() * (maxH - 150 + 1)) + 150;
                let commDiv = document.createElement('div')
                commDiv.innerHTML = `<h3>Username: ${comment.name}</h3><h5 >Comment: ${comment.body}</h5><p>Email: ${comment.email}</p>`
                commDiv.className = "commDivStyle"
                modalWindow.append(commDiv)
                commDiv.style.top = `${ranH}` + "px"
                commDiv.style.left = `${ranW}` + "px"
                commDiv.style.transform = "translate(-100%,-100%)"

                commDiv.addEventListener('mousedown', function (evt) {
                    evt.preventDefault();

                    // Отслеживаем начальное положение блока по его координатам
                    let xStart = evt.clientX;
                    let yStart = evt.clientY;


                    var onMouseMove = function (evtMove) {
                        evtMove.preventDefault();

                        // Отслеживаем изменение координат мыши
                        var xNew = xStart - evtMove.clientX;
                        var yNew = yStart - evtMove.clientY;

                        xStart = evtMove.clientX;
                        yStart = evtMove.clientY;

                        commDiv.style.top = (commDiv.offsetTop - yNew) + 'px';
                        commDiv.style.left = (commDiv.offsetLeft - xNew) + 'px';

                    }

                    var onMouseUp = function (evtUp) {
                        // Отменяем подписку на события
                        document.removeEventListener('mousemove', onMouseMove);
                        document.removeEventListener('mouseup', onMouseUp);
                    }


                    document.addEventListener('mousemove', onMouseMove)
                    document.addEventListener('mouseup', onMouseUp)
                })
                commDiv.addEventListener('dblclick', function(evt) {
    commDiv.style.display = "none"
    })
            })


        }
    }
    request.send()
}