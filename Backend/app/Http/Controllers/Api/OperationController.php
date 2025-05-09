<?php

namespace App\Http\Controllers\Api;

use App\Models\Culture;
use App\Models\Operation;
use Illuminate\Http\Request;

class OperationController extends Controller
{
    // Add new operation to crop
    public function store(Request $request, Culture $culture)
    {
        $this->authorize('update', $culture);

        $data = $request->validate([
            'type_operation' => 'required|in:fertilisation,irrigation,traitement',
            'date_operation' => 'required|date',
            'produit_utilise' => 'nullable|string',
            'dose' => 'nullable|numeric'
        ]);

        return response()->json($culture->operations()->create($data), 201);
    }
}