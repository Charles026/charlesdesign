import "./scss/style.scss";
import "bootstrap";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import sal from 'sal.js';



//sal scroll animation effect

sal({
  threshold: 0.3
});


const scrollAnimations = sal();

// Provide new options
scrollAnimations.reset({
  selector: '#case01',
  threshold: 0.01,
});

const scrollAnimationsCase02 = sal();

// Provide new options
scrollAnimationsCase02.reset({
  selector: '#case02',
  threshold: 0.01,
});


//smooth scrollbar effect

Scrollbar.use(OverscrollPlugin);

var options = {
    damping: 0.07,
    plugins: {
        overscroll: {
            damping: 0.15,
            effect: 'bounce',
            maxOverscroll: 200,
            // effect : 'glow',
            // glowColor: '#000000'
        }  
      },

};

  Scrollbar.init(document.querySelector('.smoothScrollBar'), 
  options
  );



console.log('hello') ;


