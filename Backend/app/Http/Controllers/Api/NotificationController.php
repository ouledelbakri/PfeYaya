<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    // Get user notifications
    public function index()
    {
        return response()->json(auth()->user()->notifications);
    }

    // Mark as read
    public function update(Request $request, Notification $notification)
    {
        $notification->update(['lu' => true]);
        return response()->json($notification);
    }
}