import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">TechStore</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                专注于为用户提供最优质的科技产品和服务体验，致力于成为您信赖的科技伙伴。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">首页</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">产品</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">特色</a></li>
                <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors">评价</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">新闻动态</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4">客户服务</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">帮助中心</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">退换货政策</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">配送信息</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">支付方式</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">售后服务</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">联系方式</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">400-123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">service@techstore.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                  <span className="text-gray-300">
                    中国上海市浦东新区<br />
                    科技园区999号
                  </span>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="font-medium mb-2">订阅我们的新闻</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="输入您的邮箱"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-blue-500 text-white"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                    订阅
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TechStore. 保留所有权利。
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">服务条款</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie政策</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="回到顶部"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer