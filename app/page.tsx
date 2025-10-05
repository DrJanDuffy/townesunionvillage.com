import Image from 'next/image'
import Link from 'next/link'
import SEOOptimizedMap from './components/seo-optimized-map'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 h-[700px] flex items-center justify-center text-white overflow-hidden">
        {/* Luxury Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Subtle Luxury Accents */}
        <div className="absolute top-32 left-32 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-amber-600/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-full blur-xl"></div>
        
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          {/* Luxury Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-700 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl border border-amber-400/30">
            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse shadow-lg"></span>
            EXCLUSIVE NEW CONSTRUCTION - LIMITED RELEASE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-wide">
            <span className="text-white font-extralight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              The Townes at Union Village
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-300 tracking-wider" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              LUXURY NEW HOMES IN HENDERSON, NEVADA
            </span>
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-2 tracking-wide">PRICED FROM</p>
            <div className="text-5xl md:text-6xl font-light text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              $374,990
            </div>
            <p className="text-sm text-gray-400 tracking-wider">TOWNHOMES UP TO 1,479 SQ FT</p>
          </div>
          
          <p className="text-lg mb-10 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            Sophisticated new construction featuring premium finishes, Century Home Connect® smart technology, 
            and exceptional attention to detail. Experience the pinnacle of modern living with expert guidance 
            from Dr. Jan Duffy, your exclusive buyer representative.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
            <a
              href="tel:7025001955"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-amber-500/50 tracking-wide"
            >
              SCHEDULE PRIVATE TOUR
            </a>
            <Link
              href="/floor-plans"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 backdrop-blur-sm tracking-wide"
            >
              EXPLORE FLOOR PLANS
            </Link>
          </div>
          
          {/* Luxury Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-light text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>3</div>
              <div className="text-sm text-gray-300 font-light tracking-wide uppercase">Exclusive Floor Plans</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-light text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>1,405-1,479</div>
              <div className="text-sm text-gray-300 font-light tracking-wide uppercase">Square Feet</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-light text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>2.5</div>
              <div className="text-sm text-gray-300 font-light tracking-wide uppercase">Premium Bathrooms</div>
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
