import React from 'react'

export default function PostDetailsPage({params}) {
    console.log(params.id)
  return (
    <div>PostDetailsPage {params.id}</div>
  )
}
