import { Shield, Truck, Headphones, Award, Clock, Users } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "品质保证",
      description: "所有产品均为正品，提供官方质保服务，让您购物无忧"
    },
    {
      icon: Truck,
      title: "快速配送",
      description: "24小时内发货，全国主要城市次日达，偏远地区3-5天到货"
    },
    {
      icon: Headphones,
      title: "专业客服",
      description: "7×24小时在线客服支持，专业技术团队为您解决各种问题"
    },
    {
      icon: Award,
      title: "荣誉认证",
      description: "获得多项行业认证，连续5年被评为优秀电商平台"
    },
    {
      icon: Clock,
      title: "售后无忧",
      description: "30天无理由退换货，1年免费维修，终身技术支持"
    },
    {
      icon: Users,
      title: "用户至上",
      description: "超过100万用户的信赖选择，98%的客户满意度评价"
    }
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们致力于为用户提供最优质的产品和服务体验
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100万+</div>
              <div className="text-blue-100">满意客户</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">产品种类</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">客户满意度</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
              <div className="text-blue-100">客服响应</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection