import App from '~/App.js'
import router from '~/routes/index.js'
import styel from '~/styles/style.scss'
// 경로 생략 부분 : ~/routes/index.js

const root = document.querySelector('#root')
root.append(new App().el)

router()
