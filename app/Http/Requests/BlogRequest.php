<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Always return true for admin routes (auth is handled by middleware)
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'desc' => 'required|string',
            'content' => 'required|string',
            'ai_summary' => 'nullable|string',
            'read_time' => 'required|integer|min:1',
            'is_featured' => 'boolean',
            'publish_date' => 'nullable|date',
            'category_name' => 'required|string|max:100',
            'tags' => 'array',
            'tags.*' => 'string',
            'image' => 'nullable|image|max:5120', // max 5MB
            'image_path' => 'nullable|string|max:255',
            'status' => 'required|in:draft,published',
            'author_id' => 'required|exists:users,id',
            'related_blogs' => 'nullable|array',
            'related_blogs.*' => 'exists:blogs,id',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'focus_keywords' => 'nullable|array',
            'focus_keywords.*' => 'string|max:50',
        ];
    }
}
