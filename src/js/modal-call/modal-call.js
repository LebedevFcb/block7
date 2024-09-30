const btn = document.querySelector('.toggle-button__call')
const modalCall = document.querySelector('.call__modal')
const btnModalClose = document.querySelector('.call__button')
const btnHeader = document.querySelector('.header-button__call')

// Открытие модального окна по кнопкам
btn.addEventListener('click', function () {
  modalCall.classList.remove('hidden')
})

btnHeader.addEventListener('click', function () {
  modalCall.classList.remove('hidden')
})

// Закрытие модального окна по кнопке закрытия
btnModalClose.addEventListener('click', function () {
  modalCall.classList.add('hidden')
})

// Закрытие модального окна при клике вне его
document.addEventListener('click', function (evt) {
  // Проверяем, что клик был вне модального окна и кнопок
  if (
    !btn.contains(evt.target) &&
    !modalCall.contains(evt.target) &&
    !btnHeader.contains(evt.target)
  ) {
    modalCall.classList.add('hidden')
  }
})
