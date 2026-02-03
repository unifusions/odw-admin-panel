<?php

namespace App\Notifications;

use App\Mail\AppointmentConfirmation;
use App\Models\Appointment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Apn\ApnChannel;
use NotificationChannels\Fcm\FcmChannel;
 
 
use NotificationChannels\Fcm\FcmMessage;
use NotificationChannels\Fcm\Resources\Notification as FcmNotification;
use NotificationChannels\Twilio\TwilioChannel;
use NotificationChannels\Twilio\TwilioSmsMessage;
class AppointmentStatusPushNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(  public Appointment $appointment,
        public string $type // confirmed | rescheduled | cancelled)
    )
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
        $channels = ['database', 'mail', TwilioChannel::class];
        // ANDROID device
        if (!empty($notifiable->fcm_token)) {
            $channels[] =  FcmChannel::class;
        }

        // IOS device
        if (!empty($notifiable->apn_token)) {
            $channels[] =  ApnChannel::class;
        }

        return $channels;
        
    }

    /**
     * Get the mail representation of the notification.
     */

    public function toDatabase(object $notifiable): array
    {
        return [
            'type' => $this->type,
            'title' => "Appointment {$this->type}",
            'message' => "Your appointment is {$this->type}",
            'action_url' => '/appointments',
        ];
    }
    public function toMail(object $notifiable): MailMessage
    {

      return (new AppointmentConfirmation($this->appointment, $this->type))
        ->to($notifiable->email);
      
    }
    public function toApn($notifiable)
    {
        if ($notifiable->platform !== 'ios') {
            return null;
        }

        return ApnMessage::create()
            ->title("Appointment {$this->type}")
            ->body("Your appointment has been {$this->type}")
            ->sound('default')
            ->badge(1);
    }
    
    public function toFcm($notifiable)
    {
        if ($notifiable->platform !== 'android') {
            return null;
        }

       return (new FcmMessage(notification: new FcmNotification(
            title: "Appointment {$this->type}",
            body: "Your appointment has been {$this->type}",
           
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
        return (new TwilioSmsMessage())
            ->content("Your appointment has been {$this->type} with ODW");
    }
    

    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
