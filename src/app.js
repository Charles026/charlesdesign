import "./scss/style.scss";
import "bootstrap";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import sal from 'sal.js';

//say hello
console.log('hello') ;

//sal scroll animation effect

sal({
  threshold: 0.3
});


const scrollAnimations = sal();

//popover

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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

  //destroy scrollbar at breakpoint

  function clearScrollbar(x) {
    if (x.matches) { // If media query matches
      Scrollbar.destroy(document.body);
      console.log(Scrollbar.has(document.body));
    } else {
      console.log(Scrollbar.has(document.body));
    }
  }
  
  var x = window.matchMedia("(max-width: 991px)")
  clearScrollbar(x) // Call listener function at run time
  x.addListener(clearScrollbar) // Attach listener function on state changes





