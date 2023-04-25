// import App from '~/App.js'
import Header from '~/Header.js' 
import Search from '~/Search.js'
import Poster from '~/Poster.js'
import '~/styles/reset.css'
import '~/styles/style.scss'



const header = document.querySelector('header')
header.append(new Header().el)

const section = document.querySelector('main')
section.append(new Search().el)
console.log(new Search().el)


// const poster = document.querySelector('.movies')
// poster.append(new Poster().el)

// const root = document.querySelector('.posters')
// root.append(new App().el)
