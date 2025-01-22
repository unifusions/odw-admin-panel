import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FullCalendar from '@fullcalendar/react';
import { Head } from '@inertiajs/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';

export default function Index({ events }) {

    const [calendarEvents, setCalendarEvents] = useState(events);

    const handleDateSelect = (selectInfo) => {
        const title = prompt('Enter a title for this event');
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // Clear selection

        if (title) {
            const newEvent = {
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            };

            // axios.post('/calendar', newEvent)
            //     .then((response) => {
            //         setCalendarEvents([...calendarEvents, response.data]);
            //     });
        }
    };

    return (
        <AuthenticatedLayout
            header='Appointments'

        >
            <Head title="Appointments" />

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                events={calendarEvents}
                select={handleDateSelect}
                contentClassNames="fullcalendar-custom"
            />asd
          
        </AuthenticatedLayout>
    );
}