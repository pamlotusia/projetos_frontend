// Faça as validações de campos vazios ou email válido.
// Para a validar o email é legal usar uma expressão regular.
// Tente colocar todas as validações em uma função só, disparada a partir do click do botão.

function validateEmail() {
  const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regexp.test(email)
}

function validateInfos(e) {
  e.preventDefault()

  // Resetando mensagens de erro e estilo de contorno
  document.querySelectorAll('.message').forEach(msg => msg.remove())
  document.querySelectorAll('input').forEach(input => {
    input.style.outline = '1px solid #b9b6d3'
  })

  // Validando email
  let email = document.querySelector('#email').value
  let divParent = document.querySelector('#email').parentElement
  let message = document.createElement('p')
  message.classList.add('message')
  let text

  const isEmailValid = validateEmail(email)
  if (!isEmailValid) {
    text = 'Looks like this is not an email'
    message.innerText = text
    divParent.appendChild(message)
    document.querySelector('#email').style.outline = '2px solid red'
  }

  // Validando inputs vazios
  let inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    if (input.value.trim() === '' && input.id !== 'email') {
      divParent = input.parentElement
      // criando nova instancia para cada input
      let message = document.createElement('p')
      message.classList.add('message')
      text = `${input.name} cannot be empty`
      message.innerText = text
      divParent.appendChild(message)
      input.style.outline = '2px solid red'
    }
  })
}

document.querySelector('#confirm').addEventListener('click', validateInfos)
