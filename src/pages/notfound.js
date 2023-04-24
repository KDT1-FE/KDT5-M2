function NotFound($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="notFoundPage">
        페이지를 찾을수없어용
      </main>
    `;
  };

  this.render();
}

export default NotFound;