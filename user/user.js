let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
let userId = urlParamas.get("user_id")
import { firstLetterUppercase } from "../functions.js"
import { init2 } from "../navBar.js";
init2()

function init() {


    fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
        .then((res) => res.json())
        .then((oneUser) => {
            let userInfo = document.querySelector("#info-user")

            let userInfoItems = document.createElement("div")
            userInfoItems.classList.add("user-info-items")

            let userAlbums = document.querySelector("#user-albums");

            let userAlbumsTitle = document.createElement("div")
            userAlbumsTitle.innerHTML = `<h3 class="user-album-title">User Albums</h3>`
            userAlbumsTitle.classList.add("user-albums-title")
            userAlbums.prepend(userAlbumsTitle)


            let userName = document.createElement("div")
            userName.innerHTML = ` Name : ${oneUser.name}`

            let userUsername = document.createElement("div")
            userUsername.innerHTML = `Username :${oneUser.username}`

            let userEmail = document.createElement("div")
            userEmail.innerHTML = `Email :<a href="mailto:${oneUser.email}">${oneUser.email}</a>`


            //adress Elements
            let userWrapper = document.createElement("div")
            let adressGoogleMaps = document.createElement("a")
            adressGoogleMaps.innerHTML = `<a href="https://maps.google.com/?q=${oneUser.address.geo.lat},${oneUser.address.geo.lng}" target="_blank">Adress</a>`
            adressGoogleMaps.classList.add("google-maps")




            let userUlorder = document.createElement("ul")
            let userLiOrderStreet = document.createElement("li")
            userLiOrderStreet.classList.add("address-item")
            userLiOrderStreet.innerHTML = `Street: ${oneUser.address.street}`
            let userLiOrderSuite = document.createElement("li")
            userLiOrderSuite.classList.add("address-item")
            userLiOrderSuite.innerHTML = `Suite: ${oneUser.address.suite}`
            let useuserLiOrderCity = document.createElement("li")
            useuserLiOrderCity.classList.add("address-item")
            useuserLiOrderCity.innerHTML = `City: ${oneUser.address.city}`
            let useuserLiOrderZipcode = document.createElement("li")
            useuserLiOrderZipcode.classList.add("address-item")
            useuserLiOrderZipcode.innerHTML = `zipcode: ${oneUser.address.zipcode}`

            //resume for regular adress 
            let userPhone = document.createElement("div")
            userPhone.innerHTML = `Phone :<a href="tel:${oneUser.phone}"> ${oneUser.phone}</a>`
            let userWebsite = document.createElement("a")
            userWebsite.innerHTML = `${oneUser.website} `
            userWebsite.href = `${oneUser.website}`
            let userCompanyName = document.createElement("div")
            userCompanyName.innerHTML = `Company Name : ${oneUser.company.name}`



            //ul/li sarasas
            userUlorder.append(userLiOrderStreet, userLiOrderSuite, useuserLiOrderCity, useuserLiOrderZipcode)
            userWrapper.append(adressGoogleMaps, userUlorder)
                /// ul/li uzsidaro
            userInfoItems.append(userName, userUsername, userEmail, userWrapper, userPhone, userWebsite, userCompanyName)
            userInfo.append(userInfoItems)

            // bendras sasarasas


            let postWrapper = document.querySelector("#post-wrapper")
            let postTitle = document.createElement("h3")

            postWrapper.append(postTitle)

            oneUser.posts.map((post) => {

                // console.log(post)
                let postItem = document.createElement("div")
                let postSeperate = document.createElement("div")
                postSeperate.classList.add("post-seperate")
                postItem.classList.add("post-item")
                postItem.innerHTML = `<h4>${firstLetterUppercase(post.title)}</h4>
            <p>${post.body}<p>
            <a href="post.html?post_id=${post.id}">Read More<a/>`
                postSeperate.append(postItem)
                postWrapper.prepend(postSeperate)
            })


            let albumList = document.createElement("ul")
            albumList.classList.add("album-list")
            userAlbums.append(albumList)

            oneUser.albums.map((album) => {
                let albumItem = document.createElement("li")
                albumItem.classList.add("album-item")

                albumItem.innerHTML = `<a href="./album.html?album_userId=${album.userId}&album_title=${album.title}&album_Id=${album.id}">${firstLetterUppercase(album.title)}</a>`
                albumList.prepend(albumItem)
            })
        })
}
init()