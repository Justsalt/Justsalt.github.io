import { init2 } from "./navBar.js";
init2()
let userList = document.querySelector("#user-wrapper")
let userUlList = document.createElement("ul")
let userListTitle = document.createElement("h2")
userListTitle.classList.add("users-list-title")
userListTitle.textContent = "Users List"
userList.prepend(userListTitle)




function int() {
    fetch(`https://jsonplaceholder.typicode.com/users/?_embed=posts`)
        .then(res => res.json())
        .then((users) => {
            users.forEach(user => {
                let userLiList = document.createElement("li")
                userUlList.append(userLiList)
                userList.append(userUlList)

                userLiList.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a> ( Posts :${user.posts.length}) `

            });


        })
}
int()