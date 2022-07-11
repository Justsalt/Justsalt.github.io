// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
//   8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
let userList = document.querySelector("#user-wrapper")
let userUlList = document.createElement("ul")
let userListTitle = document.createElement("h2")
userListTitle.classList.add("users-list-title")
userListTitle.textContent = "Users List"
userList.prepend(userListTitle)





fetch(`https://jsonplaceholder.typicode.com/users `)
    .then(res => res.json())
    .then((users) => {
        users.map((user) => {


            let userLiList = document.createElement("li")
            userUlList.append(userLiList)
            userList.append(userUlList)



            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(res => res.json())
                .then((postLength) => {
                    console.log(postLength.length)

                    userLiList.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a> ( Posts :${postLength.length}) `
                })
        })
    })