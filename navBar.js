// let navBarWrapper = document.querySelector("#nav-bar-wrapper")

let pathName = document.location.pathname

let links = ["/jsonplaceholder.html", "/users.html", "/albums.html", "/posts.html", "/search.html"]


let bodySelect = document.querySelector("body")
let navBarWrapper = document.createElement("div")
navBarWrapper.setAttribute("id", "nav-bar-wrapper")
let navBar = document.createElement("nav")
navBar.setAttribute("id", "nav-wrapper")
let searchFormInput = document.createElement("form")
searchFormInput.setAttribute("action", "search.html")
searchFormInput.setAttribute("id", "search-form")
let inputText = document.createElement("input")
inputText.setAttribute("type", "text")
inputText.setAttribute("id", "search-input")
let inputSubmitButton = document.createElement("button")
inputSubmitButton.setAttribute("value", "search")
inputSubmitButton.setAttribute("type", "submit")
inputSubmitButton.setAttribute("id", "search-button")
inputSubmitButton.textContent = "search" // ?? 





let mainUsersNavs = document.createElement("div")
mainUsersNavs.classList.add("main-home")
mainUsersNavs.innerHTML = `<a href="./jsonplaceholder.html">home</a>`
let mainUsers = document.createElement("div")
mainUsers.classList.add("main-users")
mainUsers.innerHTML = `<a class="user-href" href="./users.html">Users</a>`
let mainUsersAlbums = document.createElement("div")
mainUsersAlbums.classList.add("main-albums")
mainUsersAlbums.innerHTML = `<a href="./albums.html">albums</a>`
let mainUsersPosts = document.createElement("div")
mainUsersPosts.classList.add("main-posts")
mainUsersPosts.innerHTML = `<a href="./posts.html">Posts</a>`

console.log(mainUsersNavs)

let image = document.createElement("img")
image.classList.add("redit-image")
image.src = "https://play-lh.googleusercontent.com/nlptFyxNsb8J0g8ZLux6016kunduV4jCxIrOJ7EEy-IobSN1RCDXAJ6DTGP81z7rr5Zq"
image.style.height = `auto`
image.style.width = "40px"
image.onclick = function() {
    window.location.href = `./jsonplaceholder.html`
}


if (pathName == links[0]) {
    image.style.width = "60px"
}
if (pathName == links[1]) {
    mainUsers.firstChild.style.color = "red"
}
if (pathName == links[2]) {
    mainUsersAlbums.firstChild.style.color = "red"
}
if (pathName == links[3]) {
    mainUsersPosts.firstChild.style.color = "red"
}
if (pathName == links[4]) {
    navBar.style.display = "none"

}



searchFormInput.addEventListener("submit", (event) => {
    event.preventDefault()
    window.location.href = `./search.html?search_value=${inputText.value}`;



})






searchFormInput.append(inputText, inputSubmitButton)
navBar.append(searchFormInput)
navBarWrapper.append(image, mainUsers, mainUsersAlbums, mainUsersPosts, navBar)
bodySelect.prepend(navBarWrapper)








// <div class="nav-bar-wrapper">
// <nav id="nav-bar-wrapper">
//     <form action="search.html" id="search-form">
//         <input type="text" name="text" id="search-input">
//         <input type="submit" value="search">
//     </form>
// </nav>
// </div>