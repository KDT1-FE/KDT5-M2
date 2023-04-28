
function About($container) {
  this.$container = $container;
  
  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="about">
      <img class="smile" src="/movietour_logo_smile.svg" alt="스마일">
        <h2>
        OMDB <span>API</span>
        <br/>
        <p> 영화검색 사이트 <span>만들기</span> </p>
        </h2>

        <h3>패스트캠퍼스 FE5_김경원</h3>
        <a href="https://github.com/ruddnjs3769">
        <img src="/github-mark.png" alt="github"/>
        github
        </a>

      </main>
    `;
  };
  

  this.render();
}

export default About;