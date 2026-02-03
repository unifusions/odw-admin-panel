<?php

namespace App\Mail;

use App\Models\SecondOpinion;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;


// to be deleted
class SecondOpinionRequested extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

   public  $title = [
    'replied' => "Your Second Opinion is Ready",
    'requested' => "Second Opinion Request Received"
    ];

    public function __construct(public SecondOpinion $secondopinion, public string $type)
    {
      
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "ODW : {$this->title[$this->type]} ",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.secondopinion.sonotification',
            with : ['secondopinion' , $this->secondopinion]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
