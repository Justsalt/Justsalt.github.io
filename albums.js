// 9. Tokiu pačiu principu, kaip ir vartotojų puslapį, sukurti puslapį albumams (albums.html).
// 9.1. Prie kiekvieno albumo turi būti:
//   9.1.1. Parašytas jo pavadinimas.
//   9.1.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   9.1.3. Albume esančių nuotraukų skaičius.
//   9.1.4. Viena nuotrauka

let albumsWrapper = document.querySelector("#albums-wrapper")

let ulElement = document.createElement("ul")
ulElement.classList.add("ul-element")





fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then((albums) => {
        albums.map((album) => {
            //SUKURTO ALBUMO AUTORIUS
            // console.log(album.userId)
            fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
                .then(res => res.json())
                .then((user) => {
                    // console.log(album)


                    //albume esanciu nuotrauku skaicius
                    fetch(`https://jsonplaceholder.typicode.com/albums/${album.userId}/photos`)
                        .then(res => res.json())
                        .then((albumPhotoCount) => {

                            // console.log(albumPhotoCount[0].thumbnailUrl)



                            // let randomIndex = Math.floor(Math.random( 1 * albumPhotoCount.length))
                            //PAVADINIMAS ALBUMO
                            let albumAuthorsWrapper = document.createElement("div")
                            albumAuthorsWrapper.classList.add("album-authors-wrapper")


                            let liElementAlbum = document.createElement("li")
                            liElementAlbum.classList.add("li-elementAlbum")
                            liElementAlbum.innerHTML = ` <strong>   <a href="./album.html?album_Id=${album.id}&album_title=${album.title}&album_userId=${album.userId}">${album.title}</a></strong>`
                            liElementAlbum.classList.add("album-title")



                            let liElementAuthor = document.createElement("li")
                            liElementAuthor.classList.add("liElementAuthor")
                            liElementAuthor.innerHTML = `<strong>Author:</strong><a href="./user.html?user_id=${album.userId}">${user.name}</>`

                            let liElementNumber = document.createElement("li")
                            liElementNumber.classList.add("liElementNumber")
                            liElementNumber.innerHTML = `<strong>Number of photos:</strong> ${albumPhotoCount.length}`

                            let liElementImg = document.createElement("img")
                            liElementImg.classList.add("liElementImg")
                            liElementImg.src = `${albumPhotoCount[0].thumbnailUrl}`



                            albumAuthorsWrapper.append(liElementAlbum, liElementAuthor, liElementNumber, liElementImg)
                            ulElement.append(albumAuthorsWrapper)
                            albumsWrapper.append(ulElement)
                        })
                })
        })
    })