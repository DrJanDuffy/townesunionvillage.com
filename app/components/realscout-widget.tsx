'use client'

import { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-encoded-id': string
      }
    }
  }
}

interface RealScoutWidgetProps {
  className?: string
  title?: string
  subtitle?: string
}

export default function RealScoutWidget({ 
  className = '', 
  title = "Find Your Dream Home",
  subtitle = "Search all available properties in Henderson, NV and surrounding areas"
}: RealScoutWidgetProps) {
  useEffect(() => {
    // Load RealScout script if not already loaded
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script')
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.type = 'module'
      document.head.appendChild(script)
    }

    // Add custom styles if not already added
    if (!document.querySelector('style[data-realscout-custom]')) {
      const style = document.createElement('style')
      style.setAttribute('data-realscout-custom', 'true')
      style.textContent = `
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 500px !important;
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return (
    <div className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-6">
        <div className="text-center">
          <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{title}</h3>
          <p className="text-amber-100 font-light text-sm">{subtitle}</p>
        </div>
      </div>
      
      {/* Widget Container */}
      <div className="p-8">
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
      </div>
      
      {/* Footer Note */}
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <p className="text-center text-gray-600 text-sm font-light">
          Powered by RealScout • Expert guidance from Dr. Jan Duffy
        </p>
      </div>
    </div>
  )
}
