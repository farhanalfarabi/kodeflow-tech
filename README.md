# Atelier - Premium Marketing Site

This is a premium, single-page marketing site built with Svelte, Laravel, Inertia, Tailwind CSS v4, and Lucide Icons.

## Pre-Step: Video to JPG Frame Pipeline

The hero uses a scroll-scrubbed frame sequence instead of a `<video>` tag for maximum performance and cinematic feel.

### Instructions

1. **Drop the source video** at `/input/source.mp4` in the project root.
   ```bash
   mkdir -p input public/frames
   ```

2. **Extract frames with ffmpeg** (requires ffmpeg installed locally).
   ```bash
   ffmpeg -i input/source.mp4 \
     -vf "fps=30,scale='min(1920,iw)':'-2':flags=lanczos" \
     -q:v 3 \
     public/frames/frame_%04d.jpg
   ```

3. **Count the frames** and paste the number into `FRAME_COUNT` in `resources/js/lib/constants.js`.
   ```bash
   ls public/frames | wc -l
   ```

*Optional:* Convert to WebP for smaller payload (~40% size drop, same visual quality).
```bash
for f in public/frames/*.jpg; do
  cwebp -q 82 "$f" -o "${f%.jpg}.webp" && rm "$f"
done
```
If you do this, make sure to set `FRAME_EXT` to `"webp"` in `resources/js/lib/constants.js`.

**Note for Hobby Tiers (Vercel/Netlify):** If the total frame size exceeds your deployment target's limit (e.g., 25MB), consider using a shorter video, a lower frame rate, or compressing the images further.

If you don't have ffmpeg installed locally, you can use `@ffmpeg/ffmpeg` (WASM) in a Node script to perform the same extraction.

## Development

```bash
npm run dev
# and in a separate terminal:
php artisan serve
```
