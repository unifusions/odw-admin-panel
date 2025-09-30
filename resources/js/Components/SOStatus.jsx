import LegendIndicator from "./LegendIndicator";

export default function SOStatus({ status }) {

    switch (status) {
        case 'pending':
            return (<LegendIndicator color="danger" status="Pending" />);
            break;
        case 'in_review':
            return (<LegendIndicator color="warning" status="In Review" />)
        case 'answered':
            return (<LegendIndicator color="success" status="Answered" />)
        case 'confirmed':
            return (<LegendIndicator color="success" status="Confirmed" />)
        case 'closed':
            return (<LegendIndicator color="secondary" status="Closed" />)
        default:
            break;
    }

}