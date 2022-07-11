let navBarWrapper = document.querySelector("#nav-bar-wrapper")

let image = document.createElement("img")
image.classList.add("redit-image")
image.src = "https://play-lh.googleusercontent.com/nlptFyxNsb8J0g8ZLux6016kunduV4jCxIrOJ7EEy-IobSN1RCDXAJ6DTGP81z7rr5Zq"
image.style.height = `auto`
image.style.width = "40px"
image.onclick = function() {
    window.location.href = `./jsonplaceholder.html`
}



// let mainUsersNavs = document.createElement("div")
// mainUsersNavs.classList.add("main-home")
// mainUsersNavs.innerHTML = `<a href="./jsonplaceholder.html">home</a>`

let mainUsers = document.createElement("div")
mainUsers.classList.add("main-users")
mainUsers.innerHTML = `<a href="./users.html">Users</a>`
let mainUsersAlbums = document.createElement("div")
mainUsersAlbums.classList.add("main-albums")
mainUsersAlbums.innerHTML = `<a href="./albums.html">albums</a>`
let mainUsersPosts = document.createElement("div")
mainUsersPosts.classList.add("main-posts")
mainUsersPosts.innerHTML = `<a href="./posts.html">Posts</a>`



navBarWrapper.prepend(image, mainUsers, mainUsersAlbums, mainUsersPosts)


let searchForm = document.querySelector("#search-form")
let searchInput = document.querySelector("#search-input")
searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(searchInput)
    window.location.href = `./search.html?search_value=${event.target.elements.text.value}`;
    // console.dir(event.target.elements.text.value)




})

// let navBarWrapper = document.createElement("div")
// let 
// <div class="nav-bar-wrapper">
//         <nav id="nav-bar-wrapper">
//             <form action="search.html" id="search-form">
//                 <input type="text" name="text" id="search-input">
//                 <input type="submit" value="search">
//             </form>

//         </nav>