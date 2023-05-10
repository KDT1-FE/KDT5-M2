import { Store } from '../core/CoreMovie'

export default new Store({
  photo: 'https://velog.velcdn.com/images/0299bang/profile/bf3c0ca7-574e-4117-a6e1-b03dbebdcc24/social_profile.png',
  name: 'BangMiSun',
  email: '0299bang@gmail.com',
  blog: 'https://velog.io/@0299bang',
  github: 'https://github.com/0299bang',
  repository: 'https://github.com/0299bang/Search-Movies-API'
})

// TheFooter.js에서도 데이터를 가져다가 쓸 수 있도록,
// 데이터가 변경되어도 TheFooter의 내용이 자동으로 갱신 되도록