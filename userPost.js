import { createNewPost } from "./createPost/createPostController.js"
let allUsers = document.querySelector("#all-users")


allUsers.addEventListener("submit", async(e) => {
    e.preventDefault()

    let userData = {
        name: e.target.elements["user-name"].value,
        username: e.target.elements["user-username"].value,
        email: e.target.elements["user-email"].value,
        adress: e.target.elements["user-adress"].value,
        street: e.target.elements["user-street"].value,
        suite: e.target.elements["user-suite"].value,
        city: e.target.elements["user-city"].value,
        zipcode: e.target.elements["user-zipcode"].value,
    };


    let userFetch = await createNewPost(userData)
    console.log(userFetch)

    let userOutputHtml = document.createElement("ul")
    userOutputHtml.innerHTML = `Name:<li> ${userFetch.name}</li>
                                Username <li>${userFetch.username}</li>
                                Email <li>${userFetch.email}</li>    
                                Adress <li>${userFetch.adress}</li>    
                                Street <li>${userFetch.street}</li>    
                                Suite <li>${userFetch.suite}</li>    
                                City <li>${userFetch.city}</li>    
                                Zipcode <li>${userFetch.zipcode}</li>    `


    document.querySelector("body").append(userOutputHtml)
})