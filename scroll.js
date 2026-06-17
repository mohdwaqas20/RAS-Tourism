/**
 * Scrolls to an in-page anchor (e.g. "#services"). If the app isn't currently
 * on the home route, it first navigates home, then scrolls once the section
 * has mounted.
 */
export function scrollToSection(hash, navigate, pathname) {
  const id = hash.replace('#', '')

  const performScroll = () => {
    const el = document.getElementById(id)
    if (el) {
      const navOffset = 84
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  if (pathname !== '/') {
    navigate('/')
    window.setTimeout(performScroll, 120)
  } else {
    performScroll()
  }
}