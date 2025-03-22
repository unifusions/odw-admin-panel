import ClinicLayout from "./ClinicLayout";
import AddService from "./Services/AddService";

export default function ServiceList({ clinic, dentalservices }) {
    return (
        <>
            <ClinicLayout clinic={clinic} >

                <AddService clinic={clinic} />
                <ul className="list-group list-group-flush">
                    {Object.values(dentalservices).map((service, index) => (
                        <li key={index} className="list-group-item">
                            <div className="row">
                                <div className="col-auto">
                                    {service.image_path && <>
                                        <img src={service.image_path} alt="" width={50} />

                                    </>}
                                </div>
                                <div className="col-sm">
                                    <h2 className="fw-normal mb-1" >{service.service}</h2>
                                    <ul className="list-inline list-separator">
                                    {service.branches.map((branch, bIndex) => (
                                        <li className="list-inline-item" key={bIndex}>{branch}</li>
                                    ))}
                                </ul>
                                </div>
                               
                            </div>


                        </li>
                    ))}
                </ul>
            </ClinicLayout>
        </>
    )
}