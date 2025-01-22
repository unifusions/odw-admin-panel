import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Form } from 'react-bootstrap';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="container py-5 py-sm-7">

                <Link className="d-flex justify-content-center mb-5" href="#!">
                    <img className="zi-2" src='/images/odw-logo.png' alt="Image Description" style={{ width: '4rem' }} />
                </Link>


                <div className="mx-auto" style={{ maxWidth: '30rem' }}>

                    <div className="card card-lg mb-5">
                        <div className="card-body">

                            <form onSubmit={onsubmit} noValidate>

                                <div className="text-center">
                                    <div className="mb-5">
                                        <h1 className="display-5">Sign in</h1>
                                        <p>Don't have an account yet? <Link className="link" href={route('register')}>Sign up here</Link></p>
                                    </div>




                                </div>
                                <div className="mb-4">
                                    <InputLabel htmlFor="email" className="form-label" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="form-control form-control-lg"

                                        placeholder="email@address.com"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>




                                <div className="mb-4">
                                    <InputLabel htmlFor="password" className="form-label" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="form-control form-control-lg"
                                        autoComplete="current-password"
                                        placeholder="8+ characters required"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="d-grid">

                                    <PrimaryButton className="btn btn-primary btn-lg" disabled={processing}>
                                        Log in
                                    </PrimaryButton>


                                </div>


                            </form>

                        </div>
                    </div>



                </div>

            </div>


          
        </GuestLayout>
    );
}
