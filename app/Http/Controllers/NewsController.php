<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $response = Http::get('https://api-berita-indonesia.vercel.app/antara/terbaru/');
        $berita = $response->json()['data']['posts'];
        return Inertia::render('News', compact('berita'));
    }
}
