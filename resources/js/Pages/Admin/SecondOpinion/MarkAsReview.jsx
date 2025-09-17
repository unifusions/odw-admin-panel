import Spinner from "@/Components/Spinner";
import { useForm } from "@inertiajs/react"

export default function MarkAsReview({ so, isDisabled }) {

    const { data, post, processing, errors } = useForm({
        status: "in_review"
    });

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('second-opinion.status', so), {
            // forceFormData: true,
            // onFinish: closeModal
        });

    }




    return (
        // <form action="" onSubmit={onsubmit} className="">
        <button className="btn btn-warning me-2" disabled={isDisabled} type="submit" onClick={onsubmit}>{processing ? <Spinner currentColor="warning" /> : 'Mark As In Review'} </button>

        // </form>
    )
}