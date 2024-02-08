// Faça as validações de campos vazios ou email válido.
// Para a validar o email é legal usar uma expressão regular.
// Tente colocar todas as validações em uma função só, disparada a partir do click do botão.

function noEmpthy(e) {
  let text 
  if (e.target.value == '') {
    text = `${e.target.name} cannot be empty`
    console.log(text)
  }
  negativeMessage(e, text)
}

function valideEmail() {
  let email = document.querySelector('#email').value
  const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const test = regexp.test(email)
  if (!test) {
    console.log(`Looks like this is not an email`)
  }
}

function negativeMessage(e, text){
  let message = document.querySelector('.error-message')
  message.innerText = text
  e.target.style.outline = 'solid red 2px'
}

document
  .querySelector('#confirm')
  .addEventListener('click', valideEmail
  )

let input = document.querySelectorAll('input')


