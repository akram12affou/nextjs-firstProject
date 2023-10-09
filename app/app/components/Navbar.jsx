import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div> 
        <Link href='/users'>users</Link>
        {' | '}
        <Link href='/'>todos</Link>
    </div>
  )
}

export default Navbar