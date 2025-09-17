import { Column, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import Spinner from "@/Components/Spinner";
import TextArea from "@/Components/TextArea";
import { useForm } from "@inertiajs/react"
import { useRef } from "react";
import FileUploader from "@/components/FileUploader";

export default function GiveEstimate({ estimate, isDisabled }) {

    const { data, post, processing, errors, reset, setData } = useForm({
        message: "",
        estimation: null
    });

    const modalRef = useRef(null);
    const closeModal = () => {

        const modal = bootstrap.Modal.getInstance(modalRef.current)
        reset();
        modal.toggle();

    }
    const onsubmit = (e) => {
        e.preventDefault();

        post(route('estimates.replies.store', estimate), {
            forceFormData: true,
            onFinish: closeModal()
        });

    }




    return (
        <>
            <button className="btn btn-primary me-2"
                data-bs-toggle="modal" data-bs-target="#reply-modal"
                disabled={isDisabled} type="submit">{processing ? <Spinner currentColor="warning" /> : 'Give Estimation'} </button>

            <div id="reply-modal" className="modal fade modal-lg" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-header">
                                <h5 className="modal-title">Give Estimation</h5>
                            </div>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={onsubmit}>
                                <Row className="mb-3">
                                    <InputLabel htmlFor="message" className="form-label col-sm-3 col-form-label" value="Notes" />
                                    <Column lg={9}>
                                        <TextArea
                                            id="message"
                                            style={{ fieldSizing: 'content' }}
                                            name="message"
                                            value={data.message}

                                            placeholder="Title"
                                            onChange={(e) => setData('message', e.target.value)}
                                        />
                                    </Column>
                                </Row>

                                <Row className="mb-3">
                                    <InputLabel htmlFor="message" className="form-label col-sm-3 col-form-label" value="Upload Opinion" />
                                    <Column sm={9}>
                                        <FileUploader onFileSelect={(file) => setData('estimation', file)} selectedFile={data.estimation} />
                                    </Column>
                                </Row>
                                <div className="text-end">
                                    <button type="button" className="btn btn-white me-3" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : 'Submit Estimation'} </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
        // <form action="" onSubmit={onsubmit} className="">

        // </form>
    )
}