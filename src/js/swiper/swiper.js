import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

let swiperBrands
let swiperTechnique
let swiperPrice

let isSwiperBrandsInitialized = false
let isSwiperTechniqueInitialized = false
let isSwiperPriceInitialized = false

function initializeSwipers() {
  if (window.innerWidth <= 760) {
    // Инициализация Swiper для брендов
    if (!isSwiperBrandsInitialized) {
      swiperBrands = new Swiper('.swiper-brands', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination-brands',
          clickable: true
        }
      })
      isSwiperBrandsInitialized = true
    }

    // Инициализация Swiper для техники
    if (!isSwiperTechniqueInitialized) {
      swiperTechnique = new Swiper('.swiper-technique', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination-technique',
          clickable: true
        }
      })
      isSwiperTechniqueInitialized = true
    }

    // Инициализация Swiper для цен
    if (!isSwiperPriceInitialized) {
      swiperPrice = new Swiper('.swiper-price', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        spaceBetween: 15,
        slidesPerView: '1',
        pagination: {
          el: '.swiper-pagination-price',
          clickable: true,
          bulletClass: 'swiper-pagination-price-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }
      })
      swiperPrice.update()
      swiperPrice.pagination.update() // Явное обновление пагинации
      isSwiperPriceInitialized = true
    }
  } else {
    // Уничтожение всех слайдеров, если ширина больше 760px
    if (isSwiperBrandsInitialized) {
      swiperBrands.destroy()
      swiperBrands = null
      isSwiperBrandsInitialized = false
    }

    if (isSwiperTechniqueInitialized) {
      swiperTechnique.destroy()
      swiperTechnique = null
      isSwiperTechniqueInitialized = false
    }

    if (isSwiperPriceInitialized) {
      swiperPrice.destroy()
      swiperPrice = null
      isSwiperPriceInitialized = false
    }
  }
}

window.addEventListener('resize', initializeSwipers)
initializeSwipers()
