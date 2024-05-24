 let request
 if (window.XMLHttpRequest) {
     request = new XMLHttpRequest()
 } else {
     request = new ActiveXObject("Microsoft.XMLHTTP")
 }
 request.open("GET", "https://jsonplaceholder.typicode.com/users")
 request.onload = function () {
     if (request.status == 200 && request.readyState == 4) {
         let usersArray = JSON.parse(request.response)
         usersArray.forEach(user => {
             document.getElementById("cardGrid").innerHTML +=
                 `<div class="cart mb-3">
               <div class="card-header">${user.name}</div>
               <div class="card-body">
                  <p class="card-text">${user.email}<br>${user.phone}<br>${user.address.city},${user.address.street},${user.address.suite}</p>
               <button onclick="showPosts(${user.id},'${user.name}')">Посмотреть посты</button>
                  </div>
          </div>`
         })
     }


 }
 request.send()

 function showPosts(userId, userName) {
     let request
     if (window.XMLHttpRequest) {
         request = new XMLHttpRequest()
     } else {
         request = new ActiveXObject("Microsoft.XMLHTTP")
     }
     request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId)
     request.onload = function () {
         if (request.status == 200 && request.readyState == 4) {
             let postArray = JSON.parse(request.response)
             document.getElementById("modalUserName").innerHTML = `${userName}'s posts`
             document.getElementById("titleList").innerHTML = ""
             postArray.forEach(post => {
                 document.getElementById("titleList").innerHTML +=
                     `<li onclick="showPostBody(event)">${post.title}
                     <p style="display:none">${post.body}</p></li>`
             })
             document.getElementById("modalWindow").style.display = "block"
             document.getElementById("modalShade").style.display = "block"
         }
     }
     request.send()
 }
 document.getElementById("modalShade").addEventListener("click", closeModal)

 function closeModal() {
     document.getElementById("modalShade").style.display = "none"
     document.getElementById("modalWindow").style.display = "none"
 }

function showPostBody(event){

}