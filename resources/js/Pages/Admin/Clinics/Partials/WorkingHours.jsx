import Card from "@/Components/Card";
import { useForm } from "@inertiajs/react";

export default function WorkingHours({ clinic, clinicschedule }) {

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];


    const initialSchedule = daysOfWeek.reduce((acc, day) => {

        acc[day] = clinicschedule[day] || { isOpen: false, open: "", close: "" };
        return acc;
    }, {});

    const { data, setData, post } = useForm({
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
                <Card id="working-hours" styles={{ scrollMarginTop: '80px' }} title="Working Hours"  >
                    {console.log(data.schedule)}
                    {daysOfWeek.map((day) => (
                        <div key={day} className="row px-3 align-items-center">
                            <label className="col-lg-3 form-check form-switch mb-3 ">

                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={data.schedule[day].is_open}
                                    onChange={(e) =>
                                        setData("schedule", {
                                            ...data.schedule,
                                            [day]: {
                                                ...data.schedule[day],
                                                is_open: e.target.checked,
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
                                        <div className="mx-3"> TO </div>
                                        <input
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

                                </div>

                            )}
                        </div>
                    ))}

                    <button className="mt-3 btn btn-primary btn-sm">
                        Update Schedule
                    </button>

                </Card>
            </form>
        </>
    )
}