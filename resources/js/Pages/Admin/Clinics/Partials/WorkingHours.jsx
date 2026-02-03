
import SubmitButton from "@/Components/ui-ext/SubmitButton";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Switch } from "@/Components/ui/switch";
import { useForm } from "@inertiajs/react";
import { Clock } from "lucide-react";

export default function WorkingHours({ clinic, clinicschedule }) {

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];


    const initialSchedule = daysOfWeek.reduce((acc, day) => {

        acc[day] = clinicschedule[day] || { isOpen: false, open: "", close: "" };
        return acc;
    }, {});

    const { data, setData, post, processing } = useForm({
        schedule: {
            ...daysOfWeek.reduce((acc, day) => {
                acc[day] = clinicschedule[day] || { isOpen: false, open: "", close: "" };
                return acc;
            }, {})
        }
    })

    const updateSchedule = (e) => {
        e.preventDefault();
        post(route('clinics.updateSchedule', clinic), {
            preserveScroll: true
        })
    }
    // 'clinics.updateSchedule
    return (
        <>
            <form onSubmit={updateSchedule}  >

                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Business Hours
                        </CardTitle>
                        <CardDescription>
                            Set your clinic's operating hours
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">

                        {daysOfWeek.map((day) => (
                            <div key={day} className="flex items-center justify-between">
                                <div className="flex items-center gap-3 ">
                                    <Switch
                                        checked={data.schedule[day].is_open}
                                        onCheckedChange={(e) => {

                                            setData("schedule", {
                                                ...data.schedule,
                                                [day]: {
                                                    ...data.schedule[day],
                                                    is_open: e,
                                                },
                                            })
                                        }}
                                    />
                                    <span className="w-24 font-medium">{day}</span>

                                </div>
                                {data.schedule[day] && (
                                    <div className="flex items-center gap-2 text-sm">

                                        <Input
                                            className="form-control"
                                            type="time"
                                            disabled={!data.schedule[day].is_open}
                                            value={data.schedule[day].open_time}
                                            onChange={(e) =>
                                                setData("schedule", {
                                                    ...data.schedule,
                                                    [day]: {
                                                        ...data.schedule[day],
                                                        open_time: e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                        <span className="text-muted-foreground">to</span>

                                        <Input
                                            className="form-control"
                                            type="time"
                                            value={data.schedule[day].close_time}
                                            disabled={!data.schedule[day].is_open}

                                            onChange={(e) =>
                                                setData("schedule", {
                                                    ...data.schedule,
                                                    [day]: {
                                                        ...data.schedule[day],
                                                        close_time: e.target.value,
                                                    },
                                                })
                                            }
                                        />


                                    </div>

                                )}
                            </div>
                        ))}



                    </CardContent>
                    <CardFooter>
                         <SubmitButton
                                                    processing={processing}
                                                    actionText="Update Business Hours"
                        
                                                />
                     
                    </CardFooter>
                </Card>

                 
            </form>
        </>
    )
}