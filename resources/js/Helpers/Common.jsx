export const RenderServices = ({ service }) => {
    return (
        <>
            <div className="row mb-3 ">
                <div className="col-md-2">{service.code}</div>
                <div className="col-md-6">{service.name}</div>
                <div className="col-md-4 text-end">$ {service.odw_cost}</div>
            </div>

        </>
    )
}

export const InfoRow = ({ index, value }) => {
    return (
        <div className="row mb-3">
            <div className="col-md-6">
                {index}
            </div>

            <div className="col-md-6 ">
                {value}
            </div>
        </div>
    )
}

export   const AttachmentView = ({ attachment }) => {
    return (
        <div className="d-flex badge text-bg-secondary">
            <i class="bi bi-paperclip"></i> {attachment.file_name}
        </div>
    )
}