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
      <section className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            EXCLUSIVE OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">LIMITED AVAILABILITY</h2>
          <p className="text-xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Only 3 exclusive floor plans remain. The Townes at Union Village represents the pinnacle of luxury new construction. 
            Secure your private consultation with Dr. Jan Duffy before these exceptional homes are claimed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:7025001955"
              className="bg-white text-amber-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SECURE PRIVATE CONSULTATION
            </a>
            <Link
              href="/floor-plans"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              EXPLORE FLOOR PLANS
            </Link>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
              EXCLUSIVE FLOOR PLANS
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            <span className="font-extralight">The Townes at Union Village</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
              EXCEPTIONAL FLOOR PLANS
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            Discover three meticulously crafted floor plans featuring premium finishes, Century Home Connect® smart technology, 
            and exceptional attention to detail. Each residence represents the pinnacle of modern luxury living.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Residence 1602 */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-blue-600/10"></div>
                <span className="text-gray-600 font-light tracking-wide">Residence 1602</span>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">Residence 1602</h3>
                  <div className="text-3xl font-light text-amber-600 mb-4">From $374,990</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Square Feet</span>
                    <span className="font-semibold text-gray-900">1,405</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Bedrooms</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Bathrooms</span>
                    <span className="font-semibold text-gray-900">2.5</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-light">Garage</span>
                    <span className="font-semibold text-gray-900">2 Car</span>
                  </div>
                </div>
                <Link
                  href="/floor-plans#residence-1602"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center block tracking-wide"
                >
                  EXPLORE DETAILS
                </Link>
              </div>
            </div>

            {/* Residence 1478 */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-blue-600/10"></div>
                <span className="text-gray-600 font-light tracking-wide">Residence 1478</span>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">Residence 1478</h3>
                  <div className="text-3xl font-light text-amber-600 mb-4">From $379,990</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Square Feet</span>
                    <span className="font-semibold text-gray-900">1,478</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Bedrooms</span>
                    <span className="font-semibold text-gray-900">3</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Bathrooms</span>
                    <span className="font-semibold text-gray-900">2.5</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-light">Garage</span>
                    <span className="font-semibold text-gray-900">2 Car</span>
                  </div>
                </div>
                <Link
                  href="/floor-plans#residence-1478"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center block tracking-wide"
                >
                  EXPLORE DETAILS
                </Link>
              </div>
            </div>

            {/* Residence 1479 */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-blue-600/10"></div>
                <span className="text-gray-600 font-light tracking-wide">Residence 1479</span>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">Residence 1479</h3>
                  <div className="text-3xl font-light text-amber-600 mb-4">From $379,990</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Square Feet</span>
                    <span className="font-semibold text-gray-900">1,479</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Bedrooms</span>
                    <span className="font-semibold text-gray-900">3</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">Bathrooms</span>
                    <span className="font-semibold text-gray-900">2.5</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-light">Garage</span>
                    <span className="font-semibold text-gray-900">2 Car</span>
                  </div>
                </div>
                <Link
                  href="/floor-plans#residence-1479"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center block tracking-wide"
                >
                  EXPLORE DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
              COMMUNITY GALLERY
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            <span className="font-extralight">Exceptional Living</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
              COMMUNITY GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            Discover the sophisticated lifestyle awaiting you at The Townes at Union Village. 
            From meticulously designed interiors to thoughtfully planned community spaces, 
            every detail reflects our commitment to exceptional living.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-600 font-light tracking-wide relative z-10">Luxury Home Exterior</span>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-600 font-light tracking-wide relative z-10">Modern Luxury Kitchen</span>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-600 font-light tracking-wide relative z-10">Spacious Living Room</span>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-600 font-light tracking-wide relative z-10">Elegant Master Suite</span>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-600 font-light tracking-wide relative z-10">Premium Bathroom</span>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-600 font-light tracking-wide relative z-10">Community Amenities</span>
            </div>
          </div>
          <Link
            href="/community"
            className="mt-16 inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
          >
            EXPLORE COMMUNITY
          </Link>
        </div>
      </section>

      {/* Why Work With Dr. Jan Duffy */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
              EXCLUSIVE REPRESENTATION
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            <span className="font-extralight">Why Work With</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
              DR. JAN DUFFY?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            Experience the difference of having an exclusive buyer representative who advocates solely for your interests. 
            Dr. Jan Duffy provides expert guidance, insider access, and unwavering commitment to your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Century Communities Partnership</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Exclusive partnership providing insider access while maintaining unwavering commitment to YOUR interests, not the builder's.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Market Expertise</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Comprehensive market analysis and comparable property insights to ensure you understand true value beyond builder claims.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Negotiation Excellence</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Strategic negotiation expertise to maximize your leverage and protect your interests throughout the new construction process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Nevada Specialist</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Nevada License S.0197614. Deep expertise in Union Village and comprehensive knowledge of the entire Las Vegas Valley market.
              </p>
            </div>
          </div>
          <Link
            href="/about-dr-jan"
            className="mt-16 inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
          >
            MEET DR. JAN DUFFY
          </Link>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                PREMIUM LOCATION
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">The Townes at Union Village</span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
                HENDERSON, NEVADA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Discover the perfect blend of sophisticated living and convenient access in Henderson, Nevada. 
              Experience exceptional new construction with expert guidance from Dr. Jan Duffy, your exclusive buyer representative.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-3xl font-light text-gray-900 mb-8 tracking-wide">Why Choose Henderson, NV?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Premium Healthcare Access</h4>
                    <p className="text-gray-600 font-light leading-relaxed">Minutes from Henderson Hospital and top-tier medical facilities, ensuring exceptional healthcare convenience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🛍️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Luxury Shopping Destinations</h4>
                    <p className="text-gray-600 font-light leading-relaxed">Proximity to Galleria at Sunset, premium retailers, and upscale dining establishments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🛣️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Strategic Highway Access</h4>
                    <p className="text-gray-600 font-light leading-relaxed">Convenient access to Highway 95 and I-215 for seamless commuting throughout the Las Vegas Valley.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🌵</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Desert Living Excellence</h4>
                    <p className="text-gray-600 font-light leading-relaxed">Experience the beauty of desert living at 2,000 feet with stunning mountain vistas and outdoor recreation opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <SEOOptimizedMap 
                variant="business-profile"
                title="The Townes at Union Village - Century Communities Henderson, NV"
                description="New townhomes starting from $374,990. Expert guidance from Dr. Jan Duffy, preferred buyer agent."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            FINAL OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Don't Miss This</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-amber-200 tracking-wider">
              EXCLUSIVE OPPORTUNITY
            </span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            With only 3 exclusive floor plans remaining, these exceptional homes represent the pinnacle of luxury new construction. 
            Secure your private consultation with Dr. Jan Duffy before these remarkable residences are claimed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="tel:7025001955"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SECURE PRIVATE CONSULTATION
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
