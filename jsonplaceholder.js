// import { navBar } from './navBar.js'

let mainWrapper = document.querySelector("#post-wrapper")
let albumlist = document.querySelector("#post-albums")








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
                postDiv.append(commentWrapper)
                    // if (toggleButton) {
                commentWrapper.classList.toggle("hiden")
                commentWrapper.style.display = "block";
                if (commentWrapper.classList.contains("hiden")) {

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

                            })



                        })



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







//     5. Pagrindiniame (index.html) puslapyje prid??ti skilt??, kurioje atvaizduojamas album?? s??ra??as. Kiekvienas albumas tur??s:
//   5.1. Pavadinim??, o paspaudus ant jo - nukreipiama ?? album?? (album.html).
//   5.2. Albumo autoriaus vard??.
//   5.3. Nuotrauk??.