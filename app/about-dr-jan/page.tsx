import SEOOptimizedMap from '../components/seo-optimized-map'
import RealScoutWidget from '../components/realscout-widget'

export default function AboutDrJan() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Dr. Jan Duffy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your Preferred Buyer Agent and New Home Expert
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

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert Guidance You Can Trust
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                As an independent real estate agent, Dr. Jan Duffy represents YOUR interests, 
                not the builder's. Get expert guidance, market knowledge, and negotiation power 
                when buying your new home at The Townes at Union Village.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Independent agent representing YOUR interests</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Nevada License S.0197614</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Deep Henderson market knowledge</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Century Communities partnership</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-8xl mb-4">👩‍💼</div>
                <p>Dr. Jan Duffy</p>
                <p className="text-sm">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Dr. Jan */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Dr. Jan Duffy?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Century Communities Partnership</h3>
              <p className="text-gray-600">
                I work directly with Century Communities to give you insider access while representing YOUR interests, not theirs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Expertise</h3>
              <p className="text-gray-600">
                I'll show you comparable communities and help you understand true market value—not just what the builder tells you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Negotiation Power</h3>
              <p className="text-gray-600">
                Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Henderson Specialist</h3>
              <p className="text-gray-600">
                Nevada License S.0197614. Deep knowledge of Union Village and the entire Henderson metro area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Dr. Jan Duffy Helps You
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive support throughout your home buying journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🏠</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">New Construction Expertise</h3>
                  <p className="text-gray-600">
                    Specialized knowledge in new construction homes, builder contracts, and the unique aspects of buying new builds.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📋</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contract Negotiation</h3>
                  <p className="text-gray-600">
                    Expert negotiation skills to get you the best terms, upgrades, and pricing on your new home.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">🔍</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
                  <p className="text-gray-600">
                    Comprehensive market analysis to ensure you're making a smart investment decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🏦</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lender Connections</h3>
                  <p className="text-gray-600">
                    Access to preferred lenders who specialize in new construction financing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Timeline Management</h3>
                  <p className="text-gray-600">
                    Help you navigate the construction timeline and coordinate all aspects of your move.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Ensure your new home meets quality standards through thorough inspections and oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What Clients Say About Dr. Jan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "Dr. Jan made buying our new home so easy. Her expertise in new construction was invaluable, 
                and she saved us thousands through negotiation."
              </p>
              <p className="font-semibold">- Sarah & Mike Johnson</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "We couldn't have asked for a better agent. Dr. Jan's knowledge of the Henderson market 
                helped us make the perfect choice for our family."
              </p>
              <p className="font-semibold">- The Rodriguez Family</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "From start to finish, Dr. Jan was professional, knowledgeable, and always had our best 
                interests at heart. Highly recommended!"
              </p>
              <p className="font-semibold">- Jennifer & David Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Work With Dr. Jan Duffy?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact Dr. Jan today for expert guidance on your new home purchase at The Townes at Union Village.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">(702) 500-1955</p>
              <a 
                href="tel:7025001955"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">DrJanSells@UnionVillage.com</p>
              <a 
                href="mailto:DrJanSells@UnionVillage.com"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Email
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 mb-4">
                Monday-Sunday<br />
                10:00 AM - 6:00 PM
              </p>
              <a 
                href="tel:7025001955"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Call
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nevada License Information</h3>
            <p className="text-gray-600 mb-4">
              Dr. Jan Duffy is a licensed real estate agent in Nevada (License #S.0197614) 
              specializing in new construction homes and buyer representation.
            </p>
            <p className="text-sm text-gray-500">
              Independent real estate resource. Not affiliated with or endorsed by Century Communities. 
              Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Contact Map */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Dr. Jan Duffy at Union Village
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Located at 1001 Gearus Place, Henderson, NV 89011. Schedule your consultation with Dr. Jan Duffy, 
              your preferred buyer agent for The Townes at Union Village.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Jan Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🎓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nevada Licensed Agent</h4>
                    <p className="text-gray-600 text-sm">Licensed real estate agent in Nevada (License #S.0197614) specializing in new construction homes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🤝</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Buyer Representation</h4>
                    <p className="text-gray-600 text-sm">Independent agent representing YOUR interests, not the builder's. Get unbiased expert guidance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🏗️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">New Construction Expert</h4>
                    <p className="text-gray-600 text-sm">Deep knowledge of Century Communities, Union Village, and the Henderson real estate market.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💼</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Service</h4>
                    <p className="text-gray-600 text-sm">Available Monday-Sunday, 10 AM - 6 PM for consultations and property tours.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <SEOOptimizedMap 
              variant="business-profile"
              title="Dr. Jan Duffy - Real Estate Agent at Union Village Henderson, NV"
              description="Nevada licensed real estate agent specializing in new construction homes. Contact (702) 500-1955."
            />
          </div>
        </div>
      </section>

      {/* RealScout Search Widget */}
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
              Let Dr. Jan Duffy guide you to your perfect home. Search all available properties in Henderson, NV and 
              surrounding areas with expert guidance from your exclusive buyer representative.
            </p>
          </div>
          <RealScoutWidget 
            title="Search with Dr. Jan Duffy"
            subtitle="Your exclusive buyer representative • Expert guidance guaranteed"
          />
        </div>
      </section>
    </div>
  )
}
