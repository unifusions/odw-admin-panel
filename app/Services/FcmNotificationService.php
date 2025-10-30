<?php

namespace App\Services;

use Google\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FcmNotificationService
{
    protected string $projectId;
    protected Client $client;

    public function __construct()
    {
        $this->projectId = config('services.fcm.project_id');

        $this->client = new Client();
        $this->client->setAuthConfig(storage_path('app/firebase.json'));
        $this->client->addScope('https://www.googleapis.com/auth/firebase.messaging');
    }

    public function send(string $token, string $title, string $body, array $data = []): bool
    {
        try {
            $accessToken = $this->client->fetchAccessTokenWithAssertion()['access_token'];

            $payload = [
                'message' => [
                    'token' => $token,
                    'notification' => [
                        'title' => $title,
                        'body' => $body,
                    ],
                    'android' => [
                        'priority' => 'high',
                        'notification' => [
                            'sound' => 'default',
                            'channel_id' => 'default',
                        ],
                    ],
                    'apns' => [
                        'payload' => [
                            'aps' => [
                                'sound' => 'default',
                                'content-available' => 1,
                            ],
                        ],
                    ],
                    'data' => $data,
                ],
            ];

            $response = Http::withToken($accessToken)
                ->post("https://fcm.googleapis.com/v1/projects/{$this->projectId}/messages:send", $payload);

            if ($response->failed()) {
                Log::error('❌ FCM v1 send failed: ' . $response->body());
                return false;
            }

            Log::info('✅ FCM sent: ' . json_encode($response->json()));
            return true;
        } catch (\Throwable $e) {
            Log::error('🔥 FCM Exception: ' . $e->getMessage());
            return false;
        }
    }
}
