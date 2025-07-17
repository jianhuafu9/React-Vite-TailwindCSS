import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import FeaturesSection from './components/FeaturesSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}

export default App
