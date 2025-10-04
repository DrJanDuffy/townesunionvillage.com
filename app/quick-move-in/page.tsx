export default function QuickMoveIn() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quick Move-In Homes
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Move in fast! Several homes are available for immediate or near-future occupancy at The Townes at Union Village
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

      {/* Available Homes Alert */}
      <section className="bg-green-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🏠 QUICK MOVE-IN HOMES AVAILABLE</h3>
          <p className="text-lg mb-4">
            Limited inventory! Several homes are ready for immediate or near-future move-in. Contact Dr. Jan Duffy today to secure your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📞 SECURE YOUR HOME: (702) 500-1955
            </a>
            <a 
              href="#available-homes"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-colors"
            >
              👀 VIEW AVAILABLE HOMES
            </a>
          </div>
        </div>
      </section>

      {/* Available Homes */}
      <section id="available-homes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Quick Move-In Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              These homes are either completed or nearing completion and ready for quick move-in. 
              Pricing and availability subject to change - contact Dr. Jan for current information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Home Image 1</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Residence 1405</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Available Now
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$369,990</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,405</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Move-in Ready:</strong> Yes<br />
                  <strong>Estimated Completion:</strong> Immediate<br />
                  <strong>Status:</strong> Available for viewing
                </div>
                <a 
                  href="tel:7025001955"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Dr. Jan: (702) 500-1955
                </a>
              </div>
            </div>

            {/* Home 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Home Image 2</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Residence 1478</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Ready Soon
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$379,990</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,478</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Move-in Ready:</strong> December 2024<br />
                  <strong>Estimated Completion:</strong> 30-45 days<br />
                  <strong>Status:</strong> Under construction
                </div>
                <a 
                  href="tel:7025001955"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Dr. Jan: (702) 500-1955
                </a>
              </div>
            </div>

            {/* Home 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Home Image 3</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Residence 1479</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$379,990</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,479</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Move-in Ready:</strong> January 2025<br />
                  <strong>Estimated Completion:</strong> 60-75 days<br />
                  <strong>Status:</strong> Pre-construction
                </div>
                <a 
                  href="tel:7025001955"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Dr. Jan: (702) 500-1955
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              * Pricing and availability subject to change. Contact Dr. Jan Duffy for current information and to schedule a private showing.
            </p>
            <a 
              href="tel:7025001955"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              📞 Call Dr. Jan: (702) 500-1955
            </a>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Move-In Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Here's what to expect when purchasing a quick move-in home at The Townes at Union Village
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Dr. Jan</h3>
              <p className="text-gray-600">
                Call (702) 500-1955 or email DrJanSells@UnionVillage.com to discuss available homes and your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Tour</h3>
              <p className="text-gray-600">
                Dr. Jan will arrange a private showing of available homes and help you find the perfect match.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make Offer</h3>
              <p className="text-gray-600">
                With Dr. Jan's expert guidance, submit an offer and negotiate the best terms for your new home.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Move In</h3>
              <p className="text-gray-600">
                Complete financing, final walkthrough, and move into your new home at The Townes at Union Village!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Quick Move-In Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Why choose a quick move-in home at The Townes at Union Village?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Move In Fast</h3>
              <p className="text-gray-600">
                Skip the waiting period and move into your new home immediately or within weeks, not months.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">See What You Get</h3>
              <p className="text-gray-600">
                Tour completed homes to see the actual finishes, layout, and quality before you buy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Live</h3>
              <p className="text-gray-600">
                All homes come with Century Connect® smart home features and premium finishes included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🚨 ACT FAST - QUICK MOVE-IN HOMES ARE LIMITED!
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            These homes won't last long. Contact Dr. Jan Duffy today to secure your quick move-in home at The Townes at Union Village.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 SECURE YOUR HOME: (702) 500-1955
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-colors"
            >
              📧 EMAIL DR. JAN
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
