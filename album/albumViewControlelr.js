import { firstLetterUppercase } from "../functions.js"
export function albumView(albums) {
    let albumPhotoWrapper = document.createElement("div")
    albumPhotoWrapper.classList.add("album-photo-wrapper")
    let albumTitle = document.createElement("h2")
    albumTitle.classList.add("album-title")
    albumTitle.innerHTML = `Title:${firstLetterUppercase(albums.title)}`
    let userName = document.createElement("h2")
    userName.classList.add("user-name")
    userName.innerHTML = `Name:<a href="./user.html?user_id=${albums.user.id}">${albums.user.name}</a>`



    albums.photos.map((photos, idx) => {
        let carouselItemActive = document.createElement("div")
        carouselItemActive.setAttribute("class", `carousel-item ${idx === 0 ?" active" : ""}`)
        let blockImg = document.createElement("img")
        blockImg.setAttribute("class", "d-block w-100")
        blockImg.src = `${photos.thumbnailUrl}`
        let carouselIner = document.querySelector(".carousel-inner")
        carouselItemActive.append(blockImg)
        carouselIner.append(carouselItemActive)


    })


}