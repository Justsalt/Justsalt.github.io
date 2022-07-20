import { init2 } from "../navBar.js";
import { getPhotosAlbumsId } from "./controllFetch.js"
import { albumView } from "./albumViewControlelr.js"




async function init() {
    init2()
    let albums = await getPhotosAlbumsId()
    albumView(albums)

}
init()


//bootsta3