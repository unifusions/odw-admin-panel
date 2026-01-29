import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function PushDevices({ patient, devices }) {
const { post, processing } = useForm({});

    const submitTest = (e, device) => {
        e.preventDefault();
        // 2. Post to your Laravel route
        post(route('patients.testnotification', {
            patient:patient,
            device:device }), {
            preserveScroll: true,
            onSuccess: () => alert('Notification Sent!'),
        });
    };
    return (
        <AuthenticatedLayout>
            <Card>
                <CardContent>
                    <div className="data-table">
                        <table className="w-full">
                            <thead>
                                <th>ID</th>
                                <th>Platform</th>
                                <th>UID</th>
                                <th>Token</th>
                                <th>Action</th>
                            </thead>
                            <tbody>

            {devices.map((device) => <tr key={device.device_id} >

                <td className="">{device.id}</td>
                <td>{device.platform}</td>
                <td>{device.device_id}</td>
                <td>{device.fcm_token}</td>
                
        <td>
            <form onSubmit={(e) => submitTest(e, device)}>
                <Button disabled={processing}>Send Test Notification</Button>
            </form>
        </td>
            </tr>)}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>


            {/* {JSON.stringify(devices, null,3)} */}
        </AuthenticatedLayout>
    )

}