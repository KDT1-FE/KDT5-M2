import '../styles/AboutMypage.scss'
import myimg from '../assets/sewoo.jpeg'

export default function AboutMypage() {
  return (
    <>
      <ul className="myinfo">
        <li className="myinfo__intro">Wellcome Home!</li>
        <li className="myinfo__profile">
          <img
            className="myinfo__img"
            src={myimg}
            alt="Profile img!"
          />
        </li>
        <li className="myinfo__name">SEWOO</li>
        <li className="myinfo__more">
          <div>siwoo28@kakao.com</div>
          <div>+82-10-8781-1232</div>
          <div>@cu_convenience_store</div>
        </li>
      </ul>
    </>
  )
}
