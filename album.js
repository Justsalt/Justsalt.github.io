// <!-- 6. Sukurti naują puslapį album.html ir jame atvaizduoti:
// 6.1. Albumo pavadinimą.
// 6.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
// 6.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//   6.3.1. https://photoswipe.com/
//   6.3.2. https://nanogallery2.nanostudio.org/
//   6.3.3. https://sachinchoolur.github.io/lightgallery.js/
//   6.3.4. Arba bet kurią kitą. -->


let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
albumIdGet = urlParamas.get('album_Id')
albumTitleGet = urlParamas.get('album_title')
userIdGet = urlParamas.get('album_userId')




let albumWrapper = document.querySelector("#album-wrapper")

let mainUsersNav = document.createElement("div")
mainUsersNav.innerHTML = `<a href="./jsonplaceholder.html">Home page</a>`
albumWrapper.append(mainUsersNav)

// console.log(albumIdGet)



fetch(`https://jsonplaceholder.typicode.com/users/${userIdGet}`)
    .then(res => res.json())
    .then((usersName) => {

        let albumPhotoWrapper = document.createElement("div")
        albumPhotoWrapper.classList.add("album-photo-wrapper")
        let albumTitle = document.createElement("h2")
        albumTitle.classList.add("album-title")
        albumTitle.innerHTML = `Title:${albumTitleGet}`



        let userName = document.createElement("h2")
        userName.classList.add("user-name")
        userName.innerHTML = `Name:<a href="./user.html?user_id=${userIdGet}">${usersName.name}</a>`



        fetch(`https://jsonplaceholder.typicode.com/albums/${albumIdGet}/photos/`)
            .then(res => res.json())
            .then((photos) => {
                photos.map((photo) => {
                    console.log(photo.length)

                    let albumPhoto = document.createElement("img")
                        // albumPhoto.setAttribute(
                    albumPhoto.src = `${photo.thumbnailUrl}`
                    albumPhoto.setAttribute("alt", photo.title)
                    albumPhoto.classList.add("album-image")
                    albumPhotoWrapper.append(albumPhoto)
                    albumWrapper.append(albumTitle, userName, albumPhotoWrapper)
                })
            })


    })




// fetch(`https://jsonplaceholder.typicode.com/albums`)
//     .then(res => res.json())
//     .then((albums) => {
//         console.log(albums)
//     })