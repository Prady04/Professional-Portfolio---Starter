// typewritter effect

var app = document.querySelector('.typewritter');

var typewriter = new Typewriter(app, {
  loop: true,
  });


typewriter.typeString('Trader')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Web Developer')
    .pauseFor(2000)
    .deleteAll()   
    .typeString('Management Consultant')
    .pauseFor(2000)
    .start();

// Tab toggle
var Tablist = document.querySelectorAll('.nav-tabs .nav-item a');
Tablist.forEach(function(e){
 
  var tgt =new bootstrap.Tab(e);
  console.log(tgt);
  e.addEventListener('click', function(e){
    e.preventDefault();
    tgt.show();

  });
});
// isotope js
var grid = document.querySelector('.grid');
var iso;

imagesLoaded(grid, function(){
  iso = new Isotope(grid, {
    itemSelector:'.grid-item',
    layoutMode:'masonry'
  })

  var filterElm = document.querySelector('.portfolio-filter');

  filterElm.addEventListener('click', function(event){
    if(!matchesSelector(event.target, 'button')){
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({
      filter:filterValue
    })
  })
});

var btnElem = document.querySelectorAll('.fil-btn');
btnElem.forEach(function(el,key){
  el.addEventListener('click', function(){
    el.classList.add('clicked')

    btnElem.forEach(function(ell,keys){
      if(key != keys) {
        ell.classList.remove('clicked');
      }

    })
  })
})

// Testimonial Slider
var slider = tns({
  container : '.my-slider',
  items:1,
  controls:false,
  navPosition:'bottom',
  gutter:30,
  autoplay:true,
  autoplayButtonOutput:false,
  mouseDrag:true,
  responsive:{
    960: {
      items:2
    }
  }
});

// Scroll to top


//Navbar


