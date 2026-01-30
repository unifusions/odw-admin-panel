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
class AppointmentConfirmedPushNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
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
        $channels = [];

        // ANDROID device
        if (
            
            !empty($notifiable->fcm_token)
        ) {
            $channels[] =  FcmChannel::class;
        }

        // IOS device
        if (
            
            !empty($notifiable->apn_token)
        ) {
            $channels[] =  ApnChannel::class;
        }

        return $channels;
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toApn($notifiable)
    {
        if ($notifiable->platform !== 'ios') {
            return null;
        }

        return ApnMessage::create()
            ->title('Appointment Confirmed')
            ->body('Your appointment is confirmed ✅')
            ->sound('default')
            ->badge(1);
    }
    
    public function toFcm($notifiable)
    {
        if ($notifiable->platform !== 'android') {
            return null;
        }

       return (new FcmMessage(notification: new FcmNotification(
            title: 'Appointment Confirmed',
            body: 'Your appointment is confirmed ✅',
           
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
    }
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
