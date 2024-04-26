<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'uuid' => Str::uuid(),
            'title' => fake()->title(),
            'description' => fake()->text(),
            'status' => fake()->boolean(),
            'image' => fake()->imageUrl(640, 480),



        ];
    }
}
