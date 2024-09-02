<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\Students\AdmissionController;
use App\Http\Controllers\Students\AttendanceController;
use App\Http\Controllers\Students\DisciplineController;
use App\Http\Controllers\Students\ProfilesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Grouping routes that require authentication
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('student/admission', [AdmissionController::class, 'index'])->name('student.admission');
    Route::get('student/profiles', [ProfilesController::class, 'index'])->name('student.profiles');
    Route::get('student/attendance', [AttendanceController::class, 'index'])->name('student.attendance');
    Route::get('student/discipline', [DisciplineController::class, 'index'])->name('student.discipline');

    Route::get('/settings', [SettingsController::class, 'index'])->name('settings');
});


// Guest Routes
Route::middleware(['guest'])->group(function () {
    Route::get('/login', [AuthController::class, 'index'])->name('login');
    Route::post('/login', [AuthController::class, 'store'])->name('login.store');

});
