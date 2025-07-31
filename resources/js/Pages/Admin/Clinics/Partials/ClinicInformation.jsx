import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel"
import { useForm } from "@inertiajs/react"

export default function ClinicInformation({ clinic }) {

    const { data, setData, patch, errors, processing, } = useForm({
        clinic_name: clinic.name || '',
        address_line_1: clinic.address_line_1||'',
        address_line_2: clinic.address_line_2 || '',
        phone: clinic.phone || '',
        email: clinic.email || '',
        state: clinic.state|| '',
        city: clinic.city || '',
        zip_code: clinic.zip_code || '',
        latitude: clinic.latitude || '',
        desc : clinic.desc || ''
    })

    const onsubmit = (e) => {
        e.preventDefault();
        patch(route('clinics.update' ,clinic));

    }
    return (
        <>

            <form action="" onSubmit={onsubmit}>
                <TextInputWithLabel
                    id="clinic_name"
                    type="text"
                    value={data.clinic_name}
                    placeholder="Clinic Name"
                    onChange={(e) => setData('clinic_name', e.target.value)}
                    label="Name"
                    className=" mb-4"
                />

                <div className="row">
                    <div className="col-sm-6">

                        <TextInputWithLabel
                            id="email"
                            type="email"
                            value={data.email}
                            placeholder="email@address.com"
                            onChange={(e) => setData('email', e.target.value)}
                            label="Contact Email"
                        />


                    </div>


                    <div className="col-sm-6">

                        <div className="mb-4">


                            <TextInputWithLabel
                                id="phone"
                                label="Phone Number"
                                value={data.phone}
                                className="form-control"
                                placeholder="+x(xxx)xxx-xx-xx"
                                onChange={(e) => setData('phone', e.target.value)}
                            />




                        </div>

                    </div>


                    <div className="col-sm-6">

                        <TextInputWithLabel
                            id="address_line_1"
                            type="text"
                            value={data.address_line_1}
                            placeholder=""
                            onChange={(e) => setData('address_line_1', e.target.value)}
                            label="Address Line 1"
                        />


                    </div>


                    <div className="col-sm-6 mb-3">


                        <TextInputWithLabel
                            id="address_line_2"
                            type="text"
                            value={data.address_line_2}
                            placeholder=""
                            onChange={(e) => setData('address_line_2', e.target.value)}
                            label="Address Line 2"
                        />


                    </div>

                    <div className="col-sm-6 mb-3">


                        <TextInputWithLabel
                            id="city"
                            type="text"
                            value={data.city}
                            placeholder=""
                            onChange={(e) => setData('city', e.target.value)}
                            label="City"
                        />


                    </div>

                    <div className="col-sm-6 mb-3">


                        <TextInputWithLabel
                            id="city"
                            type="text"
                            value={data.state}
                            placeholder=""
                            onChange={(e) => setData('state', e.target.value)}
                            label="State"
                        />


                    </div>


                    <div className="col-sm-6 mb-3">


                        <TextInputWithLabel
                            id="zip_code"
                            type="text"
                            value={data.zip_code}
                            placeholder="20001"
                            onChange={(e) => setData('zip_code', e.target.value)}
                            label="ZIP Code"
                        />


                    </div>






                </div>

                <hr />

                <div className="row">
                    <div className="col-sm-6 mb-3">


                        <TextInputWithLabel
                            id="latitude"
                            type="text"
                            value={data.latitude}
                            placeholder="38.9072"
                            onChange={(e) => setData('latitude', e.target.value)}
                            label="Latitude"
                        />


                    </div>

                    <div className="col-sm-6 mb-3">


                        <TextInputWithLabel
                            id="longitude"
                            type="text"
                            value={data.longitude}
                            placeholder="77.0369"
                            onChange={(e) => setData('longitude', e.target.value)}
                            label="Longitude"
                        />


                    </div>
                </div>

                <label className="form-label">General Info </label>

                <TextArea name="desc"
                    className="form-control"
                    value={data.desc}
                    placeholder="General Info"
                    onChange={(e) => setData('desc', e.target.value)} />





                <button type="submit" className="btn btn-primary">Save</button>
            </form>

        </>
    )
}