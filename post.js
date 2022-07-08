let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
let postId = urlParamas.get("post_id")
console.log(postId)


mainWrapper = document.querySelector("#post-wrapper")
let albumlist = document.querySelector("#post-albums")

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_limit=1`)
    .then((res) => res.json())
    .then((users) => {


        let postDiv = document.createElement("div")
        postDiv.classList.add("user-posts")
        let postTitle = document.createElement("h2")
        postTitle.classList.add("post-title")
        let postParagraph = document.createElement("p")
        postParagraph.classList.add("post-paragraph")
        let authorLink = document.createElement("a")
            // authorLink.classList.add = "author-link"

        let otherPost = document.createElement("div")
        otherPost.innerHTML = `<a href="./posts.html?users_Id=${users.userId}">Other posts</a>`


        let comments = document.createElement("div")
        comments.classList.add("comment")
        comments.innerHTML = `COMMENTS`

        let commentWrapper = document.createElement("div")
        commentWrapper.classList.add("comment-wrapper")
        postTitle.innerHTML = `${users.title}`
        postParagraph.innerHTML = `${users.body}`





        fetch(`https://jsonplaceholder.typicode.com/users/${users.userId}`)
            .then((res) => res.json())
            .then((userData) => {

                authorLink.innerHTML = `Author :<a href="./user.html?user_id=${users.userId}"> ${userData.name}</a>`


            })




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




        postDiv.append(postTitle, authorLink, otherPost, postParagraph, comments)
        mainWrapper.prepend(postDiv)









    })