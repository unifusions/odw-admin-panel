import { Stethoscope, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { useForm } from "@inertiajs/react";


const status = [
    {label:"In Review", value:"in_review"},
    {label:"Completed", value:"completed"},
    
];
export default function EstimateStatusUpdate({estimate}){


    const {data, setData, post} = useForm({
        'status' : ''
    })
    const onsubmit = (e) =>{
       e.preventDefault();


// alert(JSON.stringify(data));
        post(route('estimates.status', {estimate:estimate}));
    } 
    return (
             <Card className="shadow-card">
                <form onSubmit={onsubmit}>
<CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Stethoscope className="h-5 w-5" />
                                Update Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            

                            <div className="space-y-4">
                                    <Select value={data.status} onValueChange={(v) => setData('status', v)} 
                                            defaultValue={estimate.status}
                                        >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Assign Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {status.map((sos) => (
                                                <SelectItem key={sos.value} value={sos.value}>
                                                    {sos.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Button
                                        className="w-full"
                                        type="submit"
                                        // disabled={!selectedDoctor}
                                    > 
                                        Update Status
                                    </Button>
                                </div>

                        </CardContent>
                </form>
                        
                    </Card>
    )
}