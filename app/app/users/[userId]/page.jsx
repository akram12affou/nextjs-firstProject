import React from 'react'
import getUsersPosts from '../../../lib/getUsersPosts'
async function page({
   params : {
    userId
   }
}) {
    const posts = await getUsersPosts(userId)
  return (
    <div>
        {
            posts.map((e) => {
                return(
                    <>
                    {e.title}
                    </>
                )
            })
        }
    </div>
  )
}

export default page