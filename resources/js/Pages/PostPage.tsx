import PostCard from '@/Components/PostCard'
import PostNavLink from '@/Components/PostNavLink'
import Spinner from '@/Components/Spinner'
import { Post } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import { log } from 'console'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const PostPage = () => {

  const { posts } = usePage<{ posts: Post[] }>().props;
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);


  // Filter posts based on the keyword
  const filteredPosts = posts.filter(post =>
    post.id.toString().toLowerCase().includes(keyword.toLowerCase()) ||
    post.title.toLowerCase().includes(keyword.toLowerCase()) ||
    post.description.toLowerCase().includes(keyword.toLowerCase()) ||
    post.status.toString().toLowerCase().includes(keyword.toLowerCase())
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  }, []);


  return (
    <section className='bg-indigo-50 min-h-screen'>

      <PostNavLink />

      <div className='container m-auto py-24 max-w-4xl space-y-4'>
        <div className="flex justify-between items-center">
          <h1 className='font-bold text-black-500'>This is a Post Page</h1>

          {/* <Link
            href={route('create_post')}
            className='rounded-md px-4 py-2 mr-2 text-white bg-indigo-500 transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white'>
            Add Posts
          </Link> */}

          <div className='flex justify-end items-center gap-1'>
            <label htmlFor="search" className='hidden'>Search</label>
            <input id="search"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Search...'
              className='ml-2 px-2 py-1 text-sm rounded border' />
            <FaSearch />
          </div>

        </div>

        {loading ? (
          <Spinner loading={true} />
        
        ) : (

          //Call the PostCard listed in array
          < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              filteredPosts.map((postObject, index) => (
                <PostCard key={index} post={postObject} />
              ))
            }

          </div>
        )}

      </div>

    </section >
  )

}

export default PostPage