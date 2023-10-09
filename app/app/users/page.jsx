import React from 'react'
import Link from 'next/link';
import getUsers from '../../lib/getUsers'
import getTodos from '../../lib/getTodos'
async function Users() {
  const [user , todos] =  await Promise.all(
  [  getUsers() , getTodos()]
  )
    // const user = await getUsers();
    // const todos = await getTodos()
  return (
    <div>
        {user.map(e => {
            return(
              <>
              <Link href={`/users/${e.id}`}>
              {e.name}
              </Link>
              <br />
              </>
            )
        })}
        <hr />
        {todos.map(e => {
            return(
              <>
              <Link href={`/users/${e.id}`}>
              {e.title}
              </Link>
              <br />
              <hr />
              </>
            )
        })}
    </div>
  )
}

export default Users