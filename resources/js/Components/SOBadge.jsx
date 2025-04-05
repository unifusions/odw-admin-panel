import LegendIndicator from "./LegendIndicator";

export default function SOBadge({ status }) {

    const Badge = ({ color, status }) => {
        return (
            <span className={`badge bg-soft-${color} text-${color} ms-sm-3`}>
                <LegendIndicator color={color} status={status} />

            </span>
        )
    }
    switch (status) {
        case 'pending':
            return (<Badge color="danger" status="Pending" />);
            break;
        case 'in_review':
            return (<Badge color="warning" status="In Review" />)
        case 'answered':
            return (<Badge color="success" status="Answered" />)
        case 'closed':
            return (<Badge color="secondary" status="Closed" />)
        default:
            break;
    }

}