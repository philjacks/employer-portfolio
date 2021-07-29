const toTopBtn = document.querySelector('.to-top')

window.onscroll = () => {
  scrollFunction()
}

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTopBtn.style.display = 'block'
  } else {
    toTopBtn.style.display = 'none'
  }
}