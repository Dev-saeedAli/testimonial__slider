// selectors
const slideBtn = document.querySelectorAll(".btn .btn-Main")
const testimonialSection = document.querySelector(".testimonial__section");
const testimonialText = testimonialSection.querySelector(".testimonial__text");
const testimonialImage = testimonialSection.querySelector(".testimonial__image");
const userImageOne = document.querySelector("figure .userOne");
const userImageTwo = document.querySelector("figure .userTwo");
// events

slideBtn.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        slideImage(e.target.classList)
        if(e.target.src?.includes("images/icon-prev.svg")){
            slideImage('prev-btn')
        }
        if(e.target.src?.includes("images/icon-next.svg")){
                slideImage('next-btn')
        }
    })
})


// functions
const slideImage = (element) =>{
    const testimonialTextOne = document.querySelector(".testimonial__text__pOne");
    const testimonialTextTwo = document.querySelector(".testimonial__text__pTwo");
    const authorOne = document.querySelector(".authorOne");
    const authorTwo = document.querySelector(".authorTwo");
    const roleOne = document.querySelector(".roleOne");
    const roleTwo = document.querySelector(".roleTwo");
    const prevButton = document.querySelector(".prev-btn")
    const nextButton = document.querySelector(".next-btn")

    if(element === 'prev-btn' || element[0] === 'prev-btn'){
        prevButton.classList.add("active")
        nextButton.classList.remove("active")
        userImageOne.classList.add("hidden")
        testimonialTextOne.classList.add("none")
        authorOne.classList.add("none")
        roleOne.classList.add("none")
        userImageTwo.classList.remove("hidden")
        testimonialTextTwo.classList.remove("none")
        authorTwo.classList.remove("none")
        roleTwo.classList.remove("none")
    }
    if(element === 'next-btn' || element[0] === 'next-btn'){
        nextButton.classList.add("active")
        prevButton.classList.remove("active")
        userImageTwo.classList.add("hidden")
        testimonialTextTwo.classList.add("none")
        authorTwo.classList.add("none")
        roleTwo.classList.add("none")
        userImageOne.classList.remove("hidden")
        testimonialTextOne.classList.remove("none")
        authorOne.classList.remove("none")
        roleOne.classList.remove("none")
    }
}