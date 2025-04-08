export default function renderAbout(){
    const content = document.querySelector('#content')
    content.innerHTML = ''

    const container = document.createElement('div')
    container.setAttribute('id', 'about')

    const heading = document.createElement('h1')
    heading.innerText = "About Meman's Grill"

    const paragraph = document.createElement('p')
    paragraph.innerText = `
    Incididunt Lorem aute ex voluptate duis Lorem ex non reprehenderit dolore fugiat consequat.
    Occaecat sint aliqua mollit cillum officia non amet magna laboris nostrud. Tempor amet labore
    tempor velit dolor reprehenderit cupidatat consequat et velit. Adipisicing non et consequat
    consequat laboris et fugiat dolor ipsum fugiat ex consectetur.`

    container.append(heading, paragraph)

    content.appendChild(container)
}