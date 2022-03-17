const button = document.getElementById('button')
const container = document.getElementById('container')

function addElement() {
    const div = document.createElement("div")
    div.className = 'container__div'
    container.appendChild(div)
}

button.addEventListener('click', addElement)


