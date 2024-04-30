<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\PLoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\PUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PUserController extends Controller
{
    //login  page route
    public function index()
    {
        $posts = PUser::latest()
            ->get();

        //go to the view page
        return Inertia::render('PLogin', [
            'pUser' => $posts->map(function ($pUser) {
                return [
                    "id" => $pUser->id,
                    "name" => $pUser->name,
                    "email" => $pUser->email,
                    "password" => $pUser->password,
                ];
            }),
        ]);
    }

    public function login(PLoginRequest $request)
    {
        // Validate the incoming request
        // $request->validate([
        //     'email' => 'required',
        //     'password' => 'required',
        // ]);

        $user = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        $auth = auth()->attempt($user);

        if ($auth) {
            return redirect()->route('post');
        } else {
            return back()->with([
                'message' => 'Login Failed!'
            ]);
        }
    }

    public function register()
    {
        return Inertia::render('PRegister');
    }

    public function register_user(RegisterRequest $request)
    {
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required',
        //     'password' => 'required',
        // ]);

        $user = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ];

        // Create the post using create() method
        $users = User::create($user);

        if ($users) {
            return redirect()->route('p_login')->with([
                'message' => 'User has been registered!'
            ]);
        } else {
            return back()->with('error', 'Failed to create user!');
        }
    }

    public function logout(User $user)
    {
        auth()->logout();


        return redirect()->route('p_login');
    }
}
