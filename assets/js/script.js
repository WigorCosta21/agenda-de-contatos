const form = document.querySelector('form')
const contactName = document.querySelector('#contact-name')
const dddNumber = document.querySelector('#ddd-number')
const phoneNumber = document.querySelector('#phone-number')
const tbody = document.querySelector('tbody')

let rows = ''
const phones = []
form.addEventListener('submit', (e) => {
  e.preventDefault()
  addContact()
  updatedTable()
})


const addContact = () => {

  if (dddNumber.value.length !== 2) {
    alert('DDD inválido! Digite apenas dois digitos.')
    return
  }
  const padrao = /^\d+$/

  if (!padrao.test(phoneNumber.value) || phoneNumber.value.length < 8 || phoneNumber.value.length > 9) {
    alert('Número de telefone Inválido!')
  } else {
    createdTable()
    clearFields()
  }

}


const createdTable = () => {

  const phoneNumberDDD = `(${dddNumber.value})${phoneNumber.value}`

  if (phones.includes(phoneNumberDDD)) {
    alert('Número de telefone já adionado')
  } else {
    let row = '<tr>'
    row += `<td>${contactName.value}</td>`
    row += `<td>${dddNumber.value}</td>`
    row += `<td>${phoneNumber.value}</td>`
    row += `</tr>`

    rows += row
  }

  phones.push(phoneNumberDDD)

}

const clearFields = () => {
  contactName.value = ''
  contactName.focus()
  dddNumber.value = ''
  phoneNumber.value = ''
}


const updatedTable = () => tbody.innerHTML = rows
