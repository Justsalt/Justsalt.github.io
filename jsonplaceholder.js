//search laukelis


let searchForm = document.querySelector("#search-form")
let searchInput = document.querySelector("#search-input")
searchForm.addEventListener("submit", (event) => {
    event.preventDefault()

    // let hrefTrasnfer = document.createElement("a")
    // hrefTrasnfer.innerHTML = `<a href="./search.html?search_value=${searchInput.value}"></a>`
    console.log(searchInput)
    localStorage.setItem("searchInput", searchInput.value)



    searchInput.value = ""
})









mainWrapper = document.querySelector("#post-wrapper")
let albumlist = document.querySelector("#post-albums")

let mainUsersNav = document.querySelector(".main-home")
mainUsersNav.innerHTML = `<a href="./jsonplaceholder.html">Home</a>`
let mainUsersUsers = document.querySelector(".main-users")
mainUsersUsers.innerHTML = `<a href="./users.html">Users</a>`
let mainUsersAlbums = document.querySelector(".main-albums")
mainUsersAlbums.innerHTML = `<a href="./albums.html">albums</a>`
let mainUsersPosts = document.querySelector(".main-posts")
mainUsersPosts.innerHTML = `<a href="./posts.html">Posts</a>`




fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    .then((res) => res.json())
    .then((data) => {
        data.map((users) => {
            // console.log(users.userId)
            let postDiv = document.createElement("div")
            postDiv.classList.add("user-posts")
            let postTitle = document.createElement("h2")
            postTitle.classList.add("post-title")
            let postParagraph = document.createElement("p")
            postParagraph.classList.add("post-paragraph")
            let authorLink = document.createElement("a")
                // authorLink.classList.add = "author-link"
            let comments = document.createElement("div")
            comments.classList.add("comment-button")
            let commentWrapper = document.createElement("div")

            commentWrapper.classList.add("comment-wrapper")



            postTitle.innerHTML = `${users.title}`
            postParagraph.innerHTML = `${users.body}`

            comments.innerHTML = `<button>COMMENTS</button>`


            fetch(`https://jsonplaceholder.typicode.com/users/${users.userId}`)
                .then((res) => res.json())
                .then((userData) => {
                    // console.log(userData.id)
                    authorLink.innerHTML = `Author :<a href="./user.html?user_id=${users.userId}"> ${userData.name}</a>`
                        // authorLink.title = "my title text";
                        // authorLink.href = `./user.html?user_id=${users.userId}`;


                })

            // let toggleButton = true
            comments.addEventListener("click", () => {
                commentWrapper.textContent = ""
                    // if (toggleButton) {

                if (commentWrapper.style.display === "none") {
                    commentWrapper.style.display = "block";

                    fetch(`https://jsonplaceholder.typicode.com/post/${users.id}/comments`)
                        .then((res) => res.json())
                        .then((commentsData) => {
                            commentsData.map((comment) => {


                                let commentDiv = document.createElement("div")
                                commentDiv.classList.add("comment-div")
                                let commentName = document.createElement("div")

                                commentName.innerHTML = `<strong>Name</strong>:${comment.name}`

                                let brElement = document.createElement("br") //delete later

                                let commentBody = document.createElement("div")
                                commentBody.innerHTML = `<strong>Comment</strong>:${comment.body}`

                                let brrElement = document.createElement("br") //delete later

                                let emailBody = document.createElement("div")
                                emailBody.innerHTML = `<strong>Email</strong>:${comment.email}`

                                let brrrElement = document.createElement("br") //delete later


                                commentDiv.prepend(commentName, brElement, commentBody, brrElement, emailBody, brrrElement)
                                commentWrapper.append(commentDiv)
                                postDiv.append(commentWrapper)

                            })



                        })


                    // } else {
                    //     commentWrapper.style.display = "none"
                    //     toggleButton = true
                    // }
                } else {
                    commentWrapper.style.display = "none";
                }


            })





            postDiv.append(postTitle, postParagraph, authorLink, comments)
            mainWrapper.prepend(postDiv)

            // console.log(users.userId)








        })










    })

fetch(`https://jsonplaceholder.typicode.com/albums?_limit=10`)
    .then((res) => res.json())
    .then((albums) => {
        albums.map((album) => {
            // console.log(album)


            // console.log(album.userId)
            fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
                .then((res) => res.json())
                .then((user) => {

                    fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`)
                        .then((res) => res.json())
                        .then((photo) => {
                            // console.log(photo)
                            // console.log(photo[0].thumbnailUrl)




                            let albumItem = document.createElement("div")
                            albumItem.classList.add("album-item")
                            console.log()
                            albumItem.innerHTML = `<h3><a href="./album.html?album_Id=${album.id}&album_title=${album.title}&album_userId=${album.userId}">${album.title}</a></h3>
                                         <span><a href="./user.html?user_id=${album.userId}">${user.name}</a></span>
                                         
                                         <div class="img-wrapper"><img src="${photo[0].thumbnailUrl}"</div>
                                         
                                       `


                            albumlist.append(albumItem)
                        })
                })

        })
    })







//     5. Pagrindiniame (index.html) puslapyje pridėti skiltį, kurioje atvaizduojamas albumų sąrašas. Kiekvienas albumas turės:
//   5.1. Pavadinimą, o paspaudus ant jo - nukreipiama į albumą (album.html).
//   5.2. Albumo autoriaus vardą.
//   5.3. Nuotrauką.