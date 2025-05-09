<?php

namespace App\Http\Controllers\Api;

use App\Models\Culture;
use Illuminate\Http\Request;

class CultureController extends Controller
{
    // Get all cultures for current user
    public function index()
    {
        return response()->json(auth()->user()->cultures);
    }

    // Create new crop
    public function store(Request $request)
    {
        $data = $request->validate([
            'nom' => 'required|string',
            'categorie' => 'required|in:légumes,céréales,fruits',
            'date_semis' => 'required|date',
            'date_recolte' => 'nullable|date',
            'superficie' => 'required|numeric'
        ]);

        $culture = auth()->user()->cultures()->create($data);

        return response()->json($culture, 201);
    }

    // Update planting details
    public function update(Request $request, Culture $culture)
    {
        $this->authorize('update', $culture);

        $culture->update($request->validate([
            'date_installation' => 'nullable|date',
            'methods_installation' => 'nullable|string'
        ]));

        return response()->json($culture);
    }
}