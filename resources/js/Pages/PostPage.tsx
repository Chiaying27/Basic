import PostCard from '@/Components/PostCard'
import PostNavLink from '@/Components/PostNavLink'
import { Post } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import { log } from 'console'
import React from 'react'

const PostPage = () => {

  const { posts } = usePage<{ posts: Post[] }>().props;

  return (
    <section className='bg-indigo-50 min-h-screen'>

      <PostNavLink />

      <div className='container m-auto py-24 max-w-4xl space-y-4'>
        <div className="flex justify-between items-center">
          <h1 className='font-bold text-black-500'>This is a Post Page</h1>

          <Link
            href={route('create_post')}
            className='rounded-md px-4 py-2 mr-2 text-white bg-indigo-500 transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white'>
            Add Posts
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Call the PostCard.tsx */
            /* First row */
          }
          {/* <PostCard image='/assets/crypto-1.jpg' />
          <PostCard image='/assets/crypto-2.jpg' />
          <PostCard image='/assets/crypto-3.jpg' /> */}

          {/* Call the PostCard.tsx */
            /* Second row */
          }
          {/* <PostCard image='/assets/crypto-1.jpg' />
          <PostCard image='/assets/crypto-2.jpg' />
          <PostCard image='/assets/crypto-3.jpg' /> */}
          {
            posts.map((postObject, index) => (
              <PostCard key={index} post={postObject} />
            ))
          }

        </div>


      </div>

    </section>

  )
}

export default PostPage