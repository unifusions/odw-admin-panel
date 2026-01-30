<?php

namespace App\Notifications;

use App\Models\Appointment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Apn\ApnChannel;
use NotificationChannels\Apn\ApnMessage;
use NotificationChannels\Fcm\FcmChannel;
use NotificationChannels\Fcm\FcmMessage;

class AppointmentConfirmedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(     protected Appointment $appointment)
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
        return ['mail', FcmChannel::class,
            ApnChannel::class,];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    public function toFcm($notifiable)
    {
        if ($notifiable->platform !== 'android') {
            return null;
        }

        return FcmMessage::create()
            ->setNotification([
                'title' => 'Appointment Confirmed',
                'body'  => 'Your appointment is confirmed ✅',
            ])
            ->setData([
                'type' => 'appointment_confirmed',
                'appointment_id' => (string) $this->appointment->id,
            ]);
    }
    
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
