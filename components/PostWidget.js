import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug).then(res => {
        setRelatedPosts(res)
      })
    } else {
      getRecentPosts().then(res => {
        setRelatedPosts(res)
      })
    }
  }, [slug])

  console.log(relatedPosts)
  
  return (
    <div>PostWidget</div>
  )
}

export default PostWidget