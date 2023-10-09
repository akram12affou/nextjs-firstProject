export default async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if(!res.ok) throw Error('fetch error')
    
     return res.json()
}
