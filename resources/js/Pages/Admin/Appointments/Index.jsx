import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head, router } from '@inertiajs/react';



import { useState, useEffect } from 'react';


import "@fullcalendar/bootstrap5"; // FullCalendar Bootstrap 5 plugin
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import Breadcrumbs from '@/Components/Breadcrumbs';
import PendingAppointments from './PendingAppointments';


export default function Index({ appointments, pendingAppointments }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const serviceColors = {
        "Teeth Cleaning": "#4CAF50",  // Green
        "Cavity Treatment": "#FF9800", // Orange
        "Root Canal": "#E91E63", // Pink
        "Braces Consultation": "#3F51B5", // Blue
        "Teeth Whitening": "#9C27B0", // Purple
        "Tooth Extraction": "#F44336" // Red
    };

    useEffect(() => {
        fetchAppointments(currentDate);
    }, [currentDate]);


    const fetchAppointments = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ensure 2-digit format

        router.reload({
            data: { year: year, month: month },
            only: ['appointments'],
            preserveScroll: true,
            preserveState: true
        })

        // router.reload(
        //     , {}, {
        //     preserveState: true,
        //     onSuccess: (response) => {
        //         setAppointments(response.props.appointments);
        //     },
        // });
    };

    const handleDatesSet = (info) => {
        setCurrentDate(info.view.currentStart); // Update state when navigating months
    };



    const renderEventContent = (eventInfo) => {
        const { extendedProps, title, backgroundColor, start, end } = eventInfo.event;
        const { location, services } = extendedProps;
        const bgColor = backgroundColor + '10';
        const startTime = new Date(start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
        const endTime = new Date(end).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });

        return (
            <div className="custom-event text-truncate" style={{
              
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
            }}>
                <div className="d-flex align-items-top">
                    <div class="avatar  avatar-circle me-3" style={{ backgroundColor: bgColor }}>
                        <span class="avatar-initials"> {title.charAt(0)}</span>
                    </div>
                    <div>
                        <div>{title}</div>

                        <div className='text-muted mb-3 fs-10'>
                            {startTime} - {endTime}
                        </div>

                        <span className="bg-white rounded-3 py-1 px-2 border-solid">{services.join(", ")}</span>
                    </div>
                </div>

                <strong></strong> <br />


            </div>
        );
    };

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (clickInfo) => {
        setSelectedEvent({
            title: clickInfo.event.title,
            start: clickInfo.event.start.toLocaleString(),
            end: clickInfo.event.end ? clickInfo.event.end.toLocaleString() : "N/A",
        });

        // Show the Bootstrap modal
        const eventModal = new window.bootstrap.Modal(document.getElementById("eventModal"));
        eventModal.show();
    };

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
            <Breadcrumbs />

            {pendingAppointments > 0 && <PendingAppointments pendingEvents={pendingAppointments} />

            }

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                // initialView='timeGridWeek'
                selectable={false}
                events={appointments}
                select={handleDateSelect}
                contentClassNames="fullcalendar-custom"
                eventClick={handleEventClick}
                eventContent={renderEventContent}
                themeSystem="bootstrap5"
                initialDate={new Date()} // Set today's date as starting point
                // initialView="timeGridDay"
                slotMinTime="08:00:00" // Start time for day view
                slotMaxTime="18:00:00" // End time for day view
                datesSet={handleDatesSet}
            />

            <div className="modal fade" id="eventModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{selectedEvent?.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                <strong>Start:</strong> {selectedEvent?.start}
                            </p>
                            <p>
                                <strong>End:</strong> {selectedEvent?.end}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}