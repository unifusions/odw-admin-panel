<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class Setting extends Model
{
    protected $fillable = ['key', 'value', 'type', 'group'];
    public $appends = ['file_url'];
    public static function get($key, $default = null)
    {
        return Cache::rememberForever("setting_{$key}", function () use ($key, $default) {
            $setting = self::where('key', $key)->first();
            if (!$setting) return $default;

            return match ($setting->type) {
                'boolean' => filter_var($setting->value, FILTER_VALIDATE_BOOLEAN),
                'json'    => json_decode($setting->value, true),
                'number'  => (float) $setting->value,
                default   => $setting->value,
            };
        });
    }

    public static function set($key, $value, $type = 'string', $group = 'general')
    {
        $val = is_array($value) ? json_encode($value) : $value;

        $setting = self::updateOrCreate(
            ['key' => $key],
            ['value' => $val, 'type' => $type, 'group' => $group]
        );

        Cache::forget("setting_{$key}");

        return $setting;
    }

    public static function byGroup($group)
    {
        return self::where('group', $group)->get()->mapWithKeys(function ($item) {
            return [$item->key => match ($item->type) {
                'boolean' => filter_var($item->value, FILTER_VALIDATE_BOOLEAN),
                'json'    => json_decode($item->value, true),
                'number'  => (float) $item->value,
                default   => $item->value,
            }];
        });
    }

    public function getFileUrlAttribute()
    {
        if ($this->type === 'file') {
            if (!$this->value) {
                return null;
            }
            return Storage::disk('public')->url($this->value);
        }

        return null;
    }
}
