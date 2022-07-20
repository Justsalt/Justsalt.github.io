export default async function fetchRenderComments() {

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user&_limit=10`)
    let userComments = await res.json()

    return userComments
}
// data.map((users) => {


export async function albumInfoUser() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=10`)
    let albumsData = await res.json()
    return albumsData
}