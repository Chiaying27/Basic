import { Post } from '@/types';
import { Link } from '@inertiajs/react';
import React from 'react'

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {

    const { id, uuid, title, description, status, image, } = post

    return (
        <div className='bg-white rounded-xl shadow-md relative'>
            <div className='p-4'>
                <div className='mb-6 m-auto'>

                    {/* Image */}
                    <a href="#" className="">
                        <img src={image} className='h-44 w-full object-cover rounded-lg' alt="" />
                    </a>

                    {/* Post ID */}
                    <div className='text-gray-600 font-bold my-2'>
                        Post ID: {id}
                    </div>

                    {/* Post Title */}
                    <div className='text-gray-600 font-bold my-2'>
                        Post Title:
                        <p className="line-clamp-1">{title}</p>
                    </div>

                    {/* Post Description */}
                    <div className='text-gray-600 font-bold my-2 min-h-24'>
                        Post Description: 
                        <p className='line-clamp-3'>{description}</p>
                    </div>

                    {/* Post Status */}
                    <div className='text-gray-600 font-bold my-2'>
                        Post Status: {status}
                    </div>

                    <Link
                        href={`/post/view/${uuid}`}
                        className="h-[36px] bg-blue-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm float-right mb-4"
                    >
                        View Post
                    </Link>


                </div>
            </div>

        </div>
    )
}

export default PostCard