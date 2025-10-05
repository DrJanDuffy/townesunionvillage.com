import InteractiveElevationMap from '../components/union-village-elevation'
import UnionVillageElevation from '../components/union-village-elevation'

export default function AreaExploration() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore the Area
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover the beautiful terrain, elevation, and outdoor opportunities around The Townes at Union Village in Henderson, NV
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call (702) 500-1955
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-colors"
            >
              📧 Contact Dr. Jan
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Elevation Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Terrain Explorer
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Draw paths on the map to see elevation profiles. Perfect for planning walks, runs, hikes, 
              or exploring the beautiful terrain around Union Village.
            </p>
          </div>

          <InteractiveElevationMap className="mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Draw Your Path</h3>
              <p className="text-gray-600">
                Use the drawing tool to create custom paths and see elevation changes
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">View Elevation</h3>
              <p className="text-gray-600">
                See detailed elevation profiles with distance and height information
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏃‍♀️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Plan Activities</h3>
              <p className="text-gray-600">
                Perfect for planning walking routes, running paths, or hiking trails
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Explore Area</h3>
              <p className="text-gray-600">
                Discover the terrain and elevation around Union Village and Henderson
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Predefined Elevation Profiles */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Walking Routes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore these popular walking routes around The Townes at Union Village community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏘️ Community Walking Trail</h3>
              <p className="text-gray-600 mb-4">
                The official walking trail within Union Village community with gentle elevation changes.
              </p>
              <UnionVillageElevation showAreaElevation={false} showWalkingTrail={true} />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏥 Henderson Hospital Route</h3>
              <p className="text-gray-600 mb-4">
                Walking route from Union Village to Henderson Hospital and nearby amenities.
              </p>
              <UnionVillageElevation showAreaElevation={true} showWalkingTrail={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Area Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Elevation Matters in Henderson
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding the terrain around your new home helps you make informed decisions about outdoor activities and views.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Temperature Benefits</h3>
              <p className="text-gray-600">
                At 2,000 feet elevation, Union Village enjoys slightly cooler temperatures than the Las Vegas Strip, 
                making outdoor activities more comfortable year-round.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scenic Views</h3>
              <p className="text-gray-600">
                The elevated position provides stunning views of the Las Vegas Valley, surrounding mountains, 
                and beautiful sunsets over the desert landscape.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏃‍♂️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Active Lifestyle</h3>
              <p className="text-gray-600">
                Gentle elevation changes in the area provide perfect terrain for walking, running, 
                and outdoor fitness activities right in your neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Explore Your New Neighborhood?
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Contact Dr. Jan Duffy to schedule a tour of The Townes at Union Village and see this beautiful terrain for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call (702) 500-1955
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-colors"
            >
              📧 Email Dr. Jan
            </a>
            <a 
              href="/community"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              🏘️ Explore Community
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
