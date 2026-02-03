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
import SubmitButton from '@/Components/ui-ext/SubmitButton';
import { LogIn } from 'lucide-react';
 

export default function Login({ status, canResetPassword }) {

    const { email } = usePage().props;
    const { data, setData, post, processing,  errors, reset } = useForm({
        email: email ?? '',
        password: '',
    });
 
    const onsubmit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

 

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
                                                value={data.email}
                                                 onChange={(e) => setData('email', e.target.value)}
                                                required
                                            />
                                        </Field>
                                        <Field data-invalid= {!!errors.password || undefined}>
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
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            />
                                        </Field>
                                        <Field>
                                            <SubmitButton 
                                                processing={processing}
                                                actionText="Login"
                                                icon={LogIn}
                                            />
                                         
                                             
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
