const btnChat = document.querySelector('.toggle-button__text')
const modalChat = document.querySelector('.modal__feedback')
const btnChatClose = document.querySelector('.modal__button')
const btnText = document.querySelector('.header-button__text')

// Открытие модального окна
btnChat.addEventListener('click', function () {
  modalChat.classList.remove('hidden')
})

btnText.addEventListener('click', function () {
  modalChat.classList.remove('hidden') // Используем modalChat, а не modalCall
})

// Закрытие модального окна по кнопке
btnChatClose.addEventListener('click', function () {
  modalChat.classList.add('hidden')
})

// Закрытие модального окна при клике вне него
document.addEventListener('click', function (evt) {
  // Проверяем, что клик был вне модального окна и не по кнопкам открытия
  if (
    !modalChat.contains(evt.target) &&
    !btnChat.contains(evt.target) &&
    !btnText.contains(evt.target)
  ) {
    // Убрана лишняя запятая
    modalChat.classList.add('hidden')
  }
})
