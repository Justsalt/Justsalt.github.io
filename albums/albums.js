import { init2 } from "../navBar.js";
import { albumsViewWrapper } from "./albumsView.js"
init2()


function init() {


    let albumsWrapper = document.querySelector("#albums-wrapper")
    let ulElement = document.createElement("ul")
    ulElement.classList.add("ul-element")


    fetch(`https://jsonplaceholder.typicode.com/albums?_limit=15&_expand=user&_embed=photos`)
        .then(res => res.json())
        .then((albums) => {
            albums.map((album) => {


                //PAVADINIMAS ALBUMO


                albumsViewWrapper(album, ulElement, albumsWrapper)
            })
        })
}
init()