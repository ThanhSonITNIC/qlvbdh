<?php

namespace App\Observers;

use App\Entities\User;
use Hash;

class UserObserver
{
    /**
     * Handle the user "created" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function created(User $user)
    {
        //
    }

    /**
     * Handle the user "updating" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function updating(User $user)
    {
        if($user->isDirty('password')){
            $user->password = Hash::make($user->password);
        }
    }

    /**
     * Handle the user "deleted" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the user "restored" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the user "force deleted" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
