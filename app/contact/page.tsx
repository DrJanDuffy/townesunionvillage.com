'use client'

import { useState } from 'react'
import RealScoutOfficeListings from '../components/realscout-office-listings'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'phone'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    const mailtoLink = `mailto:DrJanSells@UnionVillage.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Contact: ${formData.preferredContact}\n\nMessage:\n${formData.message}`
    )}`
    window.open(mailtoLink)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to find your dream home at The Townes at Union Village? Let's get started!
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
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and Dr. Jan will get back to you within 24 hours with expert guidance on your new home purchase.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="either">Either Phone or Email</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your dream home, timeline, budget, or any questions you have about The Townes at Union Village..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message to Dr. Jan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">📞</div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">(702) 500-1955</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">📧</div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">DrJanSells@UnionVillage.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">🕒</div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday-Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">📍</div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">1001 Gearus Place, Henderson, NV 89011</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Contact Dr. Jan?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• ✅ Independent agent representing YOUR interests</li>
                  <li>• ✅ Expert knowledge of new construction homes</li>
                  <li>• ✅ Century Communities partnership benefits</li>
                  <li>• ✅ Nevada License S.0197614</li>
                  <li>• ✅ Free consultation and market analysis</li>
                  <li>• ✅ Negotiation power to save you money</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-300 mb-4">
                  Dr. Jan responds to all inquiries within 24 hours. For urgent questions about available homes, 
                  call directly at (702) 500-1955.
                </p>
                <a 
                  href="tel:7025001955"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Call Now for Immediate Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about working with Dr. Jan Duffy
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How much does it cost to work with Dr. Jan?
              </h3>
              <p className="text-gray-600">
                Working with Dr. Jan as your buyer's agent is completely free for you. The builder pays her commission, 
                so you get expert representation at no cost to you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How quickly can I get a response?
              </h3>
              <p className="text-gray-600">
                Dr. Jan responds to all inquiries within 24 hours. For urgent questions about available homes or 
                immediate assistance, call (702) 500-1955.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can Dr. Jan help with financing?
              </h3>
              <p className="text-gray-600">
                Yes! Dr. Jan has connections with preferred lenders who specialize in new construction financing 
                and can help you find the best rates and terms.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What areas does Dr. Jan serve?
              </h3>
              <p className="text-gray-600">
                Dr. Jan specializes in Henderson, NV and the surrounding Las Vegas metro area, with particular 
                expertise in Union Village and new construction communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Start Your Home Buying Journey?
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Don't wait - The Townes at Union Village is selling fast! Contact Dr. Jan Duffy today for expert guidance 
            and VIP access to available homes.
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
              href="/floor-plans"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              🏠 View Floor Plans
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood Properties */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-blue-200">
                NEIGHBORHOOD PROPERTIES
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Explore Henderson Properties</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Ready to find your dream home? Discover other exceptional properties in Henderson 
              with expert guidance from Dr. Jan Duffy, your exclusive buyer representative.
            </p>
          </div>
          <RealScoutOfficeListings 
            title="Henderson Properties with Dr. Jan Duffy"
            subtitle="Expert guidance from Dr. Jan Duffy • Properties $500K-$600K • Single Family & Other Homes"
          />
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
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">The Townes at Union Village</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">Century Communities</p>
                
                <div className="flex items-start space-x-3 mb-6">
                  <div className="text-amber-600 text-xl">📍</div>
                  <div>
                    <p className="text-gray-900 font-medium">1001 Gearus Place</p>
                    <p className="text-gray-600">Henderson, NV 89011</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mb-8">
                  <div className="text-amber-600 text-xl">📞</div>
                  <a href="tel:7025001955" className="text-gray-900 font-medium hover:text-amber-600 transition-colors">
                    (702) 500-1955
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href="https://maps.google.com/?q=1001+Gearus+Place,+Henderson,+NV+89011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors duration-300"
                  >
                    GET DIRECTIONS
                  </a>
                  <a
                    href="https://maps.google.com/?q=1001+Gearus+Place,+Henderson,+NV+89011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-4 py-3 rounded-lg text-center font-semibold transition-colors duration-300"
                  >
                    VIEW ON MAP
                  </a>
                  <a
                    href="mailto:DrJanSells@UnionVillage.com"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors duration-300"
                  >
                    EMAIL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
