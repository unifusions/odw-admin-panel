import DateTimeConverter from "@/Helpers/DateTimeConverter";
import SOBadge from "./SOBadge";

export default function SingleHeader(
    { title, status, timestamp }
) {
    return (
        <div className="d-sm-flex align-items-sm-center mb-3">
            <h1 className="page-header-title">{title}</h1>
            <SOBadge status={status} />

            <span className="ms-2 ms-sm-3">
                <i className="bi-calendar-week"></i> <DateTimeConverter dateTimeString={timestamp} />
            </span>
        </div>
    )
}