import { firstLetterUppercase } from "./functions.js"
import { init2 } from "./navBar.js";
init2()

function init() {
    let queryParams = document.location.search
    let urlParamas = new URLSearchParams(queryParams)
    let userId = urlParamas.get("users_Id")

    let postTitle = document.querySelector("#post-title")
    let allPosts = document.createElement("h2")
    allPosts.textContent = "All Posts"

    postTitle.append(allPosts)

    let postsWrapper = document.querySelector("#posts-wrapper")


    if (userId) {
        renderPostByUserId()


    } else {
        renderAllPost()
    }





    function renderPostByUserId() {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts`)

        .then(res => res.json())
            .then((users) => {
                let postsName = document.createElement("div")
                postsName.classList.add("posts-name")
                postsName.innerHTML = `Author:<a href="user.html?user_id=${users.id}">${users.name}</a>`

                postsWrapper.append(postsName)

                users.posts.map((post) => {

                    let postsTitle = document.createElement("h3")
                    postsTitle.classList.add("posts-title")
                    postsTitle.innerHTML = `<a href="./post.html?users_Id=${userId}&post_id=${post.id}">${firstLetterUppercase(post.title)}</a>`
                    postsWrapper.append(postsTitle)







                    // })

                })

            })

    }

    function renderAllPost() {
        fetch(`https://jsonplaceholder.typicode.com/users/?_embed=posts`)

        .then(res => res.json())
            .then((user) => {

                user.map((users) => {

                    users.posts.map((post) => {



                        let postsItem = document.createElement("div")
                        postsItem.classList.add("post-item")

                        let postsTitle = document.createElement("h3")
                        postsTitle.classList.add("posts-title")
                        postsTitle.innerHTML = `<a href="./post.html?users_Id=${userId}&post_id=${post.id}">${firstLetterUppercase(post.title)}</a>`


                        let postsName = document.createElement("div")
                        postsName.classList.add("posts-name")
                        postsName.innerHTML = `Author:<a href="./user.html?user_id=${users.id}">${users.name}</a>`

                        let usersPostLength = document.createElement("div")
                        usersPostLength.classList.add("usersPostLength")

                        usersPostLength.innerHTML = `Posts amount:${users.posts.length}`


                        postsItem.append(postsTitle, postsName, usersPostLength)

                        postsWrapper.append(postsItem)



                    })

                })
            })
    }
}
init()