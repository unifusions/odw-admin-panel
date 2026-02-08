import { useForm } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Stethoscope } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import SubmitButton from "../ui-ext/SubmitButton";



 
const so_status = [
    {key:"pending", value : "Pending"},
    {key:"in_review", value : "In Review"},
    {key:"answered", value : "Answered"},
    {key:"closed", value : "Closed"},
    
];
export default function UpdateStatusAction ({opinion}) {
    const {data, setData, processing, post } = useForm({
        status : opinion?.status,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
            post(route('second-opinion.status', opinion))
    }
    return (

                    <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Stethoscope className="h-5 w-5" />
                                Assign Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                             <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <Select  onValueChange={(e) => setData('status',e)} value={data.status} >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {so_status.map((sos) => (
                                                <SelectItem key={sos.key} value={sos.key}  disabled={sos.key===opinion?.status}>
                                                    {sos.value} 
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <SubmitButton
                                        className="w-full"
                                        icon={Stethoscope}
                                    actionText="Assign Status"
                                    processing={processing}
                                   />
                                  
                                </div>
                           </form>
                        </CardContent>
                    </Card>
    )
}