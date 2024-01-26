function changeImage() {
  let image = document.querySelector('.banner')
  if (window.innerWidth < 700) {
    image.src = './images/hero-mobile.jpg'
  } else {
    image.src = './images/hero-desktop.jpg'
  }
}

// chama a função no carregamento da página e redimensionamento da janela
window.onload = changeImage
window.onresize = changeImage

function checkEmail() {
  const email = document.querySelector('#email').value
  const inputSpace = document.querySelector('.input-email')
  const message = document.querySelector('.message')

  if(!email.includes('@')){
    inputSpace.style.border = '2px solid red'
    message.style.visibility =  'visible'

  } else {
    alert('All right!')
    email.value = ''
    inputSpace.style.border = ''
    message.style.visibility =  'hidden'
  } 
}

let btn = document.querySelector('button')
btn.addEventListener('click', checkEmail)
