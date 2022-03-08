import React from 'react'
import moment from 'moment'
import Link from 'next/link'

function PostCard({post}) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>

      </div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard