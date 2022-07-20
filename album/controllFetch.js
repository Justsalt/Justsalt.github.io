export { getPhotosAlbumsId }


async function getPhotosAlbumsId() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums/2?_embed=photos&_expand=user`)
    let albums = await res.json()
    return albums
}