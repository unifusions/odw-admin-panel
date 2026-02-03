@php $title = "ODW : Appointment has been {{ $type ?? '' }} "; @endphp
@extends('mail.layout')
@section('content')

 
              <p style="font-size:15px; margin-top:0; text-align:center">
                Dear <strong>{{ $appointment->patient->first_name ?? ''}}</strong>,
              </p>

              <p style="font-size:40px;">
                 @if($type == "confirmed") Great news — @endif Your appointment has been {{ $type }}.
                
              </p>

              {{ $appointment->provider }}
              <!-- Appointment Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border:1px solid #e5e7eb; border-radius:4px; margin:20px 0;">
                <tr>
                  <td style="padding:15px;">
                    <p style="margin:6px 0;"><strong>Date:</strong> {{ $appointment->appointment_date ??'' }}</p>
                    <p style="margin:6px 0;"><strong>Time:</strong> {{ $appointment->time_slot ?? ''}}</p>
                    <p style="margin:6px 0;"><strong>Dentist/Specialist:</strong> {{ $appointment->appointable->name ?? ''}}</p>
                    <p style="margin:6px 0;"><strong>Clinic:</strong> {{ $appointment->clinic->name ??'' }}</p>
                  </td>
                </tr>
              </table>

               <p style="text-align: center; font-size: 18px; color: #555;">
        Please arrive 10 minutes early. Let us know if you need to reschedule.

    </p>

              <!-- CTA Button -->
              



@endsection