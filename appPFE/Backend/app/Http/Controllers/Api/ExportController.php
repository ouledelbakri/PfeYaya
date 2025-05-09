<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class ExportController extends Controller
{
    // Request data export
    public function store(Request $request)
    {
        $data = $request->validate([
            'type_fichier' => 'required|in:excel,pdf'
        ]);

        $export = auth()->user()->exports()->create([
            'type_fichier' => $data['type_fichier'],
            'date_export' => now()
        ]);

        return response()->json($export, 202);
    }
}