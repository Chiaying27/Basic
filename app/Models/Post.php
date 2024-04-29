<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid', 'title', 'description', 'status', 'image',
    ];

    // public function getAlternateColumnNameAttribute()
    // {
    //     // 
    // }

    //set this due to images is set in different path folder
    public function getImageUrlAttribute()
    {
        return url('storage/' . $this->image);
    }
}
