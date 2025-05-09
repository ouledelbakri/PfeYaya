<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'password',
        'role',
        'telephone',
        'two_factor_secret'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_secret',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'role' => 'string',
    ];

    // Relationships
    public function cultures()
    {
        return $this->hasMany(Culture::class);
    }

    public function exports()
    {
        return $this->hasMany(Export::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    public function operations()
    {
        return $this->hasManyThrough(Operation::class, Culture::class);
    }

    // Business Logic
    public function isAgriculteur(): bool
    {
        return $this->role === 'agriculteur';
    }

    public function createMobileToken()
    {
        return $this->createToken('mobile', ['cultures:manage'])->plainTextToken;
    }
}