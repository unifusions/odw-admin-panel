<?php

namespace App\Notifications;

use App\Mail\EstimateStatusMail;
use App\Models\Estimate;
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

class EstimateNotification extends Notification
{
    use Queueable;

  public  $title = [
    'replied' => "Your Estimate is Ready!",
    'requested' => "Your Estimate Request Has Been Submitted"
    ];

    public $message = [
        'replied' => "Your dental estimate is ready! Open the app to review your estimated treatment costs and next steps",
        'requested' => "You'll receive your personalized cost estimate soon. We'll notify you as soon as it's ready.You can track your request in the My Estimates section of the app."
    ];    public function __construct(public Estimate $estimate, public string $type)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
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
    public function toMail(object $notifiable) 
    {
     return (new EstimateStatusMail($this->estimate, $this->type,
            ))->to($notifiable->email);
    }

    
     public function toFcm($notifiable) 
    {
        if ($notifiable->platform !== 'android') {
            return null;
        }

        return (new FcmMessage(notification: new FcmNotification(
            title:$this->title[$this->type],
            body:$this->message[$this->type]

        )))->custom([
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

     public function toTwilio($notifiable)
    {
        
        return (new TwilioSmsMessage())
            ->content($this->message[$this->type]);
    }


    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
