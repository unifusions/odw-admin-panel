<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;


use NotificationChannels\Apn\ApnChannel;
use NotificationChannels\Apn\ApnMessage;
use NotificationChannels\Fcm\FcmChannel;
use NotificationChannels\Fcm\FcmMessage;
use NotificationChannels\Fcm\Resources\Notification as FcmNotification; 
class EstimateReplyPushNotification extends Notification
{
    use Queueable;
 

      public $title;
    public $body;

    public function __construct()
    {
         $this->title =  "Estimate is Ready";
    $this->body = "Your Estimate is now available. You can log in to the app and review your personalized feedback from our dental team.";
  
    }

   
    public function via(object $notifiable): array
    {
          $channels = [];
        if (!empty($notifiable->fcm_token)) {
            $channels[] = FcmChannel::class;
        }

        if (!empty($notifiable->apn_token)) {
            $channels[] = ApnChannel::class;
        }

        return $channels;
    }
public function toApn($notifiable)
    {
        if ($notifiable->platform !== 'ios') {
            return null;
        }

        return ApnMessage::create()
            ->title($this->title)
            ->body($this->body)
            ->sound('default')
            ->badge(1);
    }

    public function toFcm($notifiable)
    {
        if ($notifiable->platform !== 'android') {
            return null;
        }

        return (new FcmMessage(notification: new FcmNotification(
            title: $this->title,
            body: $this->body,

        )))
            ->data(['data1' => 'value', 'data2' => 'value2'])
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
    }    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
