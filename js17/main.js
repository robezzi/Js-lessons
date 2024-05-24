let request
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObjekt("Microsoft.XMLHTTP")
}


request.open("GET", "https://jsonplaceholder.typicode.com/todos")


request.onload = function () {
    if (request.status == 200 && request.readyState == 4) {
        let = JSON.parse(request.response)
        let userArray = JSON.parse(request.response)
        let result = userArray.sort((a, b) => a.completed > b.completed ? -1 : 1)
         
        result.forEach(user => {
            document.getElementById("ToDoTable").innerHTML += `    <tr>
            <td id="UserCap">${user.userId}</td>
            <td id="numCap">${user.id}</td>
            <td id="dealCap">${user.title}</td>
            <td id="compCap">${user.completed}</td>
            </tr>
            `
        })
        
        
}
}
request.send()

