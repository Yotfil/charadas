import '../styles/style.css'
import Header from './components/Header'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <div>
    <h1> Hola Mundo </h1>
  </div>
`
