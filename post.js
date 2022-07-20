import { commentsPost } from "./functions.js";
import { firstLetterUppercase } from "./functions.js"
import { init2 } from "./navBar.js";
init2()



let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
let postId = urlParamas.get("post_id")


let mainWrapper = document.querySelector("#post-wrapper")


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments&_expand=user&_limit=1`)

.then((res) => res.json())
    .then((users) => {
        console.log(users)


        let postDiv = document.createElement("div")
        postDiv.classList.add("user-posts")
        let postTitle = document.createElement("h2")
        postTitle.classList.add("post-title")
        let postParagraph = document.createElement("p")
        postParagraph.classList.add("post-paragraph")
        let authorLink = document.createElement("div")
        let comments = document.createElement("div")
        comments.classList.add("comment")
        comments.innerHTML = `COMMENTS`

        let commentWrapper = document.createElement("div")
        commentWrapper.classList.add("comment-wrapper")

        postTitle.innerHTML = `${firstLetterUppercase(users.title)}`
        postParagraph.innerHTML = `${users.body}`
        authorLink.innerHTML = `Author :<a href="./user.html?user_id=${users.userId}"> ${users.user.name}</a>`


        let otherPost = document.createElement("div")
        otherPost.innerHTML = `<a href="./posts.html?users_Id=${users.userId}">Other posts</a>`





        commentsPost(users.id, postDiv, commentWrapper)




        postDiv.prepend(postTitle, authorLink, otherPost, postParagraph, comments)
        postDiv.append(commentWrapper)
        mainWrapper.prepend(postDiv)









    })