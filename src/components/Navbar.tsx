import { useState } from 'react'
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">TechStore</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">首页</a>
              <a href="#products" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">产品</a>
              <a href="#features" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">特色</a>
              <a href="#reviews" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">评价</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">联系我们</a>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">首页</a>
              <a href="#products" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">产品</a>
              <a href="#features" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">特色</a>
              <a href="#reviews" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">评价</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">联系我们</a>
              
              <div className="flex items-center space-x-4 px-3 py-2 border-t mt-4 pt-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar