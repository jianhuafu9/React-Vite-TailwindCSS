import { useState } from 'react'
import { X, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react'
import { useVersionCheck } from '../hooks/useVersionCheck'

interface UpdateNotificationProps {
  checkInterval?: number
  enabled?: boolean
}

export const UpdateNotification: React.FC<UpdateNotificationProps> = ({
  checkInterval = 30000,
  enabled = true
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const {
    currentVersion,
    latestVersion,
    hasUpdate,
    isChecking,
    error,
    confirmUpdate,
    ignoreUpdate,
    refreshPage
  } = useVersionCheck({ checkInterval, enabled })

  // 如果没有更新，不显示通知
  if (!hasUpdate || !latestVersion) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        {/* 头部 */}
        <div className="bg-blue-50 px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <h3 className="text-sm font-medium text-gray-900">
                发现新版本
              </h3>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              {isExpanded ? (
                <X className="h-4 w-4" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* 内容 */}
        <div className="p-4">
          <div className="space-y-3">
            {/* 版本信息 */}
            <div className="text-sm text-gray-600">
              <div className="flex justify-between">
                <span>当前版本:</span>
                <span className="font-mono">{currentVersion}</span>
              </div>
              <div className="flex justify-between">
                <span>最新版本:</span>
                <span className="font-mono text-blue-600">{latestVersion.version}</span>
              </div>
            </div>

            {/* 更新内容 */}
            {isExpanded && latestVersion.updateContent.length > 0 && (
              <div className="border-t pt-3">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  更新内容:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {latestVersion.updateContent.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 强制更新提示 */}
            {latestVersion.forceUpdate && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <span className="text-sm text-red-800">
                    此更新为强制更新，确认后将自动刷新页面
                  </span>
                </div>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex space-x-2 pt-2">
              <button
                onClick={confirmUpdate}
                disabled={isChecking}
                className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isChecking ? '处理中...' : '确认更新'}
              </button>
              
              {!latestVersion.forceUpdate && (
                <button
                  onClick={ignoreUpdate}
                  disabled={isChecking}
                  className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  忽略
                </button>
              )}
            </div>

            {/* 手动刷新按钮 */}
            <button
              onClick={refreshPage}
              className="w-full bg-gray-50 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>手动刷新页面</span>
            </button>
          </div>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="bg-red-50 border-t border-red-200 px-4 py-3">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <span className="text-sm text-red-800">{error}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
