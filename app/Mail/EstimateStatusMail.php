<?php

namespace App\Mail;

use App\Models\Estimate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EstimateStatusMail extends Mailable
{
    use Queueable, SerializesModels;

   public  $title = [
    'replied' => "Your Estimate is Ready",
    'requested' => "Your Estimate Request Has Been Submitted"
    ];
    public function __construct(public Estimate $estimate, public string $type)
    {
        //
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
            view: 'mail.estimatenotification',
            with: [
                'estimate' => $this->estimate,
                'type'=> $this->type
            ]
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
