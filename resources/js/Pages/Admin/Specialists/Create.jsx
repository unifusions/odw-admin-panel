import Card from "@/Components/Card";
import InputLabel from "@/Components/InputLabel";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Create() {

    const { data, setData, post, processing, errors, reset } = useForm({
        specialist_name: '',
        practise_from : '',
    });
    const onsubmit = () => {
        alert('form submitted');
    }
    return (
        <>
            <AuthenticatedLayout
                header="Add Specialist"
            >

                <form onSubmit={onsubmit}>
                    <div className="row">
                        <div className="col-lg-8">
                            <Card title="Specialist Profile">


                                <TextInputWithLabel
                                    id="speicalist_name"
                                    type="text"
                                    value={data.specialist_name}
                                    placeholder=""
                                    onChange={(e) => setData('specialist_name', e.target.value)}
                                    label="Specialist Full Name"
                                />

                                <TextInputWithLabel
                                    id="practise_from"
                                    type="date"
                                    value={data.practise_from}
                                    placeholder=""
                                    onChange={(e) => setData('practise_from', e.target.value)}
                                    label="Practise From"
                                />
                                <button type="submit" className="btn btn-primary">Save Specialist</button>


                            </Card>

                        </div>
                    </div>
                </form>
            </AuthenticatedLayout>
        </>
    )
}