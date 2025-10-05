'use client'

import { useEffect, useRef } from 'react'

interface UnionVillageMapProps {
  className?: string
  showNearbyAmenities?: boolean
}

export default function UnionVillageMap({ className = '', showNearbyAmenities = true }: UnionVillageMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const placeDetailsRef = useRef<any>(null)
  const placeDetailsRequestRef = useRef<any>(null)
  const markerRef = useRef<any>(null)

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return

      try {
        // Load Google Maps libraries
        const { Map } = await google.maps.importLibrary('maps')
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker')
        const { PlaceDetailsElement, PlaceDetailsPlaceRequestElement } = await google.maps.importLibrary('places')

        // Union Village exact location - 1001 Gearus Place, Henderson, NV 89011
        const unionVillageLocation = { lat: 36.0395, lng: -115.0362 } // 1001 Gearus Place, Henderson, NV 89011
        
        // Create the map
        const map = new Map(mapRef.current, {
          center: unionVillageLocation,
          zoom: 15,
          mapId: 'UNION_VILLAGE_MAP_ID',
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        })

        // Create marker for Union Village
        const marker = new AdvancedMarkerElement({
          map: map,
          position: unionVillageLocation,
          title: 'The Townes at Union Village'
        })

        markerRef.current = marker

        // Create place details element
        const placeDetails = new PlaceDetailsElement()
        placeDetails.style.width = '300px'
        placeDetails.style.height = '400px'
        placeDetails.style.borderRadius = '8px'
        placeDetails.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'

        const placeDetailsRequest = new PlaceDetailsPlaceRequestElement()
        
        // Set Union Village as the default place (you'll need to get the actual place ID)
        // For now, we'll use coordinates
        placeDetailsRequest.location = unionVillageLocation
        
        placeDetails.appendChild(placeDetailsRequest)
        
        // Add standard content
        const standardContent = document.createElement('gmp-place-standard-content')
        placeDetails.appendChild(standardContent)

        // Add attribution
        const attribution = document.createElement('gmp-place-attribution')
        attribution.setAttribute('light-scheme-color', 'gray')
        attribution.setAttribute('dark-scheme-color', 'white')
        placeDetails.appendChild(attribution)

        placeDetailsRef.current = placeDetails
        placeDetailsRequestRef.current = placeDetailsRequest

        // Add place details to map
        const widgetContainer = document.createElement('div')
        widgetContainer.style.position = 'absolute'
        widgetContainer.style.top = '10px'
        widgetContainer.style.left = '10px'
        widgetContainer.style.zIndex = '1000'
        widgetContainer.appendChild(placeDetails)
        
        mapRef.current.appendChild(widgetContainer)

        // Set up click listener for POI selection
        map.addListener('click', async (event: any) => {
          if (event.placeId) {
            // User clicked on a POI
            placeDetailsRequest.place = event.placeId
            updateMapAndMarker(event.latLng)
          } else {
            // User clicked on empty map - show Union Village details
            placeDetailsRequest.location = unionVillageLocation
            updateMapAndMarker(unionVillageLocation)
          }
        })

        // Function to update map and marker
        const updateMapAndMarker = (position: any) => {
          map.panTo(position)
          marker.position = position
        }

        // Add nearby amenities if requested
        if (showNearbyAmenities) {
          addNearbyAmenities(map)
        }

      } catch (error) {
        console.error('Error initializing map:', error)
      }
    }

    initMap()
  }, [showNearbyAmenities])

  const addNearbyAmenities = (map: any) => {
    // Add markers for nearby amenities
    const amenities = [
      {
        position: { lat: 36.0395, lng: -115.0362 },
        title: 'The Townes at Union Village',
        type: 'home'
      },
      {
        position: { lat: 36.0415, lng: -115.0342 },
        title: 'Henderson Hospital',
        type: 'hospital'
      },
      {
        position: { lat: 36.0375, lng: -115.0382 },
        title: 'Galleria at Sunset',
        type: 'shopping'
      }
    ]

    amenities.forEach(amenity => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: amenity.position,
        title: amenity.title
      })
    })
  }

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-96 rounded-lg shadow-lg"
        style={{ minHeight: '400px' }}
      />
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>📍 Click on map markers or points of interest to see details</p>
        <p>🗺️ The Townes at Union Village - Henderson, NV</p>
      </div>
    </div>
  )
}
