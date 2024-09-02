<?php

namespace App\Http\Controllers\Students;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilesController extends Controller
{
    public function index()
    {
        return Inertia::render('Modules/Students/Profiles');
    }
}
