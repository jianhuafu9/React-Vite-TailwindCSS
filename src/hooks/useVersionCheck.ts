import { useState, useEffect, useCallback } from 'react'

interface VersionInfo {
  version: string
  buildTime: string
  updateContent: string[]
  forceUpdate: boolean
}

interface UseVersionCheckOptions {
  checkInterval?: number // 检查间隔（毫秒）
  enabled?: boolean // 是否启用检查
}

export const useVersionCheck = (options: UseVersionCheckOptions = {}) => {
  const { checkInterval = 30000, enabled = true } = options // 默认30秒检查一次
  
  const [currentVersion, setCurrentVersion] = useState<string>('')
  const [latestVersion, setLatestVersion] = useState<VersionInfo | null>(null)
  const [hasUpdate, setHasUpdate] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 获取本地存储的版本信息
  const getLocalVersion = useCallback(() => {
    return localStorage.getItem('app_version') || '0.0.0'
  }, [])

  // 保存版本信息到本地存储
  const saveLocalVersion = useCallback((version: string) => {
    localStorage.setItem('app_version', version)
    setCurrentVersion(version)
  }, [])

  // 检查版本更新
  const checkVersion = useCallback(async () => {
    if (!enabled) return

    setIsChecking(true)
    setError(null)

    try {
      // 添加时间戳防止缓存
      const timestamp = new Date().getTime()
      const response = await fetch(`/version.json?t=${timestamp}`, {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const versionInfo: VersionInfo = await response.json()
      setLatestVersion(versionInfo)

      const localVersion = getLocalVersion()
      
      // 比较版本号
      if (versionInfo.version !== localVersion) {
        setHasUpdate(true)
      } else {
        setHasUpdate(false)
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : '检查版本失败')
      console.error('版本检查失败:', err)
    } finally {
      setIsChecking(false)
    }
  }, [enabled, getLocalVersion])

  // 确认更新
  const confirmUpdate = useCallback(() => {
    if (latestVersion) {
      saveLocalVersion(latestVersion.version)
      setHasUpdate(false)
      
      // 如果是强制更新，刷新页面
      if (latestVersion.forceUpdate) {
        window.location.reload()
      }
    }
  }, [latestVersion, saveLocalVersion])

  // 忽略此次更新
  const ignoreUpdate = useCallback(() => {
    if (latestVersion) {
      saveLocalVersion(latestVersion.version)
      setHasUpdate(false)
    }
  }, [latestVersion, saveLocalVersion])

  // 手动刷新页面
  const refreshPage = useCallback(() => {
    window.location.reload()
  }, [])

  // 初始化和定时检查
  useEffect(() => {
    const localVersion = getLocalVersion()
    setCurrentVersion(localVersion)
    
    // 立即检查一次
    checkVersion()

    // 设置定时检查
    if (enabled && checkInterval > 0) {
      const timer = setInterval(checkVersion, checkInterval)
      return () => clearInterval(timer)
    }
  }, [checkVersion, checkInterval, enabled, getLocalVersion])

  return {
    currentVersion,
    latestVersion,
    hasUpdate,
    isChecking,
    error,
    checkVersion,
    confirmUpdate,
    ignoreUpdate,
    refreshPage
  }
}
