import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head, router, usePage } from '@inertiajs/react';



import { useState, useEffect, useRef } from 'react';


import "@fullcalendar/bootstrap5"; // FullCalendar Bootstrap 5 plugin
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import Breadcrumbs from '@/Components/Breadcrumbs';
import PendingAppointments from './PendingAppointments';
import SOStatus from '@/Components/SOStatus';

const FlexRowItem = ({ icon, value }) => {
    return <div className='d-flex mb-4'>
        <i className={`bi bi-${icon} nav-icon`} ></i>
        <div className="flex-grow-1">
            <span className="d-block text-dark">{value}</span>
        </div>
    </div>
}
export default function Index({ appointments, pendingAppointments, activeYear, activeMonth }) {

    const { auth } = usePage().props;
    const role = auth.user.role; // super_admin, clinic_admin, clinic_user

    let routeName = 'appointments.index';
    if (role === 'clinic_admin') routeName = 'clinic.appointments.index';
    if (role === 'clinic_user') routeName = 'clinic.user.appointments.index';


    const [currentDate, setCurrentDate] = useState(
        new Date(activeYear, activeMonth - 1, 1) // backend date
    );
    const [selectedEvent, setSelectedEvent] = useState(null);
    const statusColors = {
        pending: "#f5ca99",   // amber
        cancelled: "#ed4c78", // red
        confirmed: "#00c9a7", // green
    };
    const handleDatesSet = (info) => {
        const newDate = info.view.currentStart;

        const sameMonth =
            currentDate.getFullYear() === newDate.getFullYear() &&
            currentDate.getMonth() === newDate.getMonth();

        if (!sameMonth) {
            setCurrentDate(newDate);
            router.get(route(routeName)
                ,
                { year: newDate.getFullYear(), month: newDate.getMonth() + 1 },
                {
                    only: ["appointments", "activeYear", "activeMonth", "pendingAppointments"],
                    preserveState: true,
                    preserveScroll: true,
                    replace: true,
                }
            );
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Format: Tuesday, December 01, 2005
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
        }).format(date);

        // Format: Time: 16:00 (24hr format)
        const formattedTime = `at ${date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        })} Hrs`;

        return `${formattedDate}\n${formattedTime}`;
    };

    const renderEventContent = (eventInfo) => {
        const { id, title, start, end, moreInfo } = eventInfo.event;
        const startTime = new Date(start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
        const endTime = end ? new Date(end).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }) : "";
        const status = eventInfo.event.extendedProps.status || eventInfo.event._def.extendedProps?.status;


        return (
            <div className="  custom-event rounded  ">

                <strong className='text-dark'>{title}</strong>
                <div className="text-dark fs-10">{startTime} {endTime && `- ${endTime}`}</div>
            </div>
        );
    };

    const handleEventClick = (clickInfo) => {
        setSelectedEvent({
            id: clickInfo.event.id,
            title: clickInfo.event.title,
            start: clickInfo.event.start.toLocaleString(),
            end: clickInfo.event.end ? clickInfo.event.end.toLocaleString() : "N/A",
            moreInfo: clickInfo.event.extendedProps
        });
        // old modal code
        const eventModal = new window.bootstrap.Modal(document.getElementById("eventModal"));
        eventModal.show();

        //     const existingPopover = bootstrap.Popover.getInstance(clickInfo.el);
        //     if (existingPopover) {
        //         existingPopover.dispose();
        //     }
        //     const content = `
        //     <div>
        //         <div class="mb-2 d-flex align-items-center">
        //             <strong>Patient:</strong>&nbsp; ${clickInfo.event.title}
        //         </div>
        //         <div class="mb-2"><strong>Category:</strong> ${clickInfo.event.extendedProps?.services?.name || ''}</div>
        //         <div class="mb-2"><strong>Date & Time:</strong> ${clickInfo.event.start.toLocaleString()}</div>
        //         <div class="mb-2"><strong>Clinic:</strong> ${clickInfo.event.extendedProps?.clinic?.name || ''}</div>
        //         <div class="mb-2"><strong>Dentist:</strong> ${clickInfo.event.extendedProps?.dentist?.name || ''}</div>
        //         <div class="d-flex justify-content-end mt-3">
        //             <button type="button" class="btn btn-sm btn-secondary me-2" id="closePopover">Close</button>
        //             <button type="button" class="btn btn-sm btn-primary">Edit</button>
        //         </div>
        //     </div>
        // `;


        // const popover = new bootstrap.Popover(clickInfo.el, {
        //     container: "body",
        //     html: true,
        //     trigger: "manual",
        //     placement: "auto",
        //     sanitize: false,
        //     content: content
        // });

        // popover.show();

        // setTimeout(() => {
        //     const closeBtn = document.getElementById("closePopover");
        //     if (closeBtn) {
        //         closeBtn.addEventListener("click", () => {
        //             popover.dispose();
        //         });
        //     }
        // }, 50);
    };


    // Create popover content dynamically

    return (
        <AuthenticatedLayout header="Appointments">
            <Head title="Appointments" />


            {pendingAppointments > 0 && (
                <PendingAppointments pendingEvents={pendingAppointments} />
            )}

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
                themeSystem="bootstrap5"
                initialView="dayGridMonth"
                initialDate={currentDate}
                events={appointments}
                datesSet={handleDatesSet}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                selectable={false}
                slotMinTime="00:00:00"
                slotMaxTime="23:59:00"

                eventDidMount={(info) => {
                    const status = info.event.extendedProps.status;
                    const bgColor = statusColors[status] || "#f5ca99";

                    // style the parent container
                    info.el.style.backgroundColor = bgColor;
                    info.el.style.borderColor = bgColor;
                    // info.el.style.color = "#fff"; // ensure text contrast

                }}

            />

            {/* Event Modal */}
            <div className="modal fade" id="eventModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className='d-flex align-items-center'>
                                <h3 className="modal-title me-3">Appointment # {selectedEvent?.id}</h3>
                                <SOStatus status={selectedEvent?.moreInfo?.status} />

                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">




                            <FlexRowItem icon="person-circle" value={selectedEvent?.title} />
                            {selectedEvent?.moreInfo?.provider?.type === 'Dentist' && <FlexRowItem icon="capsule" value={selectedEvent?.moreInfo?.services?.name} />}
                            {/* <FlexRowItem icon="clock" value={formatDate(selectedEvent?.start)} /> */}
                            <FlexRowItem icon="pin-map" value={selectedEvent?.moreInfo?.clinic?.name} />




                            <div className="d-flex ">
                                <div class="avatar avatar-xs avatar-circle me-2">
                                    <img class="avatar-img" src={selectedEvent?.moreInfo?.dentist?.photo_url} />
                                </div>
                                <div className="flex-grow-1 d-flex">
                                    <span className="d-block text-dark me-2">{selectedEvent?.moreInfo?.provider?.name}

                                    </span>
                                    <span class={`badge ${selectedEvent?.moreInfo?.provider?.type === 'Dentist' ? 'bg-soft-primary text-primary' :
                                        'bg-soft-info text-info'}`}>{selectedEvent?.moreInfo?.provider?.type}</span>

                                </div>
                            </div>






                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// <div class="popover fullcalendar-event-popover bs-popover-auto fade show" role="tooltip" id="popover702382" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(296px, 572px);" data-popper-placement="bottom">
{/* <div class="arrow"></div>
  								
<div class="popover-body"><h3 class="mb-4">Complete Figma course: Go from zero to hero in Figma</h3>

<div class="d-flex mb-4">
<i class="bi bi-clock nav-icon"></i>
<div class="flex-grow-1">
<span class="d-block text-dark mb-2">Sunday, December 06 - Tuesday, December 08</span>
<span class="d-block">Repeat: <span class="text-dark text-capitalize">never</span></span>
</div>
</div>

<div class="d-flex mb-4">
<i class="bi bi-people nav-icon"></i>
<div class="flex-grow-1">
<span class="d-block text-dark"><ul class="list-unstyled mb-0"><li class="d-flex align-items-center mb-2">

<div class="avatar avatar-xs avatar-soft-primary avatar-circle me-2">
<span class="avatar-initials">B</span>
</div>

<span>Bob Dean</span>
</li><li class="d-flex align-items-center mb-2">
<img class="avatar avatar-xs avatar-circle me-2" src="./assets/img/160x160/img9.jpg">
<span>Ella Lauda</span>
</li><li class="d-flex align-items-center mb-2">

<div class="avatar avatar-xs avatar-soft-primary avatar-circle me-2">
<span class="avatar-initials">L</span>
</div>

<span>Lori Hunter</span>
</li><li class="d-flex align-items-center mb-2">

<div class="avatar avatar-xs avatar-soft-primary avatar-circle me-2">
<span class="avatar-initials">C</span>
</div>

<span>Costa Quinn</span>
</li></ul></span>
</div>
</div>

<div class="d-flex mb-4">
<i class="bi bi-pin-map nav-icon"></i>
<div class="flex-grow-1">
<span class="d-block text-dark">Online</span>
</div>
</div>

<div class="d-flex mb-4">
<i class="bi bi-text-left nav-icon"></i>
<div class="flex-grow-1">
<span class="d-block text-dark">Learn Figma like a Professional! Start from the basics and go all the way to creating your own design!</span>
</div>
</div>

<div class="d-flex align-items-center mb-4">
<div class="avatar avatar-xs avatar-circle me-2">
<img class="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description">
</div>
<div class="flex-grow-1">
<span class="d-block text-dark">Mark Williams</span>
</div>
</div>

<div class="d-flex justify-content-end">
<a id="closePopover" class="btn btn-sm btn-white me-2">Close</a>
<a id="modal-invoker-4" class="btn btn-sm btn-primary">
<i class="bi bi-pencil"></i>
Edit
</a>
</div>
</div>
</div> */}