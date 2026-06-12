# Fix local `bun dev` — missing image assets

## What's wrong

Your terminal shows:
```
Error: Cannot find module '@/assets/hero-jaisalmer.jpg' imported from 'src/routes/index.tsx'
```

In Lovable, images under `src/assets/` are stored on Lovable's CDN. The repo only contains tiny pointer files (`hero-jaisalmer.jpg.asset.json`) that describe where the real image lives. When running inside Lovable, a custom Vite plugin resolves `@/assets/hero-jaisalmer.jpg` → the CDN URL automatically. On your local machine that plugin isn't active, so Vite looks for a real `.jpg` file, doesn't find it, and SSR throws the 500 you're seeing.

## Fix

Change image imports across the site to read the CDN URL from the `.asset.json` pointer instead of importing the `.jpg` directly. This works **both** locally and in Lovable, so nothing breaks in the preview.

### Files to update
1. `src/routes/index.tsx` — hero + section images
2. `src/routes/packages.tsx` — package card images
3. `src/routes/car-rental.tsx`, `src/routes/custom-tour.tsx`, `src/routes/contact.tsx` — any hero images
4. `src/components/site/PageHero.tsx` — if it imports an asset

### Pattern change
Before:
```ts
import heroJaisalmer from "@/assets/hero-jaisalmer.jpg";
<img src={heroJaisalmer} />
```
After:
```ts
import heroJaisalmer from "@/assets/hero-jaisalmer.jpg.asset.json";
<img src={heroJaisalmer.url} />
```

The `.asset.json` files already exist in your downloaded code (that's why imports resolved in Lovable). The `url` field points to the Lovable CDN, so images load locally with no further setup.

### After the change
1. Stop the dev server (Ctrl+C)
2. `bun dev`
3. Open http://localhost:8080/ — site should render

## Notes
- No `.env` is needed — this project doesn't use Lovable Cloud features (no auth/db calls), so the SSR error is purely the asset import failure.
- If you'd prefer fully self-contained local copies of the images instead of CDN URLs, the alternative is to download each JPG from the CDN URL in the `.asset.json` and save it as `src/assets/hero-jaisalmer.jpg`. The CDN approach is simpler and matches how Lovable serves them.