<?php

use App\Http\Controllers\Webhook\VapiController;

Route::get('webhook/vapi', [VapiController::class, 'handle']);
Route::get('webhook/vapi/calls', [VapiController::class,'syncCalls']);