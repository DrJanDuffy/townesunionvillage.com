'use client'

export default function DebugEnv() {
  // This component will help us debug the environment variable issue
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded-lg text-sm">
      <h3 className="font-bold text-yellow-800 mb-2">🔧 Environment Debug Info</h3>
      <p className="text-yellow-700">
        <strong>API Key Status:</strong> {apiKey ? '✅ Found' : '❌ Missing'}
      </p>
      <p className="text-yellow-700">
        <strong>API Key Length:</strong> {apiKey ? apiKey.length : '0'} characters
      </p>
      <p className="text-yellow-700">
        <strong>API Key Preview:</strong> {apiKey ? `${apiKey.substring(0, 10)}...` : 'Not available'}
      </p>
      <p className="text-yellow-600 text-xs mt-2">
        This debug info will help identify the API key configuration issue.
      </p>
    </div>
  )
}
