import { firstLetterUppercase } from "../functions.js"

export function albumsViewWrapper(album, ulElement, albumsWrapper) {

    let albumAuthorsWrapper = document.createElement("div")
    albumAuthorsWrapper.classList.add("album-authors-wrapper")
    let liElementAlbum = document.createElement("li")
    liElementAlbum.classList.add("li-elementAlbum")
    liElementAlbum.innerHTML = ` <strong>   <a href="./album.html?album_Id=${album.id}&album_title=${album.title}&album_userId=${album.userId}">${firstLetterUppercase(album.title)}</a></strong>`
    liElementAlbum.classList.add("album-title")
    let liElementAuthor = document.createElement("li")
    liElementAuthor.classList.add("liElementAuthor")
    liElementAuthor.innerHTML = `<strong>Author:</strong><a href="./user.html?user_id=${album.user.id}">${album.user.name}</>`
    let liElementNumber = document.createElement("li")
    liElementNumber.classList.add("liElementNumber")
    liElementNumber.innerHTML = `<strong>Number of photos:</strong> ${album.photos.length}`
    let liElementImg = document.createElement("img")
    liElementImg.classList.add("liElementImg")
    liElementImg.src = `${album.photos[0].thumbnailUrl}`
    albumAuthorsWrapper.append(liElementAlbum, liElementAuthor, liElementNumber, liElementImg)
    ulElement.append(albumAuthorsWrapper)
    albumsWrapper.append(ulElement)
}