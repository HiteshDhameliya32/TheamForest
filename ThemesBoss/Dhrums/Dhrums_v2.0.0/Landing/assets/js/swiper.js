var swiper = new Swiper(".clientswiper", {
slidesPerView: 3,
rewind: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
autoplay: {
    delay: 2500,
    disableOnInteraction: false
},
});