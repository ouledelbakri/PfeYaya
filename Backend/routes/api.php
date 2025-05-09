<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public routes (no auth required)
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

// Protected routes (require Sanctum auth)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'user']); 
    Route::post('/logout', [UserController::class, 'logout']);


    // Cultures
    Route::apiResource('cultures', CultureController::class);
    
    // Operations (nested under cultures)
    Route::apiResource('cultures.operations', OperationController::class)->except(['update']);
    
    // Operation finances
    Route::post('operations/{operation}/finance', [OperationFinanceController::class, 'store']);
    
    // cultures
    Route::post('cultures/{culture}/recoltes', [RecolteController::class, 'store']);
    
    // Exports
    Route::post('cultures/{culture}/exports', [ExportController::class, 'store']);
    
    // Notifications
    Route::get('notifications', [NotificationController::class, 'index']);
});