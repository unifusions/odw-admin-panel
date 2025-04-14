import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Button, Form } from 'react-bootstrap';

import odwLogo from '../../../../public/images/odw-logo.png';

export default function Prelogin({ status }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('checkuser'), {
            // onFinish: () => reset('password'),
        });
    };



    const bgSvg = encodeURIComponent(`
    <svg width="1920" height="400" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1920" height="400" fill="#D9DEEA" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="400">
        <rect width="1920" height="400" fill="#D9DEEA" />
    </mask>
    <g mask="url(#mask0)">
        <path d="M1059.48 308.024C1152.75 57.0319 927.003 -103.239 802.47 -152.001L1805.22 -495.637L2095.53 351.501L1321.23 616.846C1195.12 618.485 966.213 559.015 1059.48 308.024Z" fill="#C0CBDD" />
        <path d="M1333.22 220.032C1468.66 -144.445 1140.84 -377.182 960 -447.991L2416.14 -947L2837.71 283.168L1713.32 668.487C1530.19 670.868 1197.78 584.509 1333.22 220.032Z" fill="#8192B0" />
    </g>
</svg>

`);

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="position-fixed top-0 end-0 start-0 bg-img-start" style={{ height: '32rem', backgroundImage: `url("data:image/svg+xml,${bgSvg}")` }} >

                <div className="shape shape-bottom zi-1">
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
                        <polygon fill="#fff" points="0,273 1921,273 1921,0 "></polygon>
                    </svg>
                </div>

            </div>


            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="container py-5 py-sm-7">

                <div className="d-flex justify-content-center   mb-5">   <img className="zi-2" src='/images/odw-logo.png' alt="Image Description" style={{ width: '4rem' }} /></div>



                <div className="mx-auto" style={{ maxWidth: '30rem' }}>

                    <div className="card card-lg mb-5">
                        <div className="card-body">

                            <form onSubmit={onsubmit} noValidate>

                                <div className="text-center">
                                    <div className="mb-5">
                                        <h1 className="display-5">Sign in</h1>

                                    </div>




                                </div>
                                <div className="mb-4">
                                    <InputLabel htmlFor="email" className="form-label" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className={errors.email && 'is-invalid'}

                                        placeholder="email@address.com"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>




                                <div className="d-grid mb-4">

                                    <PrimaryButton className="btn btn-primary btn-lg" disabled={processing}>
                                        Log in
                                    </PrimaryButton>


                                </div>

                                {flash.failed && (
                                    <>
                                        <div class="alert alert-danger" role="alert">
                                            {flash.failed}
                                        </div>
                                    </>
                                )}
                            </form>

                        </div>
                    </div>



                </div>

            </div>



        </GuestLayout>
    );
}
