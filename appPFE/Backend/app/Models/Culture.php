<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Culture extends Model
{
    use HasFactory;

    protected $fillable = [
        'categorie',
        'conditions_climatiques',
        'date_installation',
        'date_recolte',
        'date_semis',
        'installation_remarques',
        'methods_installation',
        'nom',
        'plan_fertilisation',
        'superficie',
        'type_sol',
        'user_id'
    ];

    public $timestamps = false;

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function operations()
    {
        return $this->hasMany(Operation::class);
    }

    public function recoltes()
    {
        return $this->hasMany(Recolte::class);
    }
}