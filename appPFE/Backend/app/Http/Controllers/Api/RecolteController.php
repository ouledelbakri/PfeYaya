<?php

namespace App\Http\Controllers\Api;

use App\Models\Culture;
use Illuminate\Http\Request;

class RecolteController extends Controller
{
    // Record harvest
    public function store(Request $request, Culture $culture)
    {
        $this->authorize('update', $culture);

        $data = $request->validate([
            'date_recolte' => 'required|date',
            'quantite' => 'required|numeric',
            'prix_vente' => 'required|numeric'
        ]);

        // Auto-calculate profit
        $data['benefice'] = ($data['quantite'] * $data['prix_vente']) - $culture->totalCosts();

        return response()->json($culture->recoltes()->create($data), 201);
    }
}