export default function renderHome(renderMenu) {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const container = document.createElement('div')
    container.setAttribute('id', 'homepage')

    const heading = document.createElement('h1')
    heading.innerText = "Welcome to Meman's Grill"

    const paragraph = document.createElement('p')
    paragraph.innerText = "Experience the best dining in town!"

    const button = document.createElement('button')
    button.setAttribute('id', 'menuBtn')
    button.addEventListener('click', renderMenu)
    button.innerText = "Our Menu"

    container.append(heading, paragraph, button)
    content.appendChild(container)
}