<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(\App\Contracts\Repositories\UserRepository::class, \App\Repositories\Eloquents\UserRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\DepartmentRepository::class, \App\Repositories\Eloquents\DepartmentRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\PublisherRepository::class, \App\Repositories\Eloquents\PublisherRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\BookRepository::class, \App\Repositories\Eloquents\BookRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\DocumentTypeRepository::class, \App\Repositories\Eloquents\DocumentTypeRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\DocumentRepository::class, \App\Repositories\Eloquents\DocumentRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\DocumentReceiverRepository::class, \App\Repositories\Eloquents\DocumentReceiverRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\TitleRepository::class, \App\Repositories\Eloquents\TitleRepositoryEloquent::class);
        //:end-bindings:
    }
}
