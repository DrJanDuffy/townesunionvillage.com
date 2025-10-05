import SimpleUnionVillageMap from '../components/simple-union-village-map'
import DebugEnv from '../components/debug-env'

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Community
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover The Townes at Union Village - A premier community in Henderson, NV
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
              📧 Contact Dr. Jan
            </a>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to The Townes at Union Village
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Century Communities is excited to offer new homes for sale in Henderson, NV at The Townes at Union Village. 
              This exceptional community showcases a range of versatile townhome floor plans, boasting open-concept layouts 
              with modern features like our Century Home Connect® smart home package. Conveniently located near Henderson Hospital, 
              The Townes at Union Village provides easy access to shopping, dining and entertainment via Highway 95 and I-215.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Prime Location</h3>
              <p className="text-gray-600 mb-6">
                Conveniently located near Henderson Hospital, The Townes at Union Village provides easy access to 
                shopping, dining and entertainment via Highway 95 and I-215.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Minutes from Henderson Hospital</li>
                <li>• Easy access to Highway 95 & I-215</li>
                <li>• Close to shopping and dining</li>
                <li>• Proximity to outdoor recreation</li>
              </ul>
            </div>
            <DebugEnv />
            <SimpleUnionVillageMap className="h-96" />
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Enjoy a variety of outdoor amenities and recreational opportunities right in your neighborhood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-4">🐕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dog Park</h3>
              <p className="text-gray-600">
                Let your furry friends play and socialize in our dedicated dog park area.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-4">🚶‍♀️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Walking Trail</h3>
              <p className="text-gray-600">
                Stay active with scenic walking trails throughout the community.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Picnic Areas</h3>
              <p className="text-gray-600">
                Perfect spots for outdoor dining and community gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Area Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Henderson, Nevada?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The Townes at Union Village is perfectly positioned in Henderson, Nevada at approximately 2,000 feet elevation, 
              offering stunning views and ideal desert living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mountain Views</h3>
              <p className="text-gray-600">
                Enjoy panoramic views of the surrounding mountain ranges from your new home at Union Village.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Valley Views</h3>
              <p className="text-gray-600">
                Take in the beautiful Las Vegas Valley from the elevated position of Union Village.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚶‍♀️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Walking Trails</h3>
              <p className="text-gray-600">
                Community walking trails with gentle terrain perfect for daily exercise and outdoor enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore the beautiful homes and community features at The Townes at Union Village.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              'Modern Townhome Exterior',
              'Spacious Living Room',
              'Gourmet Kitchen',
              'Master Bedroom',
              'Luxury Bathroom',
              'Community Pool',
              'Walking Trails',
              'Dog Park Area'
            ].map((title, i) => (
              <div key={i} className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🏠</div>
                    <p className="text-sm">{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/floor-plans"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Available Floor Plans
            </a>
          </div>
        </div>
      </section>

      {/* Area Information */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Area Information
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Everything you need is just minutes away from The Townes at Union Village.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Schools */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏫 Schools</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Harriet Treem Elementary School</li>
                <li>• Jim Thorpe Elementary School</li>
                <li>• Francis H. Cortney Junior High School</li>
                <li>• Basic Academy of International Studies High School</li>
              </ul>
            </div>

            {/* Shopping */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🛍️ Shopping</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Galleria at Sunset</li>
                <li>• Costco</li>
                <li>• Best Buy</li>
                <li>• Target</li>
                <li>• Walmart</li>
              </ul>
            </div>

            {/* Dining */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🍽️ Dining</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Red Robin Gourmet Burgers</li>
                <li>• Dave & Buster's</li>
                <li>• Texas Roadhouse</li>
                <li>• In-N-Out Burger</li>
                <li>• Starbucks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Move-In Homes */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Quick Move-In Homes Available
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Several quick move-in homes are available starting from $369,990 with estimated 
            completion dates throughout 2024. Don't wait - these homes are selling fast!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quick-move-in"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              🏠 View Quick Move-In Homes
            </a>
            <a 
              href="tel:7025001955"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-colors"
            >
              📞 Call Dr. Jan: (702) 500-1955
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Make Union Village Your Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact Dr. Jan Duffy today for expert guidance and VIP access to The Townes at Union Village.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              📞 Call (702) 500-1955
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors"
            >
              📧 Email Dr. Jan
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
