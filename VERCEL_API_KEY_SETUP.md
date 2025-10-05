# Google Maps API Key Setup for Vercel

## Issue Identified
The maps are showing "Interactive map requires Google Maps API key configuration" because the `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` environment variable is not being detected.

## Steps to Fix This

### 1. Get Your Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable these APIs:
   - **Maps JavaScript API**
   - **Maps Embed API** (for iframe embeds)
   - **Places API** (for place details)
   - **Geocoding API** (for address lookups)

### 2. Set Up Vercel Environment Variables

#### Option A: Via Vercel Dashboard (Recommended)
1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project: `townesunionvillage.com`
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - **Value**: Your actual Google Maps API key (starts with `AIza...`)
   - **Environments**: Select all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your project (this is crucial!)

#### Option B: Via Vercel CLI
```bash
vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
# Enter your API key when prompted
vercel --prod  # Deploy to production
```

### 3. Configure API Key Restrictions (Security)
In Google Cloud Console:
1. Go to **APIs & Services** → **Credentials**
2. Click on your API key
3. Under **Application restrictions**:
   - Select **HTTP referrers (web sites)**
   - Add these referrers:
     - `https://townesunionvillage.com/*`
     - `https://*.townesunionvillage.com/*`
     - `https://*.vercel.app/*` (for preview deployments)
     - `localhost:*` (for local development)

### 4. Test the Configuration
After setting up the environment variable and redeploying:
1. Visit your live site: `https://townesunionvillage.com/community`
2. Look for the debug info box (yellow box)
3. It should show:
   - ✅ API Key Status: Found
   - API Key Length: 39 characters (typical length)
   - API Key Preview: AIzaSyC... (your actual key)

### 5. Remove Debug Component
Once the API key is working, remove the debug component:
1. Remove `import DebugEnv from '../components/debug-env'` from community page
2. Remove `<DebugEnv />` from the JSX
3. Delete `app/components/debug-env.tsx`

## Common Issues & Solutions

### Issue: "API Key Not Found" after setting in Vercel
**Solution**: You must redeploy after adding environment variables. Vercel doesn't automatically redeploy.

### Issue: "RefererNotAllowedMapError"
**Solution**: Add your domain to the API key restrictions in Google Cloud Console.

### Issue: "BillingAccountRequired"
**Solution**: Enable billing in Google Cloud Console. Google Maps requires a billing account even for free tier.

### Issue: Maps load but show "For development purposes only"
**Solution**: This happens when you haven't enabled billing. Enable billing in Google Cloud Console.

## Expected Result
After proper setup, your maps should show:
- Interactive Google Maps with Union Village location
- Business information overlay
- Directions and contact buttons
- Professional appearance

## Cost Information
- Google Maps Embed API: Free for most usage
- Maps JavaScript API: $7 per 1,000 requests after free tier
- For a real estate website, costs should be minimal

## Next Steps
1. Set up the API key in Vercel
2. Redeploy the project
3. Check the debug info on the community page
4. Remove debug component once confirmed working
5. Enjoy your interactive maps!
