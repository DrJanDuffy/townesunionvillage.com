# Google Maps Setup for Union Village Website

## Getting Started with Google Maps Integration

To enable interactive maps on the Union Village website, you'll need to set up a Google Maps API key.

### 1. Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (for advanced place details)
   - Geocoding API (for address lookups)

### 2. Set Environment Variables

Create a `.env.local` file in your project root and add:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 3. Map Components Available

The website includes two map components:

#### SimpleUnionVillageMap
- Uses Google Maps Embed API (simpler, requires less setup)
- Shows Union Village location: **1001 Gearus Place, Henderson, NV 89011**
- Includes "Get Directions" and "View on Google Maps" buttons
- Perfect for basic location display

#### AdvancedUnionVillageMap
- Uses Google Maps JavaScript API (more features)
- Interactive markers and info windows
- Shows nearby amenities (Henderson Hospital, shopping centers)
- Requires proper API key setup

### 4. Current Implementation

The community page now uses `SimpleUnionVillageMap` which shows:
- Exact Union Village location
- Interactive Google Maps embed
- Directions buttons
- Nearby amenities information

### 5. Features Included

- **Exact Address**: 1001 Gearus Place, Henderson, NV 89011
- **Get Directions**: Direct links to Google Maps directions
- **View on Maps**: Opens location in Google Maps app
- **Nearby Info**: Mentions Henderson Hospital and shopping centers
- **Responsive Design**: Works on mobile and desktop

### 6. API Key Security

- The API key is prefixed with `NEXT_PUBLIC_` so it's available in the browser
- Restrict your API key to your domain in Google Cloud Console
- Monitor usage in the Google Cloud Console to avoid unexpected charges

### 7. Fallback Behavior

If no API key is provided, the map will show a placeholder. The component gracefully handles missing API keys.

## Next Steps

1. Get your Google Maps API key
2. Add it to `.env.local`
3. Deploy and test the interactive maps
4. Consider upgrading to the advanced map component for more features

The maps are now integrated and ready to help potential homebuyers find The Townes at Union Village!
