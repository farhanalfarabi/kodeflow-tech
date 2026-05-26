<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * Tampilkan halaman login.
     */
    public function showLoginForm()
    {
        // Jika user sudah login, redirect ke halaman dashboard admin
        if (Auth::check()) {
            return redirect('/admin/blogs');
        }

        return Inertia::render('Auth/Login');
    }

    /**
     * Proses request login.
     */
    public function login(Request $request)
    {
        // Validasi input email dan password
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $remember = $request->boolean('remember');

        // Coba melakukan autentikasi
        if (Auth::attempt($credentials, $remember)) {
            // Jika sukses, regenerasi session (mencegah session fixation)
            $request->session()->regenerate();

            // Redirect ke halaman admin yang dituju sebelumnya, atau ke dashboard
            return redirect()->intended('/admin/blogs');
        }

        // Jika gagal, kembalikan error validasi ke halaman login
        return back()->withErrors([
            'email' => 'Email atau kata sandi yang Anda masukkan salah.',
        ])->onlyInput('email');
    }

    /**
     * Proses logout.
     */
    public function logout(Request $request)
    {
        Auth::logout();

        // Invalidate session
        $request->session()->invalidate();

        // Regenerate CSRF token
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
