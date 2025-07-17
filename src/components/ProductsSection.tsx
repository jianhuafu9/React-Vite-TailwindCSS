import { ShoppingCart, Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "¥9,999",
      originalPrice: "¥10,999",
      image: "https://images.unsplash.com/photo-1592286115803-a1c3b552ee43?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 2453,
      badge: "热销"
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: "¥14,999",
      originalPrice: "¥16,999",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 1876,
      badge: "新品"
    },
    {
      id: 3,
      name: "AirPods Pro 2",
      price: "¥1,899",
      originalPrice: "¥2,399",
      image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 3256,
      badge: "限时特惠"
    },
    {
      id: 4,
      name: "iPad Air M2",
      price: "¥4,999",
      originalPrice: "¥5,999",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 1543,
      badge: "推荐"
    },
    {
      id: 5,
      name: "Apple Watch Ultra 2",
      price: "¥6,299",
      originalPrice: "¥6,999",
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 987,
      badge: "户外专用"
    },
    {
      id: 6,
      name: "Mac Studio M2",
      price: "¥15,999",
      originalPrice: "¥17,999",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 654,
      badge: "专业级"
    }
  ]

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.badge}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
          </div>
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          加入购物车
        </Button>
      </div>
    </div>
  )

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            热门产品
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            精选最受欢迎的科技产品，品质保证，价格优惠
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            查看全部产品
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection