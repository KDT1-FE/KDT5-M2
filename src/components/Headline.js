import { Component } from "../core/dragon";

export default class Headline extends Component {
    render() {
        this.el.classList.add('headline')
        this.el.innerHTML = /* html */ `
            <h1>
                <span>SINE Dragon</span><br>
                <br>
                화제의 인기작<br>
            </h1>
            <br>
            <a href='' target='_blank'>
            <img 
            src='https://ifh.cc/g/OYmJqC.jpg' 
            border='0'
            id='modal_thumnail'
            /></a>
            
            </p>
        `
    }
}

// 닫기 버튼 정의.
const closeButton = document.querySelector('.close');


// 닫기를 누르면 화면에서 사라지게.
function closeVideoBox() {
    const videoBox = document.getElementById('video_box');
    const iframe = videoBox.querySelector('iframe');
    iframe.src = iframe.src.replace("autoplay=1", "autoplay=0");
    videoBox.style.display = 'none';
}


// 닫기를 누르면 비디오 사라지게
closeButton.addEventListener('click', closeVideoBox);