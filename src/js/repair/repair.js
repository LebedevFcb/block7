const btn = document.querySelector('.technique-button__button')
const listItem = document.querySelectorAll('.technique__item')

// Начальное скрытие элементов с индексом больше 2 (то есть третий и далее)
for (let i = 3; i < listItem.length; i++) {
  listItem[i].classList.add('hidden')
}

btn.addEventListener('click', function () {
  // Проверяем, есть ли скрытые элементы
  const hiddenItems = document.querySelectorAll('.technique__item.hidden')

  if (hiddenItems.length > 0) {
    // Если есть скрытые элементы, показываем их
    hiddenItems.forEach((item) => {
      item.classList.remove('hidden')
    })
    btn.textContent = 'Скрыть'
    btn.classList.add('zalupa')
  } else {
    // Если все элементы показаны, скрываем их
    for (let i = 3; i < listItem.length; i++) {
      listItem[i].classList.add('hidden')
    }
    btn.textContent = 'Показать все'
    btn.classList.remove('zalupa')
  }
})

function removeHiddenClass() {
  if (window.innerWidth <= 820) {
    const listItems = document.querySelectorAll('.technique__item.hidden')
    listItems.forEach((item) => {
      item.classList.remove('hidden')
    })
  }
}

// Выполняем функцию при загрузке страницы
removeHiddenClass()

// Выполняем функцию при изменении размера окна
window.addEventListener('resize', removeHiddenClass)

// функция удаляет класс swiper-slide и пагинацию
function toggleSwiperElements() {
  const slides = document.querySelectorAll('.price__item')
  const pagination = document.querySelector('.swiper-pagination-price')

  if (window.innerWidth > 770) {
    // Удаляем класс swiper-slide
    slides.forEach((slide) => {
      slide.classList.remove('swiper-slide')
    })

    // Удаляем элемент пагинации
    if (pagination) {
      pagination.remove()
    }
  } else {
    // Добавляем класс swiper-slide
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide')
    })

    // Восстанавливаем элемент пагинации, если его нет
    if (!document.querySelector('.swiper-pagination-price')) {
      const newPagination = document.createElement('div')
      newPagination.classList.add('swiper-pagination-price')
      document.querySelector('.swiper-price').appendChild(newPagination)
    }
  }
}

// Выполняем проверку при загрузке страницы
toggleSwiperElements()

// Выполняем проверку при изменении размера окна
window.addEventListener('resize', toggleSwiperElements)
