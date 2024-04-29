import { Link, usePage } from '@inertiajs/react'
import { url } from 'inspector'
import React from 'react'
import NavLink from './NavLink'

const PostNavLink = () => {

    const { url, component } = usePage()

    return (
        <nav className="flex justify-between items-center bg-indigo-700 p-4">
            <Link className="flex flex-shrink-0 items-center mr-4" href="/">
                <img
                    className="h-12 w-auto"
                    src="/assets/logo.png"
                    alt="Crypto Post"
                />
            </Link>
            <div className="div">
                <Link
                    href={route('post')}
                    className={`${url === "/post" ? 'bg-indigo-300' : 'bg-red-400'} rounded-md px-4 py-2 mr-2 text-white transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white`}>
                    Posts
                </Link>

                <Link
                    href={route('create_post')}
                    className={`${url.startsWith("/post/create") ? 'bg-indigo-300' : 'bg-red-400'} rounded-md px-4 py-2 mr-2 text-white transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white`}>
                    Add Posts
                </Link>

            </div>

        </nav>
    )
}

export default PostNavLink