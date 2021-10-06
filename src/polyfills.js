export default (async () => {
  if (
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
  ) {
    await import(/* webpackChunkName: "intersection-observer" */ 'intersection-observer')
  }
})()
