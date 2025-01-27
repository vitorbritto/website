import './css/core.css'
import './css/theme.css'
import './css/icon.css'
import './css/header.css'
import './css/footer.css'
import './css/menu.css'
import './css/social.css'
import './css/responsive.css'
import './css/body.css'
import './css/language-selector.css'
import './css/hamburger.css'

import Lenis from 'lenis'

import { getCurrentLanguage, getTranslation, setLanguage } from './i18n'
;(window as any).setLanguage = setLanguage

const currentLang = getCurrentLanguage()
const t = getTranslation(currentLang)

function setupLocales() {
  // Navegação
  document.querySelectorAll('.menu__item-link').forEach((el) => {
    const key = el.textContent?.toLowerCase()
    if (key && key in t.nav) {
      el.textContent = t.nav[key as keyof typeof t.nav]
    }
  })

  // Introdução
  const intro = document.querySelector('p strong')
  if (intro) intro.textContent = t.intro.greeting

  // Descrição
  const description = intro?.parentElement?.nextElementSibling
  if (description) description.textContent = t.intro.description

  // LinkedIn
  const linkedin = description?.nextElementSibling?.querySelector('a')
  if (linkedin) linkedin.textContent = t.intro.linkedin

  // Títulos das seções
  document.querySelectorAll('.main__title').forEach((el) => {
    const key = el.textContent
      ?.toLowerCase()
      .replace('🛠 ', '')
      .replace('🚀 ', '')
    if (key && key in t.skills) {
      const emoji = el.querySelector('.prefix')?.textContent || ''
      el.textContent = emoji + ' ' + t.skills.title
    } else if (key === 'stack') {
      const emoji = el.querySelector('.prefix')?.textContent || ''
      el.textContent = emoji + ' ' + t.stack.title
    }
  })

  // Skills titles
  document.querySelectorAll('.skill__title strong').forEach((el) => {
    const key = el.textContent?.toLowerCase()
    if (key === 'front-end' && t.skills.frontend) {
      el.textContent = t.skills.frontend.title
    } else if (key === 'back-end' && t.skills.backend) {
      el.textContent = t.skills.backend.title
    } else if (key === 'databases' && t.skills.databases) {
      el.textContent = t.skills.databases.title
    } else if (key === 'devops' && t.skills.devops) {
      el.textContent = t.skills.devops.title
    }
  })

  // Skills lists
  document.querySelectorAll('.skill__list').forEach((list, listIndex) => {
    const items = list.querySelectorAll('li')
    let section: keyof typeof t.skills

    switch (listIndex) {
      case 0:
        section = 'frontend'
        break
      case 1:
        section = 'backend'
        break
      case 2:
        section = 'databases'
        break
      case 3:
        section = 'devops'
        break
      default:
        return
    }

    items.forEach((item, index) => {
      const icon = item.querySelector('.icon--next')
      if (icon && t.skills[section].items[index]) {
        item.innerHTML = ''
        item.appendChild(icon)
        item.appendChild(
          document.createTextNode(' ' + t.skills[section].items[index])
        )
      }
    })
  })

  // Stack link
  const stackLink = document.querySelector('.main__section > p:last-child a')
  if (stackLink) {
    stackLink.textContent = t.stack.description
  }

  // Botão de agendamento
  const scheduleBtn = document.querySelector('.meet__label')
  if (scheduleBtn) scheduleBtn.textContent = t.buttons.schedule

  // Footer
  const footer = document.querySelector('.footer__text')
  if (footer) footer.textContent = t.footer.copyright

  // Atualiza o atributo lang do HTML
  document.documentElement.lang = currentLang
}

function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger')
  const menuList = document.querySelector('.menu__list')
  const menuLinks = document.querySelectorAll('.menu__item-link')

  if (hamburger && menuList) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active')
      menuList.classList.toggle('is-active')
    })

    // Fecha o menu ao clicar em um link
    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active')
        menuList.classList.remove('is-active')
      })
    })

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const isMenuClick = target.closest('.menu__list')
      const isHamburgerClick = target.closest('.hamburger')

      if (!isMenuClick && !isHamburgerClick) {
        hamburger.classList.remove('is-active')
        menuList.classList.remove('is-active')
      }
    })
  }
}

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
  setupLocales()
  setupMobileMenu()
  setupSmoothScroller()
})
