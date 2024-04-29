import React from 'react'
import PostNavLink from '@/Components/PostNavLink'
import { Link, usePage } from '@inertiajs/react';
import { Post } from '@/types';
import PostDetails from '@/Components/PostDetails';

interface Props {
  post: Post;
}

const ViewPost = ({ post }: Props) => {

  const { id, uuid, title, description, status, image, } = post


  return (
    <section className='bg-indigo-50 min-h-screen'>

      <PostNavLink />

      <div className='container m-auto py-24 max-w-7xl space-y-4'>
        <h1 className='font-bold text-black-500'>This is a Post Page</h1>

        <div className="flex justify-between items-center">
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">

              <span className="text-gray-500 mb-4 text-xs">Post id: {id}</span>

              {/* Image */}
              {/* <a href="#" className="">
                <img src={image} className='h-44 object-cover w-auto rounded mt-6' alt="" />
              </a> */}

              <div className='flex flex-col md:flex-row gap-6 items-center'>
                <div>
                  <a href="#" className="">
                    <img src={image} className='max-h-80 object-cover w-auto rounded' alt="" />
                  </a>
                </div>

                <div className='space-y-4'>
                  <PostDetails label='Title' value={post.title} />
                  <PostDetails label='Description' value={post.description} />
                  <PostDetails label='Status' value={post.status} />

                  <div className="flex items-center gap-2">

                    <Link
                      href={`/post/edit/${uuid}`}
                      className="h-[36px] bg-indigo-600 hover:bg-indigo-300 text-white px-4 py-2 rounded-lg text-center text-sm float-right mb-4 w-1/8"
                    >
                      Update Post
                    </Link>

                    <Link
                      href={`/post/delete/${uuid}`}
                      className="h-[36px] bg-red-600 hover:bg-red-300 text-white px-4 py-2 rounded-lg text-center text-sm float-right mb-4 w-1/8"
                    >
                      Delete Post
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ViewPost