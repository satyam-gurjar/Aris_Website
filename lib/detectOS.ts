// Utility to detect user's operating system
export function detectOS(): 'windows' | 'macos' | 'linux' | 'unknown' {
  if (typeof window === 'undefined') return 'unknown'
  
  const userAgent = window.navigator.userAgent.toLowerCase()
  const platform = window.navigator.platform.toLowerCase()
  
  if (platform.includes('win') || userAgent.includes('windows')) {
    return 'windows'
  }
  
  if (platform.includes('mac') || userAgent.includes('mac')) {
    return 'macos'
  }
  
  if (platform.includes('linux') || userAgent.includes('linux') || userAgent.includes('x11')) {
    return 'linux'
  }
  
  return 'unknown'
}
