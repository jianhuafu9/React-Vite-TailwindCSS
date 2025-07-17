import { Star, Quote } from 'lucide-react'

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "张小明",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      rating: 5,
      title: "iPhone 15 Pro Max",
      content: "非常满意的购物体验！产品质量很好，配送速度也很快。客服态度很专业，解答了我所有的疑问。强烈推荐！",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "李美丽",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      rating: 5,
      title: "MacBook Pro M3",
      content: "作为设计师，这台MacBook完全满足了我的工作需求。性能强大，屏幕显示效果出色。包装精美，售后服务也很到位。",
      date: "2024-01-12"
    },
    {
      id: 3,
      name: "王先生",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      rating: 4,
      title: "AirPods Pro 2",
      content: "音质确实不错，降噪效果明显。佩戴舒适度很好，适合长时间使用。价格虽然有点贵，但物有所值。",
      date: "2024-01-10"
    },
    {
      id: 4,
      name: "陈女士",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      rating: 5,
      title: "iPad Air M2",
      content: "孩子学习用的，屏幕大小正合适。系统流畅，应用丰富。家长控制功能很实用，购买后孩子学习效率明显提高。",
      date: "2024-01-08"
    },
    {
      id: 5,
      name: "刘工程师",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      rating: 5,
      title: "Apple Watch Ultra 2",
      content: "健身爱好者必备！GPS定位精准，电池续航给力。运动数据记录详细，健康监测功能很全面。外观设计也很棒！",
      date: "2024-01-05"
    },
    {
      id: 6,
      name: "赵女士",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=64&h=64&fit=crop&crop=face",
      rating: 4,
      title: "Mac Studio M2",
      content: "视频剪辑工作专用，性能强劲。渲染速度比之前的设备快了好几倍。静音效果不错，长时间工作也不会有噪音困扰。",
      date: "2024-01-03"
    }
  ]

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start mb-4">
        <img 
          src={review.avatar} 
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-900">{review.name}</h4>
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-sm text-blue-600 font-medium">{review.title}</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100" />
        <p className="text-gray-600 leading-relaxed pl-6">
          {review.content}
        </p>
      </div>
    </div>
  )

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            客户评价
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            听听我们的客户怎么说，真实评价见证品质服务
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">基于 15,847 个客户评价</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="flex items-center justify-between md:flex-col">
              <span className="text-gray-600">5星</span>
              <div className="flex-1 mx-2 md:mx-0 md:my-2">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">78%</span>
            </div>
            <div className="flex items-center justify-between md:flex-col">
              <span className="text-gray-600">4星</span>
              <div className="flex-1 mx-2 md:mx-0 md:my-2">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">15%</span>
            </div>
            <div className="flex items-center justify-between md:flex-col">
              <span className="text-gray-600">3星</span>
              <div className="flex-1 mx-2 md:mx-0 md:my-2">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '5%'}}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">5%</span>
            </div>
            <div className="flex items-center justify-between md:flex-col">
              <span className="text-gray-600">2星</span>
              <div className="flex-1 mx-2 md:mx-0 md:my-2">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '1%'}}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">1%</span>
            </div>
            <div className="flex items-center justify-between md:flex-col">
              <span className="text-gray-600">1星</span>
              <div className="flex-1 mx-2 md:mx-0 md:my-2">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '1%'}}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">1%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection