import Alert from '@/Components/Alert';
import PostNavLink from '@/Components/PostNavLink';
import Spinner from '@/Components/Spinner';
import { User } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'


const PRegister = () => {

    const { flash } = usePage<{ flash: any }>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',

    })

    const [loading, setLoading] = useState(true);

    const [alertMessage, setAlertMessage] = useState('');
    // Function to handle confirm password input change

    // Function to handle confirm password input change
    // const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const newPassword = e.target.value;
    //     setData({
    //         ...data,
    //         password_confirmation: newPassword,
    //     });
    // };

    // Check if passwords match
    // const passwordsMatch = data.password === data.password_confirmation;

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        post(route('p_register_user'));

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
                    <h1 className='font-bold text-black-500 text-center m-2'>This is a Register Page</h1>

                    <div className="flex items-center justify-center">
                        <div className='w-1/2 gap-6'>

                            <form onSubmit={handleRegister}>
                                <div className="bg-white p-6 rounded-lg shadow-md text-center h-auto md:text-left">
                                    <div className="flex flex-col">
                                        <div className="block mt-4">

                                            <label className='text-sm mt-2 text-gray-600'>Full Name:</label>
                                            <input type="text"
                                                onChange={e => setData('name', e.target.value)}
                                                className="w-full border rounded shadow-sm" />
                                            {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
                                        </div>

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
                                            <label className='text-sm mt-2 text-gray-600'>Confirm Password:</label>
                                            <input type="password"
                                                value={data.password_confirmation}
                                                onChange={e => setData('password_confirmation', e.target.value)}
                                                className="w-full border rounded shadow-sm" />
                                            {errors.password_confirmation && <span className='text-red-500 text-sm'>{errors.password_confirmation}</span>}


                                        </div>

                                        <div className="flex items-center justify-end gap-2 mt-4">
                                            <Link
                                                href={route('p_login')}
                                                className="bg-none hover:text-gray-900 text-gray-500 px-4 py-2 rounded-lg text-center text-sm float-right"
                                            >
                                                Already Registered? Login Here!
                                            </Link>

                                            <button
                                                className="bg-blue-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm float-right"
                                            >
                                                Register
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

export default PRegister