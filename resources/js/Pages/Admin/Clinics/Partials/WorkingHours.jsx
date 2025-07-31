import Card from "@/Components/Card";
import { useForm } from "@inertiajs/react";

export default function WorkingHours({ clinicschedule }) {

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    
    const initialSchedule = daysOfWeek.reduce((acc, day) => {
        acc[day] = { isOpen: false, open: "", close: "" };
        return acc;
    }, {});

    const {data} = useForm({
        schedule : initialSchedule
    })

    return (
        <>
            <Card id="working-hours" styles={{ scrollMarginTop: '80px' }} title="Working Hours">
                {daysOfWeek.map((day) => (
                    <div key={day} className="row px-3 align-items-center">
                        <label className="col-lg-3 form-check form-switch mb-3 ">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={data.schedule[day].isOpen}
                                onChange={(e) =>
                                    setData("schedule", {
                                        ...data.schedule,
                                        [day]: {
                                            ...data.schedule[day],
                                            isOpen: e.target.checked,
                                        },
                                    })}

                            />
                            {" "}{day}
                        </label>
                        {data.schedule[day] && (
                            <div className="col-lg-6 mb-3 align-items-center">
                                <div className="input-group input-group-md-vertical align-items-center">
                                    <input
                                        className="form-control"
                                        type="time"
                                        disabled={!data.schedule[day].isOpen}
                                        value={data.schedule[day].open}
                                        onChange={(e) =>
                                            setData("schedule", {
                                                ...data.schedule,
                                                [day]: {
                                                    ...data.schedule[day],
                                                    open: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                    <div className="mx-3"> TO </div>
                                    <input
                                        className="form-control"
                                        type="time"
                                        value={data.schedule[day].close}
                                        disabled={!data.schedule[day].isOpen}

                                        onChange={(e) =>
                                            setData("schedule", {
                                                ...data.schedule,
                                                [day]: {
                                                    ...data.schedule[day],
                                                    close: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </div>

                            </div>

                        )}
                    </div>
                ))}

            </Card>

        </>
    )
}