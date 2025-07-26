import './css/core.css'
import './css/layout.css'

import Lenis from 'lenis'

function setupSmoothScroller() {
  const lenis = new Lenis({
    anchors: true,
  })

  lenis.start()

  requestAnimationFrame(function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScroller()
})
