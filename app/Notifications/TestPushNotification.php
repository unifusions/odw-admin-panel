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

class TestPushNotification extends Notification
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
        return [ApnChannel::class, FcmChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     */

    public function toApn($notifiable)
    {


        \Log::error('🔥 toApn() EXECUTED 🔥', [
            'device_id' => $notifiable->id,
            'token_length' => strlen($notifiable->fcm_token ?? ''),
        ]);

        return ApnMessage::create()
            ->badge(5)->sound('default')
            ->title('Test Notification')
            ->body('This is a test notification from Laravel!');


    }

    public function toFcm($notifiable)
    {
        return (new FcmMessage(notification: new FcmNotification(
            title: 'Account Activated',
            body: 'Your account has been activated.',
           
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

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
