import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let initialized = false

export function initSiteMotion() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  gsap.registerPlugin(ScrollTrigger)

  if (reduced) {
    document.documentElement.classList.add('reduced-motion')
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((item) => {
      item.style.opacity = '1'
      item.style.transform = 'none'
    })
    return
  }

  const lenis = new Lenis({
    lerp: 0.09,
    smoothWheel: true,
  })

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  lenis.on('scroll', ScrollTrigger.update)

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((item, index) => {
    gsap.set(item, { opacity: 0, y: 18 })
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: Math.min(index * 0.03, 0.12),
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        once: true,
      },
    })
  })

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((item) => {
    const depth = item.dataset.parallax === 'deep' ? 44 : 22
    gsap.to(item, {
      y: depth,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  document.querySelectorAll<HTMLElement>('.apps-section__intro').forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 112px',
      endTrigger: '.apps-section',
      end: 'bottom bottom',
      pin: window.innerWidth > 900,
      pinSpacing: false,
    })
  })

  document.querySelectorAll<HTMLElement>('.hero-section__lead').forEach((item) => {
    gsap.fromTo(
      item,
      { y: 0 },
      {
        y: -26,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  })
}
