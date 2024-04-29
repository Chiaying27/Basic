<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);
Route::get('/post', [PostController::class, 'index'])->name('post');
Route::get('/post/create', [PostController::class, 'create_post'])->name('create_post');
Route::post('/post/store', [PostController::class, 'store_post'])->name('store_post');
Route::get('/post/view/{post:uuid}', [PostController::class, 'view_post'])->name('view_post');
Route::get('/post/delete/{post:uuid}', [PostController::class, 'delete_post'])->name('delete_post');
Route::get('/post/edit/{post:uuid}', [PostController::class, 'edit_post'])->name('edit_post');
Route::post('/post/update/{post:uuid}', [PostController::class, 'update_post'])->name('update_post');




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
