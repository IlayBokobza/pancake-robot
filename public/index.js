const btn = document.querySelector('label')
const form  = document.querySelector('form')
const input = document.querySelector('input')

input.addEventListener('change',() => {
    btn.textContent = input.value.split('\\')[input.value.split('\\').length-1]
})

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const fd = new FormData(form)

    axios.post('/upload',fd).then(() => {
        btn.textContent = 'בחר תמונה'
    })
})