@php 

    $subjectTitle = [
    'replied' => "Your Second Opinion is Ready",
    'requested' => "Second Opinion Request Received"
    ];

    $message = [
        'replied' => "our second opinion is now available. You can log in to the app and review your personalized feedback from our dental team. Go to 'My second opinions' and tap your case to view it.",
        'requested' => "Thanks for submitting your treatment plan for a second opinion. Our team is reviewing the information.  You’ll be notified once your review is complete. You can check the status anytime in the 'My Estimates' tab. This review is informational and not a substitute for in-person clinical evaluation."
    ];

    $title = $subjectTitle[$type];
  @endphp
@extends('mail.layout')
@section('content')

 
              <p style="font-size:15px; margin-top:0; text-align:center">
                Hi <strong>{{ $secondopinion->patient->first_name ?? ''}}</strong>,
              </p>

              <p style="font-size:40px;">
                {{ $title  }}
                
              </p>
 
             

               <p style="text-align: center; font-size: 18px; color: #555;">
       {{ $message[$type] }}

    </p>

              <!-- CTA Button -->
              



@endsection