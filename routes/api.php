<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectTypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/logout', [AuthController::class, 'logout'])->name('auth.logout');

    // PROJECT TYPE
    Route::get('/project-type/list', [ProjectTypeController::class, 'getList'])->name('project.type.list');
});

Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
