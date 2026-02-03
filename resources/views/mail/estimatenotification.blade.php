@php 

    $subjectTitle = [
    'replied' => "Your Estimate is Ready",
    'requested' => "Your Estimate Request Has Been Submitted"
    ];

    $message = [
        'replied' => "Your dental estimate is ready! Open the app to review your estimated treatment costs and next steps. Log in and go to 'My Estimates' to view the details.",
        'requested' => "Thanks for submitting your estimate request. Our team is reviewing your information. What’s next? You'll receive your personalized cost estimate soon. We'll notify you as soon as it's ready. You can track your request in the 'My Estimates' section of the app."
    ];

    $title = $subjectTitle[$type];
  @endphp
@extends('mail.layout')
@section('content')

 
              <p style="font-size:15px; margin-top:0; text-align:center">
                Hi <strong>{{ $estimate->patient->first_name ?? ''}}</strong>,
              </p>

              <p style="font-size:40px;">
                {{ $title  }}
                
              </p>
 
             

               <p style="text-align: center; font-size: 18px; color: #555;">
       {{ $message[$type] }}

    </p>

              <!-- CTA Button -->
              



@endsection