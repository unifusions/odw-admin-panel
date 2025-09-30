import Card from "@/Components/Card";
import { Column, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
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
            <form onSubmit={onsubmit} noValidate>

                <Card>
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

                    <Row className={"mb-3"}>
                        <Column lg={3}>
                            <InputLabel htmlFor="clinicSelect" className="col-sm-3 col-form-label form-label" value="Clinic" />

                        </Column>
                        <Column lg={9}>
                            <ReactSelect options={clinics} onChange={(selectedOption) => setData('clinic', selectedOption)} value={data.clinic} />
                        </Column>
                    </Row>

                    <Row className={"mb-3"}>
                        <Column lg={3}>
                            <InputLabel htmlFor="roleselect" className="col-sm-3 col-form-label form-label" value="Roles" />

                        </Column>
                        <Column lg={9}>
                            <ReactSelect options={roles} onChange={(selectedOption) => setData('role', selectedOption)} value={data.role} />
                        </Column>
                    </Row>

                    
                    <Row className={"mb-3"}>
                        <Column lg={3}>

                        </Column>
                        <Column lg={9}>
                            <button className="btn btn-primary" >Update User</button>
                        </Column>
                    </Row>

                </Card>
            </form>

        
        </AuthenticatedLayout>
    )
}