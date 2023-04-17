const form = document.querySelector('form')
const contactName = document.querySelector('#contact-name')
const dddNumber = document.querySelector('#ddd-number')
const phoneNumber = document.querySelector('#phone-number')
const tbody = document.querySelector('tbody')

let rows = ''

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addContact()
  updatedTable()
})


const addContact = () => {

  if (dddNumber.value.length !== 2) {
    alert('DDD inválido! Digite apenas dois digitos.')
  }

  const padrao = /^\d+$/

  if (!padrao.test(phoneNumber.value) || phoneNumber.value.length < 8 || phoneNumber.value.length > 9) {
    alert('Número de telefone Inválido!')
  } else {
    createdTable()
  }

}


const createdTable = () => {
  let row = '<tr>'
  row += `<td>${contactName.value}</td>`
  row += `<td>${dddNumber.value}</td>`
  row += `<td>${phoneNumber.value}</td>`
  row += `</tr>`

  rows += row

  clearFields()
}

const clearFields = () => {
  contactName.value = ''
  contactName.focus()
  dddNumber.value = ''
  phoneNumber.value = ''
}


const updatedTable = () => tbody.innerHTML = rows
