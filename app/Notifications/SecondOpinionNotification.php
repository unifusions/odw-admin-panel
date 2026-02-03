<?php

namespace App\Notifications;

use App\Mail\SecondOpinionReplied;
use App\Mail\SecondOpinionRequested;
use App\Models\SecondOpinion;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Apn\ApnChannel;
use NotificationChannels\Apn\ApnMessage;
use NotificationChannels\Fcm\FcmChannel;


use NotificationChannels\Fcm\FcmMessage;
use NotificationChannels\Fcm\Resources\Notification as FcmNotification;
use NotificationChannels\Twilio\TwilioChannel;
use NotificationChannels\Twilio\TwilioSmsMessage;
class SecondOpinionNotification extends Notification
{
    use Queueable;

    public  $title = [
    'replied' => "Your Second Opinion is Ready",
    'requested' => "Second Opinion Request Received"
    ];

    public $message = [
        'replied' => "Your second opinion is now available. You can log in to the app and review your personalized feedback from our dental team.",
        'requested' => "Thanks for submitting your treatment plan for a second opinion. Our team is reviewing the information."
    ];
    public function __construct(public SecondOpinion $secondopinion, public string $type)
    {
        //
    }


    public function via(object $notifiable): array
    {
        $channels = ['database'];

        if (!empty($notifiable->email)) {
            $channels[] = 'mail';
        }

        if (!empty($notifiable->phone)) {
            $channels[] = TwilioChannel::class;
        }


        // ANDROID device
        if (!empty($notifiable->fcm_token)) {
            $channels[] = FcmChannel::class;
        }

        // IOS device
        if (!empty($notifiable->apn_token)) {
            $channels[] = ApnChannel::class;
        }

        return $channels;
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toDatabase(object $notifiable)
    {
        return [
            'type' => $this->type,
            'title' => $this->title[$this->type] ,
            'message' =>$this->message[$this->type],
            'action_url' => '/second-opinions',
        ];
    }
    public function toMail(object $notifiable)
    {
        
            return (new SecondOpinionRequested(
                $this->secondopinion,
               $this->type,
            ))->to($notifiable->email);

        

    }


    public function toApn($notifiable)
    {
        if ($notifiable->platform !== 'ios') {
            return null;
        }

        return ApnMessage::create()
            ->title($this->title[$this->type])
            ->body($this->message[$this->type])
            ->sound('default')
            ->badge(1);
    }

    public function toFcm($notifiable)
    {
        if ($notifiable->platform !== 'android') {
            return null;
        }

        return (new FcmMessage(notification: new FcmNotification(
            title:$this->title[$this->type],
            body:$this->message[$this->type]

        )))

            ->custom([
                'android' => [
                    'notification' => [
                        'channel_id' => 'default',
                        'sound' => 'default',
                        'notification_priority' => 'PRIORITY_MAX',
                        'default_sound' => true,
                        'default_vibrate_timings' => true,
                    ],
                    'fcm_options' => [
                        'analytics_label' => 'analytics',
                    ],
                ],

            ]);
    }



    public function toTwilio($notifiable)
    {
        $messages = [
            'replied' => "Your second opinion is now available. You can log in to the app and review your personalized feedback from our dental team.",
            'requested' => "Thanks for submitting your treatment plan for a second opinion. Our team is reviewing the information."
        ];
        return (new TwilioSmsMessage())
            ->content($messages[$this->type]);
    }

    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
