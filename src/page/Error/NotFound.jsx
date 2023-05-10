import React from "react";
import '../../scss/Error/NotFound.scss'
import cat from '../../image/cat.gif'
import { Link } from 'react-router-dom';

function NotFoundPage () {
  return(
    <div className="NotFound-Container">
      <div className="NotFound-Error">
          <p>HAHAMovie</p>
      </div>
      <div className="NotFound-Error__textbox">
        <div className="NotFound-Error__text">
          <p>해당 페이지를 찾지 못했습니다.</p>
          <p>주소가 잘못되었거나 더이상 제공되지 않는 페이지 입니다.</p>
          <Link style={{ textDecoration: 'none', color: '#d21212' }} to="/">
            <span className="GoMain">메인페이지로 이동🏠🏃‍♀️</span> 
          </Link>
        </div>
      </div> 
      <div className="ImgBox">
        <img src={cat} alt="errorlogo" />
      </div>
    </div>   
  )    
};
export default NotFoundPage

// const ErrorContainer = styled.div`
//     width: 1500px;
//     height: 800px;
//     display: flex;
//     position: relative;
//     margin: 0 auto;
//     margin-top: 50px;
//     left: 0;
//     bottom: 0;
//     right: 0;
//   `
//   const ErrorHeader = styled.div`
//     width: 500px;
//     height: 100px;
//     position: absolute;
//     margin: 0 auto;
//     left: 0;
//     right: 0;

//     & p {
//       font-size: 50px;
//       margin-left: 140px;
//       margin-top: 15px;
//     }
//   `
//   const Img = styled.img`
//     width: 20%;
//     height: 90px;
//     display: flex;
//     position: absolute;
//     margin: 0 auto;
// `

//   const NotFound = styled.div`
//     width: 700px;
//     padding-bottom: 100px;
//     position: absolute;
//     top: 30%;

//     & p {
//       font-size: 50px;
//     }

//     & :nth-child(2) {
//       width: inherit;
//       margin-top: 40px;
//       font-size: 35px;
//     }
//   `

//   const GoMain = styled.div`
//     width: 500px;
//     margin-top: 40px;
//     font-size: 40px;
//   `

//   const ImgBox = styled.div`
//     padding-bottom: 30px;
//     position: absolute;
//     right: 0;
//     margin-right: 150px;
//     top: 100px;

//     & img{
//       width: 600px;
//     }
//   `