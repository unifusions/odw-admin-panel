<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use Http;
use Illuminate\Http\Request;

class VapiController extends Controller
{
    public function handle(){
        return response()->json('ok', 200);
    }

    public function syncCalls() {
       $response = Http::withHeaders([
        'Authorization' => 'Bearer ' . config('services.vapi.key'),
        'Content-Type' => 'application/json',
    ])->get('https://api.vapi.ai/call', [
        'limit' => 1,
    ]);

    if ($response->failed()) {
        return [
            'status' => $response->status(),
            'body' => $response->body(),
        ];
    }

    return $response->json();

    }
}
