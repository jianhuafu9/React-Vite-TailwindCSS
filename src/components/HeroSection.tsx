import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                全球领先的科技产品
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                创新科技
                <span className="block text-blue-600">改变生活</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                探索最新的智能设备、高端电子产品和创新解决方案。我们致力于为您提供改变生活方式的优质科技产品。
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  立即购买
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  观看演示
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="用户1" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" alt="用户2" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="用户3" />
                  </div>
                  <span className="ml-3 text-sm text-gray-600">10万+满意客户</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.9/5 用户评分</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              <div className="relative z-10">
                <img
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop"
                  alt="最新科技产品"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 -left-4 bg-white rounded-lg shadow-lg p-3 z-20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">实时库存</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24h</div>
                  <div className="text-sm text-gray-600">快速发货</div>
                </div>
              </div>
              
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl -z-10 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection