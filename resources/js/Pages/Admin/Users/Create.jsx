import Card from "@/Components/Card";
import { Column, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import ReactSelect from "react-select";

export default function Create() {
    const { auth, clinics, roles } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        clinic: null,
        email: '',
        role: null,
        password: '',
        password_confirmation: ''

    });

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('clinic-users.store'), {

        });
    }
    return (
        <AuthenticatedLayout
            headers='Add Users'
            pageTitle="Add User"

        >
            <Card>
          
                <form onSubmit={onsubmit} noValidate>

                    <TextInputWithLabel
                        label="Full Name"
                        placeholder="Full Name"
                        id="full_name"
                        value={data.full_name}
                        isSingleRow={true}
                        onChange={(e) => setData('full_name', e.target.value)}
                        errorMessage={errors.full_name}
                        className={errors.full_name && 'is-invalid'}
                    />

                    <TextInputWithLabel
                        label="E-Mail"
                        placeholder="Email Address"
                        id="email"
                        value={data.email}
                        isSingleRow={true}
                        onChange={(e) => setData('email', e.target.value)}
                        errorMessage={errors.email}
                        className={errors.email && 'is-invalid'}
                    />

                    <TextInputWithLabel
                        label="Password"
                        placeholder="Password"
                        id="password"type="password"
                        value={data.password}
                        isSingleRow={true}
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
                        isSingleRow={true}
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

                    <Row className={"mb-3"}>
                        <Column lg={3}>
                            <InputLabel htmlFor="clinicSelect" className="col-sm-3 col-form-label form-label" value="Clinic" />

                        </Column>
                        <Column lg={9}>
                            <ReactSelect options={clinics} onChange={(selectedOption) => setData('clinic', selectedOption)} />
                        </Column>
                    </Row>


                    <Row className={"mb-3"}>
                        <Column lg={3}>
                            <InputLabel htmlFor="roleselect" className="col-sm-3 col-form-label form-label" value="Roles" />

                        </Column>
                        <Column lg={9}>
                            <ReactSelect options={roles} onChange={(selectedOption) => setData('role', selectedOption)} />
                        </Column>
                    </Row>

                    <Row className={"mb-3"}>
                        <Column lg={3}>

                        </Column>
                        <Column lg={9}>
                            <button className="btn btn-primary">Save User</button>
                        </Column>
                    </Row>


                </form>
            </Card>

            {/* <div>
                {JSON.stringify(clinics)}
            </div> */}
        </AuthenticatedLayout>
    )
}