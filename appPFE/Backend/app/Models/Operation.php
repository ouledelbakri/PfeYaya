<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Operation extends Model
{
    use HasFactory;

    protected $fillable = [
        'culture_id',
        'date_operation',
        'dose',
        'equipment',
        'produit_utilise',
        'remarques',
        'technique',
        'type_operation'
    ];

    public $timestamps = false;

    // Relationships
    public function culture()
    {
        return $this->belongsTo(Culture::class);
    }

    public function finance()
    {
        return $this->hasOne(OperationFinance::class);
    }
}