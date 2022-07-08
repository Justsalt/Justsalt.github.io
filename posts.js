let postsWrapper = document.querySelector("#posts-wrapper")




let mainUsersNav = document.createElement("div")
mainUsersNav.innerHTML = `<a href="./jsonplaceholder.html">Home page</a>`
postsWrapper.append(mainUsersNav)


fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then((posts) => {
        posts.map((post) => {

            let postsTitle = document.createElement("h3")
            postsTitle.classList.add("posts-title")
            postsTitle.innerHTML = `Title: ${post.title}`





            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => res.json())
                .then((users) => {


                    let postsName = document.createElement("div")
                    postsName.classList.add("posts-name")
                    postsName.innerHTML = `Name:${users.name}`





                    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}/albums`)
                        .then(res => res.json())
                        .then((usersPost) => {


                            let usersPostLength = document.createElement("div")
                            usersPostLength.classList.add("usersPostLength")
                            usersPostLength.innerHTML = `Album amount:${usersPost.length}`



                            postsWrapper.append(postsTitle, postsName, usersPostLength)
                        })


                })

        })
    })