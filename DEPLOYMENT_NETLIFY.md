# Deploying Absolute Gaming PC & Laptops to Netlify

The application is pre-configured for Netlify deployment with `netlify.toml` and `public/_redirects`.

---

## Method 1: Connect via GitHub / GitLab / Bitbucket (Recommended)

1. **Push your code to a Git repository**:
   ```bash
   git add .
   git commit -m "Configure for Netlify deployment"
   git push origin main
   ```

2. **Log into Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com).
   - Click **"Add new site"** > **"Import an existing project"**.
   - Select your Git provider (GitHub) and choose this repository.

3. **Verify Build Settings** (Netlify will auto-detect from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. Click **"Deploy site"**. Your site will be live with full SSL and custom domain support in ~1 minute!

---

## Method 2: Instant Drag & Drop (No Git needed)

1. Build the production folder locally:
   ```bash
   npm run build
   ```
2. Log into [app.netlify.com](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the Netlify drop zone.
4. Your website is deployed immediately!

---

## Method 3: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```
