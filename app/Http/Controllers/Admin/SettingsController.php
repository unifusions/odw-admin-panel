<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{

    public function index($group = 'web')
    {
        $settings = Setting::where('group', $group)->get();
        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
            'group'    => $group,
        ]);
    }
    // public function index() {


    //     return Inertia::render('Admin/Settings/Index', []);
    // }

    public function update(Request $request, $group = 'web')
    {

        $settings = Setting::where('group', $group)->get();

        foreach ($settings as $setting) {
            $value = $request->input("settings.{$setting->key}");

            // 🚀 Handle file uploads
            if ($setting->type === 'file' && $request->hasFile("settings.{$setting->key}")) {
                $path = $request->file("settings.{$setting->key}")
                    ->store("settings/{$group}", 'public');
                $value = $path;
            }

            // 🚀 Convert JSON arrays/objects back into string for storage
            if ($setting->type === 'json' && is_array($value)) {
                $value = json_encode($value);
            }

            $setting->update(['value' => $value]);
        }


        return redirect()->back()->with('success', 'Settings updated successfully!');
    }

    public function settingsApi()
    {
        return response()->json([
            'settings' => Setting::where('group','mobile')->get(),
        ]);
    }
}
