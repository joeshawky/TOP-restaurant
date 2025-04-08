export default function renderMenu() {
    const content = document.querySelector('#content')
    content.innerHTML = ''

    const container = document.createElement('div')
    container.setAttribute('id', 'menu')

    const heading = document.createElement('h1')
    heading.classList.add('title')
    heading.innerText = "Meman's Grill Menu"

    const ul = document.createElement('ul')
    ul.classList.add('items')

    const itemsMap = {
        'Grilled Chicken': 10.99,
        'Steam': 10.99,
        'Vegetable Stir Fry': 10.99,
        'Seafood Platter': 10.99,
        'Caesar Salad': 10.99,
        'Chocolate Cake': 10.99,
        'Ice Cream Sundae': 10.99,
        'Soft Drinks': 10.99,
        'Beer': 10.99,
        'Wine': 10.99,
    }
    
    Object.keys(itemsMap).forEach(name => {
        const price = itemsMap[name]

        const li = document.createElement('li')
        const nameSpan = document.createElement('span')
        nameSpan.innerText = name

        const priceSpan = document.createElement('span')
        priceSpan.innerText = `$${price}`

        li.append(nameSpan, priceSpan)
        ul.appendChild(li)
    })

    const info = createInfo();


    container.append(heading)
    container.append(ul)
    container.append(info)

    content.appendChild(container)
}

const createInfo = () => {
    const container = document.createElement('div')
    const p1 = document.createElement('p')
    p1.innerText = 'All prices are in USD.'

    const p2 = document.createElement('p')
    p2.innerText = 'For reservations, please call us at (123) 456-7890.'

    const p3 = document.createElement('p')
    p3.innerText = 'We look forward to serving you!'

    container.append(p1, p2, p3)
    return container
}