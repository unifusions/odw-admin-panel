import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    const SERVICES = [
        { name: 'Dental Implants', cost: '$ 500', other: '$ 750' },
        { name: 'Regular Check-ups and Professional Cleaning', cost: '$ 500', other: '$ 750' },
        { name: 'Complete Smile Makeover', cost: '$ 500', other: '$ 750' },
        { name: 'Invisalign', cost: '$ 500', other: '$ 750' },
        { name: 'Dental Crowns', cost: '$ 500', other: '$ 750' },
        { name: 'Preventive Treatment', cost: '$ 500', other: '$ 750' },
        { name: 'Pediatric Treatment', cost: '$ 500', other: '$ 750' },
        { name: 'Teeth Whitening', cost: '$ 500', other: '$ 750' },
        { name: 'Dentures', cost: '$ 500', other: '$ 750' },
        { name: 'Over Dentures', cost: '$ 500', other: '$ 750' },
        { name: 'Root Canal', cost: '$ 500', other: '$ 750' },
        { name: 'Tooth Extractions', cost: '$ 500', other: '$ 750' },
        { name: 'Dental Fillings', cost: '$ 500', other: '$ 750' },
    ];
    return (
        <AuthenticatedLayout header='Services'>
            <Head title="Services" />

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                >
                    <thead class="thead-light">
                        <tr>
                            <th>Services</th>
                            <th>ODW Cost</th>
                            <th>Other Cost</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            SERVICES.map((item, index) => (
                                <tr key={index} className="text-dark text-500">
                                    <td>{item.name}</td>
                                    <td>{item.cost}</td>
                                    <td>{item.other}</td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    )
}