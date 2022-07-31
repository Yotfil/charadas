import '../styles/style.css'
import Header from './components/Header'
import Body from './components/Body'

document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Body()}
`
