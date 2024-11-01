$('#teamSlider').owlCarousel({
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 2000,
  nav: true,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      mouseDrag: true,
    },
    600: {
      items: 2
    },
    1000: {
      items: 6,
      center: true,
      mouseDrag: false,
      touchDrag: false

    }
  }
})