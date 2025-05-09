<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recolte extends Model
{
    use HasFactory;

    protected $fillable = [
        'benefice',
        'culture_id',
        'date_recolte',
        'etat',
        'prix_vente',
        'quantite'
    ];

    public $timestamps = false;

    public function culture()
    {
        return $this->belongsTo(Culture::class);
    }
}