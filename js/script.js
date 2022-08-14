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


// Testimonial Slider


// Scroll to top


//Navbar


