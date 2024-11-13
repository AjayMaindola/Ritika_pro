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

// FOR POP1
let mainElement=document.querySelector(".spaces-pops");
let btnElement=document.querySelector("#spaces-pops");
let closebtnElement=document.querySelector(".spaces-pops span")


btnElement.addEventListener("click",()=>{
    mainElement.classList.add("activeModal") 
})
closebtnElement.addEventListener("click",()=>{
    mainElement.classList.remove("activeModal") 
})


// for right
let spaces_m_btn=document.querySelector("#spaces_m_btn");
let spaces_m_Right=document.querySelector(".spaces_m_Right");
let spaces_pops_inner_btn=document.querySelector(".spaces_m_Right span")

spaces_m_btn.addEventListener("click",()=>{
// console.log("hello")
spaces_m_Right.classList.add("activeModal_1")
})
spaces_pops_inner_btn.addEventListener("click",()=>{
  spaces_m_Right.classList.remove("activeModal_1")
})