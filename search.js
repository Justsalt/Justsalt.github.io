let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
let searchValue = urlParamas.get("search_value").toLocaleLowerCase()
console.log(searchValue)




let outputWrapper = document.querySelector("#output-wrapper")


let outputTextWrapper = document.createElement("div")


outputWrapper.append(outputTextWrapper)

let usernameSearch = fetch(`https://jsonplaceholder.typicode.com/users?username_like=${searchValue}`)
let nameSearch = fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchValue}`)
let emailSearch = fetch(`https://jsonplaceholder.typicode.com/users?email_like=${searchValue}`)
let postsTitleSearch = fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${searchValue}`)
let albumTitleSearch = fetch(`https://jsonplaceholder.typicode.com/albums?title_like=${searchValue}`)

Promise.all([usernameSearch, nameSearch, emailSearch, postsTitleSearch, albumTitleSearch]).then((values) => {
    return Promise.all(values.map((value) => {
        return value.json()

    }))
}).then(([usernames, names, emails, postsTitle, albumsTitle]) => {


    if ((usernames.length || names.length || emails.length || postsTitle.length || albumsTitle.length) && searchValue.length > 0) {
        usernames.map((username) => {
            let searchingValue = document.createElement("div")
            searchingValue.classList.add("searching-value")
            searchingValue.innerHTML = `Ieskomas Zodis  ( ${searchValue})`
            outputWrapper.prepend(searchingValue)

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
                outputTextWrapper.innerHTML = `<strong>Albums title title</strong> <a href="./posts.html?post_id=${title.id} "> : (${title.title }) rastas`
                outputWrapper.append(outputTextWrapper)
                console.log(title)
            }

        })
    } else {
        let searchingValue = document.createElement("div")
        searchingValue.classList.add("searching-value")
        searchingValue.innerHTML = `Ieskomas Zodis  ( ${searchValue})`
        outputWrapper.prepend(searchingValue)

        outputTextWrapper.innerHTML = `<strong>Tokių duomenų nerasta, bandykite dar kartą</strong>`

    }


    // (albumsTitle.length == 0) {
    //     console.log("niekas nerasta")
    // }

    // sunt aut facere repellat provident occaecati excepturi optio reprehenderit
    // if (username.name)
})