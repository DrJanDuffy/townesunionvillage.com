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
