<?php

namespace App\Observers;

use App\Entities\DocumentReceiver;
use App\Notifications\DocumentReceived;

class ReceiverObserver
{
    /**
     * Handle the document receiver "created" event.
     *
     * @param  \App\Entities\DocumentReceiver  $documentReceiver
     * @return void
     */
    public function created(DocumentReceiver $documentReceiver)
    {
        $documentReceiver->user->notify(new DocumentReceived($documentReceiver->document));
    }

    /**
     * Handle the document receiver "updated" event.
     *
     * @param  \App\Entities\DocumentReceiver  $documentReceiver
     * @return void
     */
    public function updated(DocumentReceiver $documentReceiver)
    {
        //
    }

    /**
     * Handle the document receiver "deleted" event.
     *
     * @param  \App\Entities\DocumentReceiver  $documentReceiver
     * @return void
     */
    public function deleted(DocumentReceiver $documentReceiver)
    {
        //
    }

    /**
     * Handle the document receiver "restored" event.
     *
     * @param  \App\Entities\DocumentReceiver  $documentReceiver
     * @return void
     */
    public function restored(DocumentReceiver $documentReceiver)
    {
        //
    }

    /**
     * Handle the document receiver "force deleted" event.
     *
     * @param  \App\Entities\DocumentReceiver  $documentReceiver
     * @return void
     */
    public function forceDeleted(DocumentReceiver $documentReceiver)
    {
        //
    }
}
