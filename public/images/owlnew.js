$('.owl-carousel').owlCarousel({
  center: true,
  loop:false,
  dots:false,
  margin:10,
  nav:true,
  navText: [
    '<img src="/images/left-arow.svg" alt="Left">',
    '<img src="/images/right-arrow.svg" alt="Right">'
  ],
  
  responsive:{
      0:{
          items:1
      },
     
  }
})

