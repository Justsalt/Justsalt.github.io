let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
let userId = urlParamas.get("users_Id")

let postTitle = document.querySelector("#post-title")
let allPosts = document.createElement("h2")
allPosts.textContent = "All Posts"

postTitle.append(allPosts)



let postsWrapper = document.querySelector("#posts-wrapper")





if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then((users) => {

            console.log(users.id)
            let postsName = document.createElement("div")
            postsName.classList.add("posts-name")
            postsName.innerHTML = `Author:<a href="user.html?user_id=${users.id}">${users.name}</a>`

            postsWrapper.append(postsName)
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(res => res.json())
                .then((posts) => {



                    posts.map((post) => {

                        let postsTitle = document.createElement("h3")
                        postsTitle.classList.add("posts-title")
                        postsTitle.innerHTML = `<a href="./post.html?users_Id=${userId}&post_id=${post.id}">${post.title}</a>`








                        // })

                    })
                })
        })



} else {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then((posts) => {
            posts.map((post) => {

                let postsItem = document.createElement("div")
                postsItem.classList.add("post-item")

                let postsTitle = document.createElement("h3")
                postsTitle.classList.add("posts-title")
                postsTitle.innerHTML = `<a href="./post.html?users_Id=${userId}&post_id=${post.id}">${post.title}</a>`





                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then(res => res.json())
                    .then((users) => {

                        console.log(users.id)
                        let postsName = document.createElement("div")
                        postsName.classList.add("posts-name")
                        postsName.innerHTML = `Author:<a href="./user.html?user_id=${users.id}">${users.name}</a>`





                        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}/posts`)
                            .then(res => res.json())
                            .then((usersPost) => {


                                let usersPostLength = document.createElement("div")
                                usersPostLength.classList.add("usersPostLength")
                                usersPostLength.innerHTML = `Posts amount:${usersPost.length}`


                                postsItem.append(postsTitle, postsName, usersPostLength)

                                postsWrapper.append(postsItem)
                            })


                    })

            })
        })
}