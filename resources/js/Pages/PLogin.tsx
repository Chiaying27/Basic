import Alert from '@/Components/Alert';
import PostNavLink from '@/Components/PostNavLink'
import Spinner from '@/Components/Spinner'
import { Link, useForm, usePage } from '@inertiajs/react';
import React, { FormEvent, useEffect, useState } from 'react'

const PLogin = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false
    })

    const [loading, setLoading] = useState(true);

    const { flash } = usePage<{ flash: any }>().props;
    const [alertMessage, setAlertMessage] = useState('');

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        post(route('p_login_user'));

    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300)
    }, []);


    useEffect(() => {
        setAlertMessage(flash.message);
        setTimeout(() => {
            setAlertMessage('');
        }, 2000)
        console.log(flash);

    }, [flash]);

    return (
        <section className='bg-indigo-50 min-h-screen'>
            {alertMessage && <Alert message={alertMessage} />}

            <PostNavLink />

            {loading ? (
                <Spinner loading={true} />

            ) : (
                <div className='container m-auto py-24 max-w-4xl'>
                    <h1 className='font-bold text-black-500 text-center m-2'>This is a Login Page</h1>

                    <div className="flex items-center justify-center">
                        <div className='w-1/2 gap-6'>

                            <form onSubmit={handleLogin}>
                                <div className="bg-white p-6 rounded-lg shadow-md text-center h-auto md:text-left">
                                    <div className="flex flex-col">
                                        <div className="block mt-4">
                                            <label className='text-sm mt-2 text-gray-600'>Email:</label>
                                            <input type="email"
                                                onChange={e => setData('email', e.target.value)}
                                                className="w-full border rounded shadow-sm" />
                                            {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}                                            

                                        </div>

                                        <div className="block mt-4">

                                            <label className='text-sm mt-2 text-gray-600'>Password:</label>
                                            <input type="password"
                                                onChange={e => setData('password', e.target.value)}
                                                className="w-full border rounded shadow-sm" />
                                            {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}

                                        </div>

                                        <div className="block mt-4">

                                            <label htmlFor="flex items-center">
                                                <input type="checkbox"
                                                    checked={data.remember}
                                                    onChange={(e) => setData('remember', e.target.checked)}
                                                    className="rounded border" />
                                                <span className="ms-2 text-sm text-gray-600">Remember me</span>
                                            </label>
                                        </div>

                                        <div className="flex items-center justify-end gap-2 mt-4">
                                            <Link
                                                href={route('p_login')}
                                                className="bg-none hover:text-gray-900 text-gray-500 px-4 py-2 rounded-lg text-center text-sm float-right"
                                            >
                                                Forgot your password?
                                            </Link>

                                            <button
                                                className="bg-blue-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm float-right"
                                            >
                                                Login
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            )}
        </section>
    )
}

export default PLogin