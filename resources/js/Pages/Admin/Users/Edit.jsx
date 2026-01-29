
import { Column, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import ReactSelect from "react-select";

export default function Edit({ user, selectedClinic, clinics, roles, selectedRole }) {

    const { data, setData, put, processing, errors } = useForm({
        full_name: user.name || '',
        clinic: selectedClinic,
        email: user.email || "",
        role: selectedRole,
       
    });

    const onsubmit = (e) => {
        e.preventDefault();

        put(route('clinic-users.update', user), {

        });
    }

    return (
        <AuthenticatedLayout pageTitle="Edit User"
            header="Edit User"
        >
        <Button
                variant="ghost"
                className="mb-4"
                onClick={() => router.get(route('clinic-users.index'))}
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Users
            </Button>
            <Card className="max-w-lg">

                <form onSubmit={onsubmit} noValidate>

                    <CardContent className="space-y-4">
                        <TextInputWithLabel
                            label="Full Name"
                            placeholder="Full Name"
                            id="full_name"
                            value={data.full_name}

                            onChange={(e) => setData('full_name', e.target.value)}
                            errorMessage={errors.full_name}
                            className={errors.full_name && 'is-invalid'}
                        />

                        <TextInputWithLabel
                            label="E-Mail"
                            placeholder="Email Address"
                            id="email"
                            value={data.email}

                            onChange={(e) => setData('email', e.target.value)}
                            errorMessage={errors.email}
                            className={errors.email && 'is-invalid'}
                        />

                        <TextInputWithLabel
                            label="Password"
                            placeholder="Password"
                            id="password" type="password"
                            value={data.password}

                            onChange={(e) => setData('password', e.target.value)}
                            errorMessage={errors.password}
                            className={errors.password && 'is-invalid'}
                        />


                        <TextInputWithLabel
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            value={data.password_confirmation}

                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            errors={errors.password_confirmation}

                            additionalInfo={
                                <>
                                    <h5>Password requirements:</h5>

                                    <p className="fs-6 mb-2">Ensure that these requirements are met:</p>
                                    <ul className="fs-6">

                                        <li>Minimum 8 characters long - the more, the better</li>
                                        <li>At least one lowercase character</li>
                                        <li>At least one uppercase character</li>
                                        <li>At least one number, symbol, or whitespace character</li>
                                    </ul>

                                </>
                            }
                        />

                        <div className="space-y-4  ">
                            <Label htmlFor="clinicSelect"> Clinic</Label>
                            <ReactSelect options={clinics} onChange={(selectedOption) => setData('clinic', selectedOption)} />
                        </div>
                        <div className="space-y-4 mb-5">

                            <Label htmlFor="roleselect"> Role</Label>
                            <ReactSelect options={roles} onChange={(selectedOption) => setData('role', selectedOption)} />


                        </div>
                    </CardContent>


<CardFooter className="border-t border-border">
    <Button type="submit">
        Save User
    </Button>
</CardFooter>



                </form>
            </Card>


        
        </AuthenticatedLayout>
    )
}