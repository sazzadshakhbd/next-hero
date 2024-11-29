import {getPosts} from '@/services/postApi'
import Link from 'next/link';
import React from 'react'



const page =  async () => {
  const postData = await getPosts();
  console.log(postData)
  return (
    <div>
      <h1 className='text-center text-teal-500 font-bold m-5'>All Posts</h1>
      <div className='grid grid-cols-4 p-6'>
        {
          postData.slice(0,20).map(({id, title, body})=> 
          <div className='border-2 p-5 m-3'>
            <h3 className='text-red-400'>{id} Title: {title}</h3>
            <p>{body}</p>
            <button className='bg-red-400 p-3 my-2 text-white'><Link href={`/posts/${id}`}>View Details</Link></button>
          </div>
          )}
      </div>
    </div>
  )
}


export default page;