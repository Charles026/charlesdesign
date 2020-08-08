import "./scss/style.scss";
import "bootstrap";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';



Scrollbar.use(OverscrollPlugin);


var options = {
    damping: 0.07,
    plugins: {
        overscroll: {
            damping: 0.2,
            effect: 'bounce',
            maxOverscroll: 80,
            // effect : 'glow',
            // glowColor: '#000000'
        }  
      },

};

  Scrollbar.init(document.querySelector('.smoothScrollBar'), 
  options
  );

console.log('hello') ;


