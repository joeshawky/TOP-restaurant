import './styles.css'
import renderHome from './home.js'
import renderMenu from './menu'
import renderAbout from './about'



const logo = document.querySelector('#logo')
const homeBtn = document.querySelector('#homeSwitchBtn')
const menuBtn = document.querySelector('#menuSwitchBtn')
const aboutBtn = document.querySelector('#aboutSwitchBtn')

renderHome(renderMenu)

logo.addEventListener('click', () => renderHome(renderMenu))
homeBtn.addEventListener('click', () => renderHome(renderMenu))
menuBtn.addEventListener('click', renderMenu)
aboutBtn.addEventListener('click', renderAbout)


