import Image from 'next/image'
import Link from 'next/link'
import SEOOptimizedMap from './components/seo-optimized-map'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 h-[600px] flex items-center justify-center text-white overflow-hidden" 
               style={{ backgroundImage: "url('/hero-union-village.svg')" }}>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-400/20 rounded-full blur-xl"></div>
        
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Now Selling - Limited Availability
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              The Townes at Union Village
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-semibold text-blue-200" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              New Homes in Henderson, NV
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-blue-100 font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            Starting from <span className="text-3xl font-bold text-white">$374,990</span>
          </p>
          
          <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            Beautiful townhomes up to 1,479 sq ft with Century Home Connect® smart features. 
            Expert guidance from Dr. Jan Duffy, your Preferred Buyer Agent.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a
              href="tel:7025001955"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📞 Call NOW: (702) 500-1955
            </a>
            <Link
              href="/floor-plans"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🏠 View Floor Plans
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-sm text-blue-200">Floor Plans</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">1,405-1,479</div>
              <div className="text-sm text-blue-200">Square Feet</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">2.5</div>
              <div className="text-sm text-blue-200">Bathrooms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability */}
      <section className="bg-red-700 text-white text-center py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">🚨 LIMITED AVAILABILITY - ACT FAST!</h2>
          <p className="text-xl mb-4">
            Only 3 floor plans remaining! The Townes at Union Village is selling out fast. Get your VIP tour with Dr. Jan Duffy before these homes are gone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:7025001955"
              className="bg-white text-red-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              SECURE YOUR HOME: (702) 500-1955
            </a>
            <Link
              href="/floor-plans"
              className="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors text-lg font-medium"
            >
              VIEW AVAILABLE FLOOR PLANS
            </Link>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">The Townes at Union Village Floor Plans - Now Selling!</h2>
          <p className="text-lg text-gray-600 mb-12">
            Limited Availability! Choose from 3 two-story floor plans with 3 bedrooms and up to 1,965 sq. ft. Each home features expansive living spaces, premium finishes, and smart tech included with the Century Connect® package. Starting from $369,990.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residence 1602 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Residence 1602 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Residence 1602</h3>
                <p className="text-blue-600 text-xl font-bold mb-4">From $369,990</p>
                <ul className="text-gray-700 text-left space-y-2">
                  <li className="flex items-center"><span className="font-medium w-24">Square Feet:</span> 1,602</li>
                  <li className="flex items-center"><span className="font-medium w-24">Bedrooms:</span> 3</li>
                  <li className="flex items-center"><span className="font-medium w-24">Bathrooms:</span> 2.5</li>
                  <li className="flex items-center"><span className="font-medium w-24">Car Garage:</span> 2</li>
                </ul>
                <Link
                  href="/floor-plans#residence-1602"
                  className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Residence 1708 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Residence 1708 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Residence 1708</h3>
                <p className="text-blue-600 text-xl font-bold mb-4">From $379,990</p>
                <ul className="text-gray-700 text-left space-y-2">
                  <li className="flex items-center"><span className="font-medium w-24">Square Feet:</span> 1,708</li>
                  <li className="flex items-center"><span className="font-medium w-24">Bedrooms:</span> 3</li>
                  <li className="flex items-center"><span className="font-medium w-24">Bathrooms:</span> 2.5</li>
                  <li className="flex items-center"><span className="font-medium w-24">Car Garage:</span> 2</li>
                </ul>
                <Link
                  href="/floor-plans#residence-1708"
                  className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Residence 1965 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Residence 1965 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Residence 1965</h3>
                <p className="text-blue-600 text-xl font-bold mb-4">From $399,990</p>
                <ul className="text-gray-700 text-left space-y-2">
                  <li className="flex items-center"><span className="font-medium w-24">Square Feet:</span> 1,965</li>
                  <li className="flex items-center"><span className="font-medium w-24">Bedrooms:</span> 3</li>
                  <li className="flex items-center"><span className="font-medium w-24">Bathrooms:</span> 2.5</li>
                  <li className="flex items-center"><span className="font-medium w-24">Car Garage:</span> 2</li>
                </ul>
                <Link
                  href="/floor-plans#residence-1965"
                  className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">The Townes at Union Village Community Gallery</h2>
          <p className="text-lg text-gray-600 mb-12">
            Explore the stunning homes and beautiful community at The Townes at Union Village. From modern exteriors to luxurious interiors, discover why Union Village is the perfect place to call home in Henderson.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Luxury home exterior</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Modern luxury kitchen</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Spacious luxury living room</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Elegant master bedroom</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Luxury bathroom</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Resort-style community pool</span>
            </div>
          </div>
          <Link
            href="/community"
            className="mt-12 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Explore Community
          </Link>
        </div>
      </section>

      {/* Why Work With Dr. Jan Duffy */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Why Work With Dr. Jan Duffy?</h2>
          <p className="text-lg text-gray-600 mb-12">
            Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Century Communities Partnership</h3>
              <p className="text-gray-700">
                I work directly with Century Communities to give you insider access while representing YOUR interests, not theirs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Expertise</h3>
              <p className="text-gray-700">
                I'll show you comparable communities and help you understand true market value—not just what the builder tells you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Negotiation Power</h3>
              <p className="text-gray-700">
                Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Las Vegas Specialist</h3>
              <p className="text-gray-700">
                Nevada License S.0197614. Deep knowledge of Union Village and the entire metro area.
              </p>
            </div>
          </div>
          <Link
            href="/about-dr-jan"
            className="mt-12 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Meet Dr. Jan Duffy
          </Link>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit The Townes at Union Village in Henderson, NV
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Located in beautiful Henderson, Nevada. Easy access to shopping, dining, and entertainment. 
              Expert guidance from Dr. Jan Duffy, your preferred buyer agent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Henderson, NV for Your New Home?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🏥</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Near Henderson Hospital</h4>
                    <p className="text-gray-600 text-sm">Minutes from top medical facilities and healthcare services in Henderson, Nevada.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🛍️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Shopping Centers</h4>
                    <p className="text-gray-600 text-sm">Close to Galleria at Sunset, Costco, Target, and major retailers in Henderson.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🛣️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Highway Access</h4>
                    <p className="text-gray-600 text-sm">Convenient access to Highway 95 and I-215 for easy commuting throughout Las Vegas Valley.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🌵</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Desert Living at 2,000 ft</h4>
                    <p className="text-gray-600 text-sm">Enjoy beautiful desert views, mountain vistas, and outdoor recreation in Henderson, Nevada.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <SEOOptimizedMap 
              variant="business-profile"
              title="The Townes at Union Village - Century Communities Henderson, NV"
              description="New townhomes starting from $374,990. Expert guidance from Dr. Jan Duffy, preferred buyer agent."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white text-center py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">🚨 DON'T MISS OUT - THE TOWNES AT UNION VILLAGE IS SELLING FAST!</h2>
          <p className="text-xl mb-8">
            Only 3 floor plans remaining! Get VIP access to The Townes at Union Village with Dr. Jan Duffy's expert guidance. Schedule your private tour today before these homes are gone forever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:7025001955"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              SECURE YOUR HOME NOW (702) 500-1955
            </a>
            <Link
              href="/contact"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors text-lg font-medium"
            >
              EMAIL DR. JAN
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
