export function commentsDrop(users, commentWrapper) {

    users.comments.map((comment) => {


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


}

export function firstLetterUppercase(str) {
    return str[0].toUpperCase() + str.slice(1)
}