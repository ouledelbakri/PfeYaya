<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OperationFinance extends Model
{
    use HasFactory;

    protected $fillable = [
        'cout_produit',
        'cout_main_oeuvre',
        'cout_equipement',
        'autres_couts',
        'operation_id'
    ];

    public $timestamps = false;

    public function operation()
    {
        return $this->belongsTo(Operation::class);
    }
}