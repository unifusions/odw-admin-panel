import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SubmitButton from '@/Components/ui-ext/SubmitButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/Components/ui/field';
import { Input } from '@/Components/ui/input';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Key } from 'lucide-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
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
   
<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-6">
                <Card>
                    <CardHeader>
                                 <img className="h-15 text-center mx-auto mb-5" src="/images/odw-logo-h.png" alt="Logo" />
                                <CardTitle>Forgot password?</CardTitle>
                                <CardDescription>
                                  Enter the email address you used when you joined and we'll send you instructions to reset your password.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>

                            <form onSubmit={submit}>
                                
                                {status && (
                                    <div className="mb-4 text-sm font-medium text-green-600">
                                        {status}
                                    </div>
                                )}

                                <div class="mb-4">
                                    <FieldGroup>
                                        <Field>
                                         <FieldLabel htmlFor="email">Email</FieldLabel>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="email@example.com"
                                                value={data.email}
                                                isFocused={true}
                                                 onChange={(e) => setData('email', e.target.value)}
                                                required
                                            />
                                              <InputError message={errors.email} className="mt-2" />
                                        </Field>
                                         <SubmitButton 
                                                processing={processing}
                                                actionText="Reset Password"
                                                icon={Key}
                                            />
                                            {/* <Link
                                                    href={route('login')}
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </Link> */}
                                    </FieldGroup>
                                   
 
                                </div>


                              
                            </form>
                            </CardContent>
                </Card>
            </div>
          </div>
            
 
       </div>
    );
}
