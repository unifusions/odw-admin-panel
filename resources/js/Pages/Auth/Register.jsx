import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>


            <Head title="Register" />


            {/* <!-- Content --> */}
            <div className="container py-5 py-sm-7">

            <Link class="d-flex justify-content-center mb-5" href="#!">
                <img class="zi-2" src='/images/odw-logo.png' alt="Image Description" style={{ width: '4rem' }} />
            </Link>
                <div className="mx-auto" style={{ maxWidth: '30rem' }}>

                    <div className="card card-lg mb-5">
                        <div className="card-body">


                            <div className="text-center">
                                <div className="mb-5">
                                    <h1 className="display-5">Create your account</h1>
                                    <p>Already have an account? <Link className="link" href={route('login')}>Sign in here</Link></p>
                                </div>




                            </div>
                            <form onSubmit={submit}>
                                <div className='mb-4'>
                                    <InputLabel htmlFor="name" value="Name" className="form-label" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="form-control form-control-lg"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        placeholder="Williams"
                                    />
                                    <InputError message={errors.name} className="invalid-feedback" />
                                </div>


                                <div className="mb-4">

                                    <InputLabel htmlFor="email" value="Email" className="form-label" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="form-control form-control-lg"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Markwilliams@site.com"
                                    />

                                    <InputError message={errors.email} className="invalid-feedback" />


                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="form-control form-control-lg"
                                        placeholder="8+ characters required"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password} className="invalid-feedback" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                        className="form-label"
                                    />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="form-control form-control-lg"
                                        placeholder="8+ characters required"
                                        onChange={(e) =>
                                            setData('password_confirmation', e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="invalid-feedback"
                                    />
                                </div>

                                <div className="d-grid gap-2">


                                    <PrimaryButton className="btn btn-primary btn-lg" disabled={processing}>
                                        Register
                                    </PrimaryButton>
                                </div>


                            </form>




                            




                        </div>
                    </div>
                    {/* <!-- End Card --> */}

                    {/* <!-- Footer --> */}
                    <div className="position-relative text-center zi-1">
                        <small className="text-cap text-body mb-4">OneDentalWorld</small>


                    </div>

                </div>
            </div>










        </GuestLayout>
    );
}
