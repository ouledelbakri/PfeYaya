<?php

namespace App\Http\Controllers\Api;

use App\Models\Operation;
use Illuminate\Http\Request;

class OperationFinanceController extends Controller
{
    // Attach costs to operation
    public function store(Request $request, Operation $operation)
    {
        $this->authorize('update', $operation->culture);

        $data = $request->validate([
            'cout_produit' => 'required|numeric',
            'cout_main_oeuvre' => 'required|numeric',
            'cout_equipement' => 'required|numeric'
        ]);

        return response()->json($operation->finance()->create($data), 201);
    }
}