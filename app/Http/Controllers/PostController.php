<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PostController extends Controller
{
    //basic page route
    public function index()
    {
        $posts = Post::latest()
            ->get();

        //go to the view page
        return Inertia::render('PostPage', [
            'posts' => $posts->map(function ($post) {
                return [
                    "id" => $post->id,
                    "uuid" => $post->uuid,
                    "title" => $post->title,
                    "description" => $post->description,
                    "status" => $post->status,
                    "image" => $post->image_url,
                ];
            }),
        ]);
    }

    public function view_post(Post $post)
    {
        // $post = Post::whereUuid($id)->first();
        // $post = Post::firstWhere('uuid', $id);

        return Inertia::render('ViewPost', [
            'post' => [
                "id" => $post->id,
                "uuid" => $post->uuid,
                "title" => $post->title,
                "description" => $post->description,
                "status" => $post->status,
                "image" => $post->image_url,
            ]
        ]);
    }

    public function create_post()
    {
        return Inertia::render('CreatePost');
    }

    public function store_post(Request $request)
    {
        // dd($request->all());

        // Validate the incoming request
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'status' => 'required',
            'image' => 'nullable'
        ]);

        //declare file path name
        if ($request->hasFile('image')) {
            $filename = 'post_image_' . date('ymdhis') . '.' . $request->file('image')->extension();
            // dd($filename);
        }

        // Create the post using create() method
        $posts = Post::create([
            'uuid' => Str::uuid(),
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'image' => $request->file('image')->storeAs('post_images', $filename),

        ]);

        if ($posts) {
            return redirect()->route('post')->with('success', 'Post created successfully');
        } else {
            return back()->with('error', 'Failed to create post');
        }

        // return Inertia::render('PostPage');
    }

    public function delete_post($id)
    {
        // $posts = Post::find($id);
        $posts = Post::firstWhere('uuid', $id);

        $posts->delete();

        return redirect()->route('post')->with('success', 'Post deleted successfully');
    }

    public function edit_post($id)
    {
        $post = Post::firstWhere('uuid', $id);

        return Inertia::render('EditPostPage', [
            'post' => [
                "uuid" => $post->uuid,
                "title" => $post->title,
                "description" => $post->description,
                "status" => $post->status,
                "image" => $post->image_url,
            ]
        ]);
    }

    public function update_post(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'status' => 'required',
            'image' => 'nullable'
        ]);

        $postData = [
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
        ];

        if ($request->hasFile('image')) {
            $imageName = 'post_image_' . date('ymdhis') . '.' . $request->image->extension();
            
            if ($post->image && Storage::exists($post->image)) {
                Storage::delete('post_images' . $post->image);
            } 

            $postData['image'] = $request->image->storeAs('post_images', $imageName);
        }

        $post->update($postData);
        return redirect()->route('post')->with('success', 'Post updated successfully');
    }
}
