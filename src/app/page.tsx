'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-200 dark:bg-sky-700 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200 dark:bg-indigo-700 rounded-full opacity-25 animate-pulse delay-1000"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center max-w-2xl space-y-8 fade-in">
          
          {/* Weather Icons Animation */}
          <div className="flex justify-center space-x-4 mb-8 text-6xl">
            <span className="animate-bounce delay-100">☀️</span>
            <span className="animate-bounce delay-200">⛅</span>
            <span className="animate-bounce delay-300">🌧️</span>
            <span className="animate-bounce delay-400">❄️</span>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
              Weather
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-thai">
              Get the latest weather updates in your area
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Link
              href="/weather"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 active:translate-y-0 active:shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <span className="font-thai">Check the weather</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">🌤️</span>
              </span>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </Link>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 max-w-3xl mx-auto">
            <div className="glass-container p-4 text-center space-y-2 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl">🌡️</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 font-thai">Temperature</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-thai">Accurate every hour</p>
            </div>
            
            <div className="glass-container p-4 text-center space-y-2 hover:scale-105 transition-transform duration-300 delay-100">
              <div className="text-2xl">💨</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 font-thai">Wind</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-thai">Direction and speed</p>
            </div>
            
            <div className="glass-container p-4 text-center space-y-2 hover:scale-105 transition-transform duration-300 delay-200">
              <div className="text-2xl">💧</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 font-thai">Humidity</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-thai">Humidity level in the air</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20 text-blue-200 dark:text-blue-800"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </main>
  );
}
