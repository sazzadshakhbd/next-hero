import React from 'react'

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data
}

const page =  async () => {
  const postData = await getPosts();
  console.log(postData)
  return (
    <div>page</div>
  )
}


export default page;