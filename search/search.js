//vardai
import { init2 } from "../navBar.js";

init2()


let usernameDiv = document.createElement("div")
usernameDiv.classList.add("username")
let usernameTitlte = document.createElement("div")
usernameTitlte.textContent = "Usernames"
usernameDiv.prepend(usernameTitlte)

let nameDiv = document.createElement("div")
nameDiv.classList.add("user-names")
let nameTitlte = document.createElement("div")
nameTitlte.textContent = "Names"
nameDiv.prepend(nameTitlte)


let emailDiv = document.createElement("div")
emailDiv.classList.add("user-email")
let emailTitlte = document.createElement("div")
emailTitlte.textContent = "Emails:"
emailDiv.prepend(emailTitlte)


let postsDiv = document.createElement("div")
postsDiv.classList.add("user-posts")
let postsTitleDiv = document.createElement("div")
postsTitleDiv.textContent = "Posts title:"
postsDiv.prepend(postsTitleDiv)

let albumsDiv = document.createElement("div")
albumsDiv.classList.add("user-albums")
let albumsTitleDiv = document.createElement("div")
albumsTitleDiv.textContent = "Albums title:"
albumsDiv.prepend(albumsTitleDiv)




let searchForm = document.createElement("form")
let inputSearchTrasnfer = document.createElement("input")
inputSearchTrasnfer.setAttribute("type", "text")

let inputButtonTrasnfer = document.createElement("input")
inputButtonTrasnfer.setAttribute("type", "submit")


let outputWrapper = document.querySelector("#output-wrapper")
let searchOutput = document.querySelector("#search-output")
searchOutput.append(searchForm)
searchForm.append(inputSearchTrasnfer, inputButtonTrasnfer)

function init() {
    function eventListener() {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault()
            outputWrapper.textContent = ""
            let urlLinkEnd = "_like="
            searchWrapper(inputSearchTrasnfer.value, urlLinkEnd)
        })
    }
    eventListener()

    function urlParams() {
        let queryParams = document.location.search
        let urlParamas = new URLSearchParams(queryParams)
        let searchValue = urlParamas.get("search_value")
        let urlLinkEnd = "="

        searchWrapper(searchValue, urlLinkEnd)
    }
    urlParams()

    function searchWrapper(searchValue, urlEnd) {
        console.log(searchValue)
        let usernameSearch = fetch(`https://jsonplaceholder.typicode.com/users?username${urlEnd}${searchValue}`)
        let nameSearch = fetch(`https://jsonplaceholder.typicode.com/users?name${urlEnd}${searchValue}`)
        let emailSearch = fetch(`https://jsonplaceholder.typicode.com/users?email${urlEnd}${searchValue}`)
        let postsTitleSearch = fetch(`https://jsonplaceholder.typicode.com/posts?title${urlEnd}${searchValue}`)
        let albumTitleSearch = fetch(`https://jsonplaceholder.typicode.com/albums?title${urlEnd}${searchValue}`)

        console.log(usernameSearch)
        console.log(nameSearch)

        Promise.all([usernameSearch, nameSearch, emailSearch, postsTitleSearch, albumTitleSearch]).then((values) => {
            return Promise.all(values.map((value) => {
                return value.json()




            }))

        }).then(([usernames, names, emails, postsTitle, albumsTitle]) => {



            let searchingValue = document.createElement("div")
            searchingValue.classList.add("searching-value")
            searchingValue.innerHTML = `Ieškomas Žodis  (${searchValue})`
            outputWrapper.append(searchingValue)


            function outputSeach(data) {
                // console.log(data.lengthName)

                let { lengthName, url, id, name, appendX } = data
                // console.log(data)
                console.log(url)

                if (lengthName.length > 0) {
                    let outputTextWrapper = document.createElement("div")

                    outputTextWrapper.innerHTML = `<a href="./${url}${id}">(${name}</a>) `
                    appendX.append(outputTextWrapper)
                    outputWrapper.append(appendX)

                }
            }




            usernames.map((username) => {
                outputSeach({
                    lengthName: usernames,
                    url: "user.html?user_id=",
                    id: username.id,
                    name: username.username,
                    appendX: usernameDiv
                })

            })

            names.map((name) => {
                outputSeach({
                    lengthName: names,
                    url: "user.html?user_id=",
                    id: name.id,
                    name: name.name,
                    appendX: nameDiv
                })



            })

            emails.map((email) => {


                outputSeach({
                    lengthName: emails,
                    url: "user.html?user_id=",
                    id: email.id,
                    name: email.email,
                    appendX: emailDiv
                })

            })

            postsTitle.map((title) => {

                outputSeach({
                    lengthName: postsTitle,
                    url: "post.html?post_id=",
                    id: title.id,
                    name: title.title,
                    appendX: postsDiv
                })


            })
            albumsTitle.map((title) => {

                outputSeach({
                    lengthName: albumsTitle,
                    url: "posts.html?post_id=",
                    id: title.id,
                    name: title.title,
                    appendX: albumsDiv
                })

            })


            if (!usernames.length && !names.length && !emails.length && !postsTitle.length && !albumsTitle.length) {
                let outputText = document.createElement("div")
                outputText.innerHTML = `<strong>Tokių duomenų nerasta, bandykite dar kartą</strong>`



                outputWrapper.append(outputText)
            }



        })
    }
}
init()