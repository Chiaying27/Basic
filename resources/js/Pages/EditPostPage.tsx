import PostNavLink from '@/Components/PostNavLink'
import { Post } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react'
import React, { FormEvent } from 'react'

const EditPostPage = () => {
    const { post: post_object } = usePage<{ post: Post }>().props;
    const { id, uuid, title, description, status, image, created_at, updated_at } = post_object;


    //declare variable
    const { data, setData, post, put, processing, errors } = useForm({
        title,
        description,
        status,
        image,
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        put(`/post/update/${uuid}`)
    }

    return (
        <section className='bg-indigo-50 min-h-screen'>
            <PostNavLink />
            <div className='container m-auto py-24 max-w-4xl space-y-4'>
                <h1 className='font-bold'>Edit Post</h1>

                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="status" className="block text-gray-700 font-medium text-sm">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            className="border rounded w-full py-2 px-3"
                            required
                            value={data.status}
                            onChange={(e) => setData('status', parseInt(e.target.value))}
                        >
                            <option value=""></option>
                            <option value={0}>Inactive</option>
                            <option value={1}>Active</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="status" className="block text-gray-700 font-medium text-sm">
                            Upload Image
                            <input type="file" onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)} name="image" className='flex' />
                        </label>
                    </div>

                    <div className="mb-4">
                        <button className="bg-indigo-500 hover:bg-indigo-200 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type="submit">
                            Update Post
                        </button>
                    </div>

                </form>

            </div>

        </section>
    )
}

export default EditPostPage