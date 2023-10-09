export default async function getUsers(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!res.ok) throw Error('fetch error')
    return res.json()
}
