'use client'

import { useEffect, useRef } from 'react'

interface UnionVillageElevationProps {
  className?: string
  showWalkingTrail?: boolean
  showAreaElevation?: boolean
}

export default function UnionVillageElevation({ 
  className = '', 
  showWalkingTrail = true,
  showAreaElevation = true 
}: UnionVillageElevationProps) {
  const elevationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initElevation = async () => {
      if (!elevationRef.current) return

      try {
        // Load Google Maps libraries
        const { ElevationElement } = await google.maps.importLibrary('elevation')

        // Create elevation element
        const elevationElement = document.createElement('gmp-elevation')
        elevationElement.setAttribute('unit-system', 'metric')
        elevationElement.style.width = '100%'
        elevationElement.style.height = '300px'
        elevationElement.style.borderRadius = '8px'
        elevationElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'

        // Union Village location and surrounding area coordinates
        const unionVillageLocation = { lat: 36.0395, lng: -115.0362 } // 1001 Gearus Place
        
        if (showAreaElevation) {
          // Show elevation profile from Union Village to nearby points
          const elevationPath = [
            unionVillageLocation, // Union Village
            { lat: 36.0415, lng: -115.0342 }, // Henderson Hospital area
            { lat: 36.0375, lng: -115.0382 }, // Galleria at Sunset area
            { lat: 36.0355, lng: -115.0402 }, // Further south
            unionVillageLocation // Back to Union Village
          ]
          elevationElement.path = elevationPath
        }

        if (showWalkingTrail) {
          // Create a walking trail elevation profile around the community
          const walkingTrailPath = [
            unionVillageLocation,
            { lat: 36.0405, lng: -115.0352 }, // Trail point 1
            { lat: 36.0425, lng: -115.0372 }, // Trail point 2 (higher elevation)
            { lat: 36.0405, lng: -115.0392 }, // Trail point 3
            { lat: 36.0385, lng: -115.0372 }, // Trail point 4
            unionVillageLocation // Back to start
          ]
          elevationElement.path = walkingTrailPath
        }

        // Clear the container and add the elevation element
        elevationRef.current.innerHTML = ''
        elevationRef.current.appendChild(elevationElement)

      } catch (error) {
        console.error('Error initializing elevation:', error)
        // Fallback content
        if (elevationRef.current) {
          elevationRef.current.innerHTML = `
            <div class="bg-gray-100 rounded-lg p-8 text-center">
              <div class="text-4xl mb-4">🏔️</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Elevation Profile</h3>
              <p class="text-gray-600 mb-4">Elevation data for Union Village area</p>
              <p class="text-sm text-gray-500">Henderson, NV elevation: ~2,000 feet above sea level</p>
              <p class="text-sm text-gray-500">Great views of the Las Vegas Valley and surrounding mountains</p>
            </div>
          `
        }
      }
    }

    initElevation()
  }, [showWalkingTrail, showAreaElevation])

  return (
    <div className={`relative ${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">🏔️ Area Elevation Profile</h3>
        <p className="text-gray-600 text-sm mb-4">
          {showWalkingTrail 
            ? "Elevation profile of the walking trail around Union Village community" 
            : "Elevation profile showing the terrain around The Townes at Union Village"
          }
        </p>
      </div>
      
      <div 
        ref={elevationRef} 
        className="w-full bg-white rounded-lg shadow-lg"
        style={{ minHeight: '300px' }}
      />
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>📍 Union Village is located at approximately 2,000 feet elevation</p>
        <p>🏔️ Enjoy views of the Las Vegas Valley and surrounding mountains</p>
        {showWalkingTrail && (
          <p>🚶‍♀️ Walking trail provides gentle elevation changes for exercise</p>
        )}
      </div>
    </div>
  )
}

// Alternative component for interactive elevation with drawing
export function InteractiveElevationMap({ className = '' }: { className?: string }) {
  const mapRef = useRef<HTMLDivElement>(null)
  const elevationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initInteractiveMap = async () => {
      if (!mapRef.current || !elevationRef.current) return

      try {
        // Load Google Maps libraries
        const { Map } = await google.maps.importLibrary('maps')
        const { ElevationElement } = await google.maps.importLibrary('elevation')
        const { DrawingManager } = await google.maps.importLibrary('drawing')

        // Create the map
        const map = new Map(mapRef.current, {
          center: { lat: 36.0395, lng: -115.0362 }, // Union Village
          zoom: 14,
          mapTypeControl: true,
          clickableIcons: false,
        })

        // Create elevation element
        const elevationElement = document.createElement('gmp-elevation')
        elevationElement.setAttribute('unit-system', 'metric')
        elevationElement.style.width = '100%'
        elevationElement.style.height = '250px'
        elevationElement.style.borderRadius = '8px'

        elevationRef.current.appendChild(elevationElement)

        // Set up drawing manager for polyline creation
        const drawingManager = new DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.POLYLINE,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYLINE]
          },
          polylineOptions: {
            geodesic: true,
            strokeColor: '#2563eb',
            strokeWeight: 4
          }
        })

        drawingManager.setMap(map)

        // Listen for polyline completion
        drawingManager.addListener('polylinecomplete', (polyline) => {
          const path = polyline.getPath().getArray()
          elevationElement.path = path
          
          // Add click listener to polyline
          polyline.addListener('click', () => {
            elevationElement.path = path
          })
        })

      } catch (error) {
        console.error('Error initializing interactive elevation map:', error)
      }
    }

    initInteractiveMap()
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">🗺️ Interactive Elevation Map</h3>
        <p className="text-gray-600 text-sm mb-4">
          Draw a line on the map to see elevation profile. Great for exploring hiking trails and terrain around Union Village.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div 
          ref={mapRef} 
          className="w-full h-64 rounded-lg shadow-lg"
          style={{ minHeight: '300px' }}
        />
        <div 
          ref={elevationRef} 
          className="w-full bg-white rounded-lg shadow-lg p-4"
          style={{ minHeight: '300px' }}
        />
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>✏️ Use the drawing tool to create a path and see elevation changes</p>
        <p>🏔️ Perfect for planning walks, runs, or exploring the area</p>
      </div>
    </div>
  )
}
