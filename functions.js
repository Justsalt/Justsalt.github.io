export function firstLetterUppercase(str) {
    return str[0].toUpperCase() + str.slice(1)
}

export function renderOptionElement(data) {
    let optionElement = document.createElement('option');
    optionElement.textContent = data.content;
    optionElement.value = data.value;

    data.parentElement.append(optionElement);
}

export function commentsPost(users, postDiv, commentWrapper) {
    fetch(`https://jsonplaceholder.typicode.com/post/${users}/comments`)
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
}