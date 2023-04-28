
function About($container) {
  this.$container = $container;
  
  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="about">
        어바웃 페이지에요.
      </main>
    `;
  };
  

  this.render();
}

export default About;