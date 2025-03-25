import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function BookAppointment({ branch, slots }) {

    const [date, setDate] = useState('');
    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: user.id,
        
        appointment_date: '',
        selectedSlot: ''

    });

    useEffect(() => {
        if (date) {
            setData('appointment_date', date);
            router.reload({
                data: { appointment_date: date },
                only: ['slots'],
                preserveScroll: true,
                preserveState: true
            })
        }
        

    }, [date]);

    const handleBooking = () => {
        // alert('booking confirmed');
        post(route('patient.appointments.booking', branch), {
            // onFinish: closeModal

        });
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Book Appointment
                </h2>
            }>
            {console.log(user)}
            <div>
                <h3>Book an Appointment</h3>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                <select onChange={(e) => setData('selectedSlot', e.target.value)}>
                    <option value="">Select Time Slot</option>
                    {slots && console.log(slots)}
                    {
                        slots &&
                        slots.map((slot, index) => (
                            <option key={index} value={slot}>{slot}</option>
                        ))}
                </select>

                <button onClick={handleBooking} disabled={!data.selectedSlot}>Confirm Booking</button>
            </div>
        </AuthenticatedLayout>
    )

}