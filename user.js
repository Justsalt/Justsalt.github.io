let queryParams = document.location.search
let urlParamas = new URLSearchParams(queryParams)
let userId = urlParamas.get("user_id")







let userInfo = document.querySelector("#info-user")
let userInfoItems = document.createElement("div")
let userAlbums = document.querySelector("#user-albums");




fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((oneUser) => {
        let user = oneUser
            // console.log(user)
            //regual adress
        console.log(user)

        userInfoItems.innerHTML = `<br>`
        userInfoItems.classList.add("user-info-items")

        let adressUserExtract = user.address

        let userName = document.createElement("div")
        userName.innerHTML = ` Name : ${user.name}`
        let userUsername = document.createElement("div")
        userUsername.innerHTML = `Username :${user.username}`
        let userEmail = document.createElement("div")
        userEmail.innerHTML = `Email : ${user.email}`


        //adress Elements
        let userWrapper = document.createElement("div")

        //
        let adressGoogleMaps = document.createElement("a")
        adressGoogleMaps.innerHTML = `<a href="https://maps.google.com/?q=${adressUserExtract.street}, ${adressUserExtract.city},${adressUserExtract.zipcode}" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">Adress</a>`
        adressGoogleMaps.classList.add("google-maps")




        let userUlorder = document.createElement("ul")
        let userLiOrderStreet = document.createElement("li")
        userLiOrderStreet.innerHTML = `Street: ${adressUserExtract.street}`
        let userLiOrderSuite = document.createElement("li")
        userLiOrderSuite.innerHTML = `Suite: ${adressUserExtract.suite}`
        let useuserLiOrderCity = document.createElement("li")
        useuserLiOrderCity.innerHTML = `City: ${adressUserExtract.city}`
        let useuserLiOrderZipcode = document.createElement("li")
        useuserLiOrderZipcode.innerHTML = `zipcode: ${adressUserExtract.zipcode}`

        //resume for regular adress 
        let userPhone = document.createElement("div")
        userPhone.innerHTML = `Phone : ${user.phone}`
        let userWebsite = document.createElement("a")
        userWebsite.innerHTML = `${user.website} `
        userWebsite.href = `${user.website}`
        let userCompanyName = document.createElement("div")
        userCompanyName.innerHTML = `Company Name : ${user.company.name}`



        //ul/li sarasas
        userUlorder.append(userLiOrderStreet, userLiOrderSuite, useuserLiOrderCity, useuserLiOrderZipcode)
        userWrapper.append(adressGoogleMaps, userUlorder)
            /// ul/li uzsidaro

        // bendras sasarasas
        userInfoItems.append(userName, userUsername, userEmail, userWrapper, userPhone, userWebsite, userCompanyName)
        userInfo.append(userInfoItems)

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then((res) => res.json())
            .then((postData) => {
                let postWrapper = document.querySelector("#post-wrapper")
                let postTitle = document.createElement("h3")
                postTitle.classList = "post-title"
                postTitle.textContent = "User Post"
                postWrapper.append(postTitle)

                postData.map((post) => {

                    // console.log(post)
                    let postItem = document.createElement("div")
                    postItem.classList.add("post-item")
                    postItem.innerHTML = `<h4>${post.title}</h4>
                                          <p>${post.body}<p>
                                          <a href="post.html?post_id=${post.id}">Read More<a/>`
                    postWrapper.prepend(postItem)
                })

            })
    })
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then((res) => res.json())
    .then((albums) => {
        // let userAlbums = document.querySelector("#user-albums");

        userAlbums.innerHTML = `<h3 class="user-album-title">User Albums</h3>`

        let albumList = document.createElement("ul")
        albumList.classList.add("album-list")

        userAlbums.append(albumList)
        albums.map((album) => {
            let albumItem = document.createElement("li")
            albumItem.classList.add("album-item")
                // console.log(album)
            console.log(album.userId)
            albumItem.innerHTML = `<a href="./album.html?album_userId=${album.userId}&album_title=${album.title}&album_Id=${album.id}">${album.title}</a>`
            albumList.prepend(albumItem)
        })
    })