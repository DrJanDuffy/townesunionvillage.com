import SEOOptimizedMap from '../components/seo-optimized-map'

export default function FloorPlans() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Floor Plans
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose from 3 stunning two-story townhome floor plans at The Townes at Union Village
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

      {/* Floor Plans Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Townes at Union Village Floor Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each home features expansive living spaces, premium finishes, and smart tech included with the Century Connect® package.
            </p>
          </div>

          <div className="space-y-16">
            {/* Residence 1405 */}
            <div id="residence-1405" className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Residence 1405</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">From $374,990</div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">1,405</div>
                      <div className="text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2.5</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2</div>
                      <div className="text-gray-600">Car Garage</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Nook option available</li>
                      <li>• Open floor plan with modern design</li>
                      <li>• 2 bedrooms with spacious layout</li>
                      <li>• 2.5 bathrooms with premium finishes</li>
                      <li>• 2-car garage with storage</li>
                      <li>• Century Home Connect® smart home package</li>
                      <li>• Energy-efficient features</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:7025001955"
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Dr. Jan: (702) 500-1955
                    </a>
                    <a 
                      href="mailto:DrJanSells@UnionVillage.com"
                      className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
                    >
                      Email for Details
                    </a>
                  </div>
                </div>
                <div className="bg-gray-200 flex items-center justify-center min-h-[400px]">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🏠</div>
                    <p>Floor Plan Image</p>
                    <p className="text-sm">Residence 1405</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Residence 1478 */}
            <div id="residence-1478" className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-200 flex items-center justify-center min-h-[400px] lg:order-2">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🏠</div>
                    <p>Floor Plan Image</p>
                    <p className="text-sm">Residence 1478</p>
                  </div>
                </div>
                <div className="p-8 lg:order-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Residence 1478</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">From $379,990</div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">1,478</div>
                      <div className="text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">3</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2.5</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2</div>
                      <div className="text-gray-600">Car Garage</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Optional Dual Primary Suites</li>
                      <li>• Nook option available</li>
                      <li>• Spacious open-concept living</li>
                      <li>• 3 bedrooms with modern layout</li>
                      <li>• 2.5 bathrooms with luxury finishes</li>
                      <li>• 2-car garage with additional storage</li>
                      <li>• Century Home Connect® smart home technology</li>
                      <li>• Premium interior features</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:7025001955"
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Dr. Jan: (702) 500-1955
                    </a>
                    <a 
                      href="mailto:DrJanSells@UnionVillage.com"
                      className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
                    >
                      Email for Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Residence 1479 */}
            <div id="residence-1479" className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Residence 1479</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">From $379,990</div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">1,479</div>
                      <div className="text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">3</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2.5</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2</div>
                      <div className="text-gray-600">Car Garage</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Open floor plan design</li>
                      <li>• 3 bedrooms with flexible layout</li>
                      <li>• 2.5 bathrooms with designer touches</li>
                      <li>• 2-car garage with workspace</li>
                      <li>• Century Home Connect® smart home features</li>
                      <li>• High-end finishes throughout</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:7025001955"
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Dr. Jan: (702) 500-1955
                    </a>
                    <a 
                      href="mailto:DrJanSells@UnionVillage.com"
                      className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
                    >
                      Email for Details
                    </a>
                  </div>
                </div>
                <div className="bg-gray-200 flex items-center justify-center min-h-[400px]">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🏠</div>
                    <p>Floor Plan Image</p>
                    <p className="text-sm">Residence 1479</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Floor Plans at The Townes at Union Village
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Located at 1001 Gearus Place, Henderson, NV 89011. Visit our model homes and see these beautiful floor plans in person.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Model Homes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🏠</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Model Homes Open Daily</h4>
                    <p className="text-gray-600 text-sm">Tour our fully furnished model homes showcasing all three floor plans at Union Village.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">📐</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Floor Plan Options</h4>
                    <p className="text-gray-600 text-sm">Choose from Residence 1405 (2 bed), 1478 (3 bed), or 1479 (3 bed) - all with 2.5 baths and 2-car garages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🎨</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Design Center</h4>
                    <p className="text-gray-600 text-sm">Customize your new home with premium finishes and Century Home Connect® smart features.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💰</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Starting from $374,990</h4>
                    <p className="text-gray-600 text-sm">Competitive pricing with Century Communities quality construction and Dr. Jan Duffy's expert guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <SEOOptimizedMap 
              variant="business-profile"
              title="Floor Plans at The Townes at Union Village - Henderson, NV"
              description="Model homes open daily. Residence 1405, 1478, and 1479 floor plans starting from $374,990."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Dr. Jan Duffy today for expert guidance and VIP access to The Townes at Union Village.
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
