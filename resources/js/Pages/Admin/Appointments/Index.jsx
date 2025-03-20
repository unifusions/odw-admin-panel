import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';



import { useState, useEffect } from 'react';


import "@fullcalendar/bootstrap5"; // FullCalendar Bootstrap 5 plugin
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import Breadcrumbs from '@/Components/Breadcrumbs';


export default function Index({ events }) {

    const serviceColors = {
        "Teeth Cleaning": "#4CAF50",  // Green
        "Cavity Treatment": "#FF9800", // Orange
        "Root Canal": "#E91E63", // Pink
        "Braces Consultation": "#3F51B5", // Blue
        "Teeth Whitening": "#9C27B0", // Purple
        "Tooth Extraction": "#F44336" // Red
    };

    // const [calendarEvents, setCalendarEvents] = useState(events);
    const [calendarEvents, setCalendarEvents] = useState([
        {
            "id": "1",
            "title": "Michael",
            "start": "2025-02-22T09:00:00",
            "end": "2025-02-22T09:30:00",
            "className": "bg-soft-danger text-danger",
            "extendedProps": {
                "full_name": "Michael Johnson",
                "age": 32,
                "gender": "Male",
                "location": "New York",
                "services": ["Teeth Cleaning"]
            },
            // color: serviceColors["Root Canal"]
        },
        {
            "id": "2",
            "title": "Emily",
            "start": "2025-02-22T10:00:00",
            "end": "2025-02-22T10:30:00",
            "className": "bg-soft-info text-info",
            "extendedProps": {
                "full_name": "Emily Davis",
                "age": 28,
                "gender": "Female",
                "location": "Los Angeles",
                "services": ["Root Canal", "Braces Consultation"]
            }
        },
        {
            "id": "3",
            "title": "Daniel",
            "start": "2025-02-23T11:30:00",
            "end": "2025-02-23T12:00:00",
            "className": "bg-soft-secondary text-secondary",
            "extendedProps": {
                "full_name": "Daniel Smith",
                "age": 41,
                "gender": "Male",
                "location": "Chicago",
                "services": ["Dental Implants"]
            }
        },
        {
            "id": "4",
            "title": "Jessica",
            "start": "2025-02-24T13:00:00",
            "end": "2025-02-24T13:30:00",
            "className": "bg-soft-warning text-warning",

            "extendedProps": {
                "full_name": "Jessica Martinez",
                "age": 29,
                "gender": "Female",
                "location": "Houston",
                "services": ["Teeth Whitening", "Tooth Extraction"]
            }
        },
        {
            "id": "5",
            "title": "Christopher",
            "start": "2025-02-25T15:00:00",
            "end": "2025-02-25T15:30:00",
            "extendedProps": {
                "full_name": "Christopher Brown",
                "age": 38,
                "gender": "Male",
                "location": "Phoenix",
                "services": ["Teeth Cleaning"]
            }
        },
        {
            "id": "6",
            "title": "Ashley",
            "start": "2025-02-26T09:30:00",
            "end": "2025-02-26T10:00:00",
            "extendedProps": {
                "full_name": "Ashley Wilson",
                "age": 30,
                "gender": "Female",
                "location": "Philadelphia",
                "services": ["Braces Consultation"]
            }
        },
        {
            "id": "7",
            "title": "Matthew",
            "start": "2025-02-27T12:00:00",
            "end": "2025-02-27T12:30:00",
            "className": "fc-event-danger",
            "extendedProps": {
                "full_name": "Matthew Anderson",
                "age": 45,
                "gender": "Male",
                "location": "San Antonio",
                "services": ["Root Canal"]
            }
        },
        {
            "id": "8",
            "title": "Sarah",
            "start": "2025-02-28T14:30:00",
            "end": "2025-02-28T15:00:00",
            "extendedProps": {
                "full_name": "Sarah Thomas",
                "age": 37,
                "gender": "Female",
                "location": "San Diego",
                "services": ["Dental Surgery"]
            }
        },
        {
            "id": "9",
            "title": "James",
            "start": "2025-03-01T16:00:00",
            "end": "2025-03-01T16:30:00",
            "extendedProps": {
                "full_name": "James White",
                "age": 50,
                "gender": "Male",
                "location": "Dallas",
                "services": ["Tooth Extraction"]
            }
        },
        {
            "id": "10",
            "title": "Megan",
            "start": "2025-03-01T11:00:00",
            "end": "2025-03-02T11:30:00",
            "extendedProps": {
                "full_name": "Megan Harris",
                "age": 26,
                "gender": "Female",
                "location": "San Jose",
                "services": ["Teeth Whitening"]
            }
        }
    ]
    );

    // const hexToRgbA = (hex, opacity) => {
    //     let c;
    //     if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    //         c = hex.substring(1).split('');
    //         if (c.length === 3) {
    //             c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    //         }
    //         c = `0x${c.join('')}`;
    //         return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
    //     }
    //     throw new Error('Bad Hex');
    // };


    const renderEventContent = (eventInfo) => {
        const { extendedProps, title, backgroundColor, start, end } = eventInfo.event;
        const { location, services } = extendedProps;
        const bgColor = backgroundColor + '10';
        const startTime = new Date(start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
        const endTime = new Date(end).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });

        return (
            <div className="custom-event text-truncate" style={{
                // backgroundColor: eventInfo.event.backgroundColor,
                // borderRadius: "4px",
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
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                // initialView='timeGridWeek'
                selectable={false}
                events={calendarEvents}
                select={handleDateSelect}
                contentClassNames="fullcalendar-custom"
                eventClick={handleEventClick}
                eventContent={renderEventContent}
                themeSystem="bootstrap5"
                initialDate={new Date()} // Set today's date as starting point
                // initialView="timeGridDay"
                slotMinTime="08:00:00" // Start time for day view
                slotMaxTime="18:00:00" // End time for day view
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