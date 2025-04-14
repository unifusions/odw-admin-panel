import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Form } from 'react-bootstrap';

import odwLogo from '../../../../public/images/odw-logo.png';
import { useRef, useState } from 'react';

export default function TwoStep({ email, status, otpDigits }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: email ?? '',
        otp: '',
    });
    const otpLength = 6;
    const [otp, setOtp] = useState(new Array(otpLength).fill(""));
    const inputRefs = useRef([]);
    const handleChange = (value, index) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if filled
        if (value !== "" && index < otpLength - 1) {
            inputRefs.current[index + 1].focus();
        }
    };


    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
            inputRefs.current[index - 1].focus();
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        setData('otp', otp.join(''));
        post(route('verifyotp'), {
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
            {console.log(otpDigits)}
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="container py-5 py-sm-7">

                <div className="d-flex justify-content-center   mb-5">   <img className="zi-2" src='/images/odw-logo.png' alt="Image Description" style={{ width: '4rem' }} /></div>



                <div className="mx-auto" style={{ maxWidth: '30rem' }}>
                    <div class="card card-lg mb-5">
                        <div class="card-body text-center">
                            <form onSubmit={handleSubmit} >
                                <div class="mb-4">
                                    <img class="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations/oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img class="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations-light/oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>

                                <div class="mb-5">
                                    <h1 class="display-5">2-step Verification</h1>
                                    <p class="mb-0">We sent a verification code to your email.</p>
                                    <p>Enter the code from the email in the field below.</p>
                                </div>

                                <div class="row gx-2 gx-sm-3">

                                    {otp.map((digit, index) => (
                                        <div class="col">

                                            <div class="mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-single-number text-center"
                                                    value={digit}
                                                    maxLength={1}
                                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                                    onChange={(e) => handleChange(e.target.value, index)}
                                                    onKeyDown={(e) => handleKeyPress(e, index)}
                                                    autoComplete="off"
                                                    inputMode="numeric"
                                                />
                                            </div>

                                        </div>
                                    ))}
                                    {/* <TextInput
                                        key={index}
                                        style={styles.otpInput}
                                        value={digit}
                                        onChangeText={(value) => handleChange(value, index)}
                                        onKeyPress={(event) => handleKeyPress(event, index)}
                                        keyboardType="numeric"
                                        maxLength={1}
                                        ref={(ref) => (inputRefs.current[index] = ref)}
                                    /> */}







                                </div>

                                <div class="d-grid mb-3">
                                    <button type="submit" class="btn btn-primary btn-lg">Verify my account</button>
                                </div>

                                <div class="text-center">
                                    <p>Haven't received it? <a href="#">Resend a new code.</a></p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>



        </GuestLayout>
    );
}
