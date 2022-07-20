 export { init2 }


 function init2() {

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
     inputText.setAttribute("required", "")
     let inputSubmitButton = document.createElement("button")
     inputSubmitButton.setAttribute("value", "search")
     inputSubmitButton.setAttribute("type", "submit")
     inputSubmitButton.setAttribute("id", "search-button")
     inputSubmitButton.textContent = "search" // ??




     //select option


     let selectWrapper = document.createElement("select")
     let optionInputName = document.createElement("option")
     optionInputName.setAttribute("value", "username")
     optionInputName.textContent = "username"


     let optionInputAlbums = document.createElement("option")
     optionInputAlbums.setAttribute("value", "name")
     optionInputAlbums.textContent = "Name"

     let optionInputPosts = document.createElement("option")
     optionInputPosts.setAttribute("value", "Posts")
     optionInputPosts.textContent = "Posts"
     selectWrapper.append(optionInputName, optionInputAlbums, optionInputPosts)






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
         window.location.href = `./search.html?search_value=${inputText.value}&select_value=${selectWrapper.value}`;

         console.dir(event)


     })






     searchFormInput.append(inputText, selectWrapper, inputSubmitButton)
     navBar.append(searchFormInput)
     navBarWrapper.append(image, mainUsers, mainUsersAlbums, mainUsersPosts, navBar)
     bodySelect.prepend(navBarWrapper)

 }