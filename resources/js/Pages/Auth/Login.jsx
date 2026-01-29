import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
 
import { Head, Link, useForm, usePage } from '@inertiajs/react';
 

import odwLogo from '../../../../public/images/odw-logo.png';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';


import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { cn } from '@/lib/utils';
 

export default function Login({ status, canResetPassword }) {

    const { email } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: email ?? '',
        password: '',
    });

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
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
        <>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">


                    <div className="flex flex-col gap-6">
                        <Card>
                            <CardHeader>
                                 <img className="h-15 text-center mx-auto mb-5" src="/images/odw-logo-h.png" alt="Logo" />
                                <CardTitle>Login to your account</CardTitle>
                                <CardDescription>
                                    Enter your email below to login to your account
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={onsubmit} >
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="email">Email</FieldLabel>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="email@example.com"
                                                 onChange={(e) => setData('email', e.target.value)}
                                                required
                                            />
                                        </Field>
                                        <Field>
                                            <div className="flex items-center">
                                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                                <Link
                                                    href="/forgot-password"
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                            <Input id="password" type="password" required
                                            placeholder="********"
                                            onChange={(e) => setData('password', e.target.value)}
                                            />
                                        </Field>
                                        <Field>
                                            <Button type="submit">Login</Button>
                                             
                                        </Field>
                                    </FieldGroup>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                   
                </div>
            </div>


        </>

    )     
}
