import Card from "@/Components/Card";
import { useForm } from "@inertiajs/react";

export default function ClinicServices({clinic, services, selectedservices }) {


    const { data, setData, post, processing, errors, reset } = useForm({

        categories: selectedservices || [],

    });
    const handleCategorySelect = (itemId) => {

        let updatedItems;

        if (data.categories.includes(itemId)) {
            updatedItems = data.categories.filter(id => id !== itemId);
        } else {
            updatedItems = [...data.categories, itemId];
        }

        setData('categories', updatedItems);

    };
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('clinics.updateServices', clinic), {
            preserveScroll: true
        });

    }

    return (
        <form onSubmit={onSubmit}>
            <Card title="Treatments">
                <div className="row" >
 
                    {services.map((category) => {
                        const isSelected = data.categories.includes(category.id);

                        return (


                            <div key={category.id} className="col-lg-4 mb-3">

                                <label className="form-check form-switch mb-3 ">
                                    {category.name}

                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={isSelected}
                                        onChange={() => handleCategorySelect(category.id)}
                                    />
                                </label>
                            </div>
                        )
                    })}
                </div>

                <button className="btn btn-primary" type="submit">Update Treatments</button>
            </Card>
        </form>
    )
}