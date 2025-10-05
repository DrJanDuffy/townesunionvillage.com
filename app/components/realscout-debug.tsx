'use client'

import { useEffect, useState } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-encoded-id': string
      }
    }
  }
}

export default function RealScoutDebug() {
  const [debugInfo, setDebugInfo] = useState({
    scriptLoaded: false,
    customElementDefined: false,
    stylesAdded: false,
    cloudflareWorker: false
  })

  useEffect(() => {
    // Check for RealScout script
    const realscoutScript = document.querySelector('script[src*="realscout"]')
    
    // Check if custom element is defined
    const customElementDefined = customElements.get('realscout-advanced-search') !== undefined
    
    // Check for our custom styles
    const customStyles = document.querySelector('style[data-realscout-custom]')
    
    // Check for Cloudflare Worker (look for any scripts that might be from workers)
    const workerScripts = document.querySelectorAll('script[src*="workers"]')
    
    setDebugInfo({
      scriptLoaded: !!realscoutScript,
      customElementDefined,
      stylesAdded: !!customStyles,
      cloudflareWorker: workerScripts.length > 0
    })

    // Add custom styles if not already added
    if (!customStyles) {
      const style = document.createElement('style')
      style.setAttribute('data-realscout-custom', 'true')
      style.textContent = `
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 500px !important;
          display: block !important;
          min-height: 400px !important;
          border: 2px dashed #ccc !important;
        }
      `
      document.head.appendChild(style)
      setDebugInfo(prev => ({ ...prev, stylesAdded: true }))
    }

    // Try to load the script manually if not loaded
    if (!realscoutScript) {
      const script = document.createElement('script')
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.type = 'module'
      script.onload = () => {
        setDebugInfo(prev => ({ ...prev, scriptLoaded: true }))
        // Check again after script loads
        setTimeout(() => {
          setDebugInfo(prev => ({ 
            ...prev, 
            customElementDefined: customElements.get('realscout-advanced-search') !== undefined 
          }))
        }, 1000)
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 m-4">
      <h3 className="text-lg font-bold mb-4 text-yellow-800">RealScout Widget Debug Info</h3>
      
      <div className="space-y-2 text-sm">
        <div className={`flex items-center ${debugInfo.scriptLoaded ? 'text-green-600' : 'text-red-600'}`}>
          <span className="w-3 h-3 rounded-full mr-2 bg-current"></span>
          Script Loaded: {debugInfo.scriptLoaded ? 'YES' : 'NO'}
        </div>
        
        <div className={`flex items-center ${debugInfo.customElementDefined ? 'text-green-600' : 'text-red-600'}`}>
          <span className="w-3 h-3 rounded-full mr-2 bg-current"></span>
          Custom Element Defined: {debugInfo.customElementDefined ? 'YES' : 'NO'}
        </div>
        
        <div className={`flex items-center ${debugInfo.stylesAdded ? 'text-green-600' : 'text-red-600'}`}>
          <span className="w-3 h-3 rounded-full mr-2 bg-current"></span>
          Custom Styles Added: {debugInfo.stylesAdded ? 'YES' : 'NO'}
        </div>
        
        <div className={`flex items-center ${debugInfo.cloudflareWorker ? 'text-green-600' : 'text-yellow-600'}`}>
          <span className="w-3 h-3 rounded-full mr-2 bg-current"></span>
          Cloudflare Worker Scripts: {debugInfo.cloudflareWorker ? 'DETECTED' : 'NOT DETECTED'}
        </div>
      </div>

      <div className="mt-4 p-4 bg-white border rounded">
        <h4 className="font-semibold mb-2">Widget Element:</h4>
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
      </div>
    </div>
  )
}
