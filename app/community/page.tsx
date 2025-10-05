import SimpleUnionVillageMap from '../components/simple-union-village-map'
import DebugEnv from '../components/debug-env'

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            PREMIER COMMUNITY
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            <span className="font-extralight text-white">Community</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-blue-200 tracking-wider">
              THE TOWNES AT UNION VILLAGE
            </span>
          </h1>
          <p className="text-xl mb-10 font-light max-w-4xl mx-auto leading-relaxed">
            Discover The Townes at Union Village - A sophisticated new construction community in Henderson, Nevada, 
            featuring premium amenities and exceptional attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SCHEDULE COMMUNITY TOUR
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              CONTACT DR. JAN
            </a>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                EXCEPTIONAL LIVING
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">Welcome to</span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
                THE TOWNES AT UNION VILLAGE
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Century Communities presents an exceptional collection of new homes in Henderson, Nevada at The Townes at Union Village. 
              This sophisticated community showcases meticulously crafted townhome floor plans featuring open-concept layouts, 
              premium finishes, and Century Home Connect® smart home technology. Strategically positioned near Henderson Hospital, 
              The Townes at Union Village offers unparalleled convenience to shopping, dining, and entertainment via Highway 95 and I-215.
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                PREMIUM AMENITIES
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">Community Amenities</span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
                EXCEPTIONAL LIVING
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Experience a curated collection of outdoor amenities and recreational opportunities designed to enhance 
              your lifestyle and create lasting memories within your neighborhood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-10 text-center shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🐕</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Dog Park</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Let your furry companions play and socialize in our thoughtfully designed dog park area.
              </p>
            </div>
            <div className="bg-white rounded-xl p-10 text-center shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🚶‍♀️</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Walking Trail</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Stay active with beautifully landscaped walking trails throughout the community.
              </p>
            </div>
            <div className="bg-white rounded-xl p-10 text-center shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🍽️</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Picnic Areas</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Elegant outdoor spaces perfect for dining and community gatherings.
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            LIMITED AVAILABILITY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Quick Move-In Homes</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-amber-200 tracking-wider">
              AVAILABLE NOW
            </span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-4xl mx-auto leading-relaxed">
            Several exceptional quick move-in homes are available starting from $374,990 with immediate occupancy. 
            These exceptional residences represent the pinnacle of luxury new construction - don't miss this opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/quick-move-in"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              VIEW QUICK MOVE-IN HOMES
            </a>
            <a 
              href="tel:7025001955"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SCHEDULE PRIVATE TOUR
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
