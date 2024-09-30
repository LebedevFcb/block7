const btnBurger = document.querySelector('.burger')
const menuBurger = document.querySelector('.body-content')
const btnClose = document.querySelector('.burger-close')

function clickMenu() {
  btnBurger.addEventListener('click', function () {
    menuBurger.style.display = 'block'
    btnBurger.style.display = 'none' // Скрываем кнопку после нажатия
  })
}

btnClose.addEventListener('click', function () {
  menuBurger.style.display = 'none'
  btnBurger.style.display = 'block' // Показать кнопку снова при закрытии меню
})

// Закрытие меню при клике вне его границ
document.addEventListener('click', function (event) {
  const isClickInsideMenu = menuBurger.contains(event.target)
  const isClickOnBurger = btnBurger.contains(event.target)

  if (!isClickInsideMenu && !isClickOnBurger) {
    menuBurger.style.display = 'none'
    btnBurger.style.display = 'block' // Показываем кнопку снова
  }
})

clickMenu()

function checkScreenSize() {
  if (window.innerWidth > 1420) {
    menuBurger.style.display = 'block'
    btnBurger.style.display = 'none' // Скрываем кнопку на больших экранах
  } else {
    menuBurger.style.display = 'none'
    btnBurger.style.display = 'block' // Показать кнопку на меньших экранах
  }
}

// Запуск функции при изменении размера окна
window.addEventListener('resize', checkScreenSize)

// Проверка при загрузке страницы
checkScreenSize()
