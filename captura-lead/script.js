// Faça as validações de campos vazios ou email válido.
// Para a validar o email é legal usar uma expressão regular.
// Tente colocar todas as validações em uma função só, disparada a partir do click do botão.

function validateInfos(e) {
  e.preventDefault()

  // tratando email primeiro
  let email = document.querySelector('#email').value
  let divParent = document.querySelector('#email').parentElement
  let message = document.createElement('p')
  message.classList.add('message')
  let text

  const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const test = regexp.test(email)
  if (!test) {
    text = 'Looks like this is not an email'
    message.innerText = text
    divParent.appendChild(message)
  }

  // tratando qualquer input que possa estar não preenchido
  let inputs = document.querySelectorAll('input')

  inputs.forEach((input)=>{
    if(input.value == '' || input.value == null){
      divParent = input.parentElement
      text = `${input.name} cannot be empty`
      message.innerText = text
      divParent.appendChild(message)
      input.style.outline = '2px solid red'
      
    } else {
      input.style.outline = '1px solid hsl(246, 25%, 77%)'
    }
  })

}

document.querySelector('#confirm').addEventListener('click', validateInfos)

let input = document.querySelectorAll('input')
