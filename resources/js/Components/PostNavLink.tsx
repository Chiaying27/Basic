import { Link, usePage } from '@inertiajs/react'
import { url } from 'inspector'
import React from 'react'

const PostNavLink = () => {

    const { url, component } = usePage()

    return (
        <nav className="flex flex-1 justify-end bg-indigo-700 px-4 py-4">
            <>
                <Link
                    href={route('post')}
                    className={`${url==="/post" ? 'bg-indigo-300' : 'bg-red-400'} rounded-md px-4 py-2 mr-2 text-white transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white`}>
                    Posts
                </Link>

                <Link
                    href={route('create_post')}
                    className={`${url.startsWith("/post/create") ? 'bg-indigo-300' : 'bg-red-400'} rounded-md px-4 py-2 mr-2 text-white transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white`}>
                    Add Posts
                </Link>


            </>
        </nav>
    )
}

export default PostNavLink