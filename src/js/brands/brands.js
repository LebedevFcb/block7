document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.querySelector('.change__btn')
  const cardContainer = document.querySelector('.card__container')
  const cardItems = cardContainer.querySelectorAll('.card__item')
  const icon = showBtn.querySelector('.icon') // Иконка кнопки

  // Начальное скрытие карточек с индексом от 6 и выше
  for (let i = 6; i < cardItems.length; i++) {
    cardItems[i].classList.add('hidden')
  }

  // Обработка клика на кнопку
  showBtn.addEventListener('click', function () {
    const hiddenItems = cardContainer.querySelectorAll('.card__item.hidden')

    if (hiddenItems.length > 0) {
      // Если есть скрытые карточки, показываем их
      hiddenItems.forEach((item) => {
        item.classList.remove('hidden')
      })
      showBtn.textContent = 'Скрыть'
      showBtn.classList.add('revert')
      icon.style.transform = 'rotate(0deg)' // Сбрасываем вращение
    } else {
      // Если все карточки показаны, скрываем карточки с индексом от 6 и выше
      for (let i = 6; i < cardItems.length; i++) {
        cardItems[i].classList.add('hidden')
      }
      showBtn.textContent = 'Показать все'
      showBtn.classList.remove('revert')
      icon.style.transform = 'rotate(180deg)' // Вращаем иконку обратно
    }
  })
})
