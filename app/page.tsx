import Image from 'next/image'
import Link from 'next/link'
import SEOOptimizedMap from './components/seo-optimized-map'
import RealScoutWidget from './components/realscout-widget'
import RealScoutOfficeListings from './components/realscout-office-listings'

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

      {/* RealScout Search Widget - Primary Lead Capture */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                PROPERTY SEARCH
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Find Your Dream Home</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Search all available properties in Henderson, NV and surrounding areas with expert guidance from Dr. Jan Duffy, 
              your exclusive buyer representative.
            </p>
          </div>
          <RealScoutWidget 
            title="Search All Henderson Properties"
            subtitle="Expert guidance from Dr. Jan Duffy • Your exclusive buyer representative"
          />
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

      {/* Neighborhood Properties */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-blue-200">
                NEIGHBORHOOD PROPERTIES
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Explore Other Henderson Homes</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Looking for something different? Discover other exceptional properties in the Henderson area 
              with expert guidance from Dr. Jan Duffy, your exclusive buyer representative.
            </p>
          </div>
          <RealScoutOfficeListings 
            title="Henderson Neighborhood Properties"
            subtitle="Expert guidance from Dr. Jan Duffy • Properties $500K-$600K • Single Family & Other Homes"
          />
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
