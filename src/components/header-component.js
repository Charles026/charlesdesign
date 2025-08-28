class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="container py-4">
        <a href="index.html" class="text-dark flex flex-row align-items-center gap-1" style="text-decoration:none;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.20593 2.48374C5.49122 2.18348 5.96619 2.17113 6.26648 2.45639C6.56667 2.74162 6.5789 3.21664 6.29382 3.51694L2.74695 7.25034H14.9999C15.4141 7.25034 15.7499 7.58613 15.7499 8.00034C15.7499 8.41455 15.4141 8.75034 14.9999 8.75034H2.74695L6.29382 12.4837C6.5789 12.784 6.56667 13.2591 6.26648 13.5443C5.96619 13.8295 5.49122 13.8172 5.20593 13.5169L0.455933 8.51694C0.18103 8.22749 0.18103 7.77319 0.455933 7.48374L5.20593 2.48374Z" fill="#333333"/>
          </svg>

         Back to Home
        </a>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);


