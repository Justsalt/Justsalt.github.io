import { init2 } from "../navBar.js";
init2()
import { commentsDrop, firstLetterUppercase } from "./jsonplaceholderControlFunctions.js";
import fetchRenderComments from "./jsonplaceholderControllerFetch.js"
import { albumInfoUser } from "./jsonplaceholderControllerFetch.js"


let mainWrapper = document.querySelector("#post-wrapper")
let albumlist = document.querySelector("#post-albums")



async function init() {

    let dataInfo = await fetchRenderComments()
    dataInfo.map((users) => {



        function commentUserInfo(users, listeneris) {

            let postDiv = document.createElement("div")
            postDiv.classList.add("user-posts")
            let postTitle = document.createElement("h2")
            postTitle.classList.add("post-title")
            let postParagraph = document.createElement("p")
            postParagraph.classList.add("post-paragraph")
            let authorLink = document.createElement("div")
            let comments = document.createElement("div")
            comments.classList.add("comment-button") //pasikeicia
            comments.innerHTML = `<button>COMMENTS</button>`
            let commentWrapper = document.createElement("div")
            commentWrapper.classList.add("comment-wrapper")
            postTitle.innerHTML = `${firstLetterUppercase(users.title)}`
            postParagraph.innerHTML = `${users.body}`

            if (listeneris) {

                authorLink.innerHTML = `Author :<a href="./user.html?user_id=${users.user.id}"> ${users.user.name}</a>`
                comments.addEventListener("click", () => {
                    commentWrapper.textContent = ""
                    postDiv.append(commentWrapper)

                    commentWrapper.classList.toggle("hiden")
                    commentWrapper.style.display = "block";
                    if (commentWrapper.classList.contains("hiden")) {
                        commentsDrop(users, commentWrapper)
                    } else {
                        commentWrapper.style.display = "none";
                    }
                })
                postDiv.append(postTitle, postParagraph, authorLink, comments)
                mainWrapper.prepend(postDiv)
            }

        }
        commentUserInfo(users, true)


    })





    let albums = await albumInfoUser()
    albums.map((album) => {





        let albumItem = document.createElement("div")
        albumItem.classList.add("album-item")
        console.log()
        albumItem.innerHTML = `<h3><a href="./album.html?album_Id=${album.id}&album_title=${album.title}&album_userId=${album.user.id}">${firstLetterUppercase(album.title)}</a></h3>
                                         <span><a href="./user.html?user_id=${album.user.id}">${album.user.name}</a></span>
                                         
                                         <div class="img-wrapper"><img src="${album.photos[0].thumbnailUrl}"</div>
                                         
                                       `


        albumlist.append(albumItem)



    })



}
init()