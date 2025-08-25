import Spinner from "@/Components/Spinner";
import { useForm } from "@inertiajs/react"

export default function MarkAsClosed({ so, isDisabled }) {

    const { data, post, processing, errors } = useForm({
        status: "closed"
    });

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('second-opinion.status', so), {

        });

    }




    return (
        // <form action="" onSubmit={onsubmit} className="">
        <button className="btn btn-outline-success" disabled={isDisabled} type="submit" onClick={onsubmit}>{processing ? <Spinner currentColor="success" /> : 'Mark As  Closed'} </button>

        // </form>
    )
}