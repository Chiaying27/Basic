import PostNavLink from '@/Components/PostNavLink'
import { Post } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'


const EditPostPage = () => {
    const { post: post_object } = usePage<{ post: Post }>().props;
    const { uuid, title, description, status, image } = post_object;
    const [previewImage, setPreviewImage] = useState<string>(image);

    //declare variable
    const { data, setData, post, processing, errors } = useForm<{
        title: string,
        description: string,
        status: number,
        image: null | File
    }>({
        title,
        description,
        status,
        image: null,
    })

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        console.log(files);

        // Check if a file is selected
        if (files && files?.length > 0) {
            // Read the file content
            const reader = new FileReader();
            reader.onloadend = () => {
                // Update the data state with the new image source
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(files[0]); // Convert file to data URL
            setData('image', files[0]);
        } else {
            // If no file is selected, reset the image to an empty string
            // setData('image', '');
            setPreviewImage('');
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        post(route('update_post', uuid), {
            onSuccess: () => {
                alert('Succeed!');
            }
        })
    }

    return (
        <section className='bg-indigo-50 min-h-screen'>
            <PostNavLink />
            <div className='container m-auto py-24 max-w-4xl space-y-4'>
                <h1 className='font-bold'>Edit Post</h1>

                <div className="bg-white p-6 rounded-lg shadow-md  md:text-lef">

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
                            <label htmlFor="image" className="block text-gray-700 font-medium text-sm">Image</label>
                            <img src={previewImage}
                                className='max-h-80 object-cover w-auto rounded mb-2'></img>
                            <label htmlFor="status" className="block text-gray-700 font-medium text-sm">
                                Upload Image
                                {/* <input type="file" onChange={(e) => setData('image', (e.target.files && e.target.files.length > 0) ? e.target.files[0] : null)} name="image" className='flex' /> */}
                                <input type="file" onChange={handleImageChange} name="image" className='flex' />
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
            </div>

        </section>
    )
}

export default EditPostPage