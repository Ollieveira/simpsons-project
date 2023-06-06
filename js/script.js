const homer = document.querySelector('.homer')
const alien = document.querySelector('.alien')
const jump = () => {
  homer.classList.add('jump')

  setTimeout(() => {
    homer.classList.remove('jump')
  }, 500)
}

document.addEventListener('keydown', function (event) {
  if (event.key === ' ' || event.key === 'Space') {
    jump()
  }
})

const loop = setInterval(() => {
  const alienPosition = alien.offsetLeft
  const homerPosition = +window.getComputedStyle(homer).bottom.replace('px', '')

  if (alienPosition <= 70 && alienPosition > 0 && homerPosition < 35) {
    alien.style.animation = 'none'
    alien.style.left = `${alienPosition}px`

    homer.style.animation = 'none'
    homer.style.bottom = `${homerPosition}px`

    homer.src = './assets/dead-homer.png'

    clearInterval(loop)
  }
}, 10)
