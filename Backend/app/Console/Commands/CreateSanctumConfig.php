<?php

namespace App\Console\Commands;

use Illuminate\Console\Command; // Correct namespace for the Command class
use Illuminate\Support\Facades\File;

class CreateSanctumConfig extends Command
{
    protected $signature = 'sanctum:config';
    protected $description = 'Create sanctum config file';

    public function handle()
    {
        // Logic for creating the Sanctum config file
    }
}