class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    const year = new Date().getFullYear();
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          margin-top: auto;
        }
        
        .footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-divider {
          height: 1px;
          background: rgba(0,0,0,0.05);
          border: none;
          margin: 2rem 0 1.5rem 0;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 2rem 0;
        }
        
        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .footer-logo {
          height: 2.8rem;
          margin-bottom: 0.5rem;
        }
        
        .footer-text {
          margin: 0;
          color: #333;
          font-size: 1rem;
        }
        
        .footer-copyright {
          margin: 0.25rem 0 0 0;
          color: #666;
          font-size: 0.875rem;
        }
        
        .footer-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .footer-link {
          color: #333;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #666;
        }
        
        .wechat-link {
          cursor: pointer;
          position: relative;
        }
        
        .qr-tooltip {
          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 0.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 1000;
        }
        
        .qr-tooltip.show {
          opacity: 1;
          pointer-events: auto;
        }
        
        .qr-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 8px solid transparent;
          border-top-color: white;
        }
        
        .qr-image {
          width: 120px;
          height: 120px;
          display: block;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
          }
          
          .footer-brand {
            align-items: center;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .footer-links {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      </style>
      
      <footer class="footer">
        <hr class="footer-divider">
        <div class="footer-content">
          <div class="footer-brand">
            <img src="./images/ahdai.png" alt="Ahdai" class="footer-logo">
            <p class="footer-text">Built with love for Ahdai</p>
            <p class="footer-copyright">Copyright © 2014-${year} Charles</p>
          </div>
          
          <nav class="footer-nav">
            <ul class="footer-links">
              <li>
                <a class="footer-link" href="https://www.instagram.com/bancs_pine/" target="_blank">Instagram</a>
              </li>
              <li>
                <a class="footer-link" href="https://dribbble.com/mumumycat" target="_blank">Dribbble</a>
              </li>
              <li>
                <a class="footer-link" href="https://github.com/Charles026" target="_blank">GitHub</a>
              </li>
              <li>
                <a class="footer-link wechat-link">
                  WeChat
                  <div class="qr-tooltip" id="qr-tooltip">
                    <img src="./images/qrcode@2x.png" alt="WeChat QR Code" class="qr-image">
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    `;
  }

  addEventListeners() {
    const wechatLink = this.shadowRoot.querySelector('.wechat-link');
    const qrTooltip = this.shadowRoot.querySelector('#qr-tooltip');
    
    if (wechatLink && qrTooltip) {
      wechatLink.addEventListener('mouseenter', () => {
        qrTooltip.classList.add('show');
      });
      
      wechatLink.addEventListener('mouseleave', () => {
        qrTooltip.classList.remove('show');
      });
      
      // 移动端点击支持
      wechatLink.addEventListener('click', (e) => {
        e.preventDefault();
        qrTooltip.classList.toggle('show');
      });
    }

    // 点击其他地方隐藏二维码
    document.addEventListener('click', (e) => {
      if (!wechatLink?.contains(e.target)) {
        qrTooltip?.classList.remove('show');
      }
    });
  }
}

// 注册自定义元素
customElements.define('footer-component', FooterComponent);
