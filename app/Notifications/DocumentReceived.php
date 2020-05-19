<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Entities\Document;

class DocumentReceived extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * @var Document
     */
    protected $document;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Document $document)
    {
        $this->document = $document;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line($this->document->type->name)
                    ->line('Trích yếu: '. $this->document->abstract)
                    ->action('Xem', $this->getUrlToDocument());
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'title' => $this->document->type->name,
            'content' => $this->document->abstract,
            'url' => $this->getUrlToDocument(),
        ];
    }

    protected function getUrlToDocument(){
        return url('/documents/'.$this->document->id);
    }
}
