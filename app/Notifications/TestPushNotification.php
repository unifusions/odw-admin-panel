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
            ->badge(5)
            ->title('Test Notification')
            ->body('This is a test notification from Laravel!');
            
         
    }

    public function toFcm($notifiable)
    {
        return FcmMessage::create()
            ->setData([
                'title' => 'Hello',
                'body' => 'Message for Android',
            ])
            ->setNotification(
                \NotificationChannels\Fcm\Resources\Notification::create()
                    ->setTitle('Hello')
                    ->setBody('Message for Android')
            );
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
