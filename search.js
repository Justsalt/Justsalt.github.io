let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
let searchValue = urlParamas.get("search_value")
let optionValue = urlParamas.get("select_value")
console.log(optionValue)


let searchForm = document.createElement("form")
let inputSearchTrasnfer = document.createElement("input")
inputSearchTrasnfer.setAttribute("type", "text")
let inputButtonTrasnfer = document.createElement("input")
inputButtonTrasnfer.setAttribute("type", "submit")



let bodyWrapper = document.querySelector("body-wrapper")
let outputWrapper = document.querySelector("#output-wrapper")
let searchOutput = document.querySelector("#search-output")
searchForm.append(inputSearchTrasnfer, inputButtonTrasnfer)
searchOutput.append(searchForm)
let outputTextWrapper = document.createElement("div")
console.log(outputWrapper)

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    outputWrapper.textContent = ""
        // let xs = document.createElement("div")


    searchWrapper(inputSearchTrasnfer.value)
})




searchWrapper(searchValue)

function searchWrapper(searchValue) {

    outputWrapper.prepend(outputTextWrapper)

    let usernameSearch = fetch(`https://jsonplaceholder.typicode.com/users?username_like=${searchValue}$`)
    let nameSearch = fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchValue}`)
    let emailSearch = fetch(`https://jsonplaceholder.typicode.com/users?email_like=${searchValue}`)
    let postsTitleSearch = fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${searchValue}`)
    let albumTitleSearch = fetch(`https://jsonplaceholder.typicode.com/albums?title_like=${searchValue}`)

    Promise.all([usernameSearch, nameSearch, emailSearch, postsTitleSearch, albumTitleSearch]).then((values) => {
        return Promise.all(values.map((value) => {
            return value.json()

        }))
    }).then(([usernames, names, emails, postsTitle, albumsTitle]) => {


        let searchingValue = document.createElement("div")

        console.log(usernames.length, );

        searchingValue.classList.add("searching-value")
        searchingValue.innerHTML = `Ieskomas Zodis  (${searchValue})`
        outputWrapper.append(searchingValue)



        usernames.forEach((username) => {

            // if (username.username === `${searchValue}`) {

            if (usernames.length > 0) {
                let outputTextWrapper = document.createElement("div")

                outputTextWrapper.innerHTML = `<strong>Username</strong> :<a href="./user.html?user_id=${username.id}"> (${username.username}</a>) rastas`
                    // console.log(username.id)


                outputWrapper.append(outputTextWrapper)
            }
        })

        names.map((name) => {
            if (names.length > 0) {
                let outputTextWrapper = document.createElement("div")

                outputTextWrapper.innerHTML = `<strong>Name</strong> :<a href="./user.html?user_id=${name.id}"> (${name.name }</a>) rastas`

                outputWrapper.append(outputTextWrapper)
            }
        })
        emails.map((email) => {
            if (emails.length > 0) {
                let outputTextWrapper = document.createElement("div")

                outputTextWrapper.innerHTML = `<strong>Email</strong> :<a href="./user.html?user_id=${email.id}">  (${email.email }</a>) rastas`
                outputWrapper.append(outputTextWrapper)
            }
        })
        postsTitle.map((title) => {

            if (postsTitle.length > 0) {
                let outputTextWrapper = document.createElement("div")

                outputTextWrapper.innerHTML = `<strong>Post title</strong> :<a href="./post.html?post_id=${title.id} "> (${title.title }</a>) rastas`

                outputWrapper.append(outputTextWrapper)
            }
        })
        albumsTitle.map((title) => {

            if (albumsTitle.length > 0) {
                let outputTextWrapper = document.createElement("div")

                outputTextWrapper.innerHTML = `<strong>Albums title</strong> <a href="./posts.html?post_id=${title.id} "> : (${title.title }</a>) rastas`
                outputWrapper.append(outputTextWrapper)
                    // console.log(title)
            }

        })


        // if (usernames.length) {
        if (!usernames.length && !names.length && !emails.length && !postsTitle.length && !albumsTitle.length) {

            outputTextWrapper.innerHTML = `<strong>Tokių duomenų nerasta, bandykite dar kartą</strong>`
        }



    })
}