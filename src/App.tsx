import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import FeaturesSection from './components/FeaturesSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import { UpdateNotification } from './components/UpdateNotification'

function App() {
  const [showTestPage, setShowTestPage] = useState(false)
  
  if (showTestPage) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-xl font-semibold text-gray-900">版本检测测试</h1>
              <button
                onClick={() => setShowTestPage(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                返回主页
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
      
      {/* 版本更新通知 */}
      <UpdateNotification 
        checkInterval={30000} // 30秒检查一次
        enabled={true} // 启用版本检查
      />
    </div>
  )
}

export default App
