@php $title = 'ODW : Second Opinion Closed'; @endphp
@extends('mail.layout')
@section('content')
<h2 style="text-align: center; font-weight: 700;">Your Second Opinion is Ready</h2>
<p style="text-align: center; font-size: 14px; color: #555;">
    Hi {{ $patientname }}
</p>


<p style="text-align: center; font-size: 14px; color: #555;">
    Your second opinion is now available. You can log in to the app and review your personalized feedback from our dental team.
</p>
<p style="text-align: center; font-size: 14px; color: #555;">
    Go to 'My second opinions' and tap your case to view it.

</p>

 
@endsection