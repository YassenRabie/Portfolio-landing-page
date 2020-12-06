const leftBlock1 = document.querySelector('.left-section-block-1')
const leftBlock2 = document.querySelector('.left-section-block-2')
const rightBlock1 = document.querySelector('.right-section-block-1')
const rightBlock2 = document.querySelector('.right-section-block-2')
const logo = document.querySelector('.logo')
const nameBlock = document.querySelector('.name-block')
const bioBlock = document.querySelector('.bio-block')
const linkContainers = document.querySelectorAll('.link-container')

// image background animation

var myAnimation = new hoverEffect({
   parent: document.querySelector('.bg-image'),
   intensity: 0.3,
   image1: './images/bg-1.jpg',
   image2: './images/bg-2.jpg',
   displacementImage: './images/myDistorsionImage.jpg',
   imagesRatio: 3 / 2
})

// blocks animation
let tl = new TimelineMax()

tl.to(leftBlock1, {
   delay: .1,
   duration: .7,
   height: 0,
   ease: "expo.out"
}).to(leftBlock2, {
   duration: .7,
   height: 0,
   ease: "expo.out"
}, '-=0.4').to(rightBlock1, {
   duration: .7,
   scaleX: 0,
   transformOrigin: "right",
   ease: "expo.out"
}, '-=.4')

// left section animation
let tl2 = new TimelineMax()

tl2.to(logo, {
   duration: 1,
   delay: .8,
   opacity: 1,
   rotation: '-90deg',
   ease: "expo.out"
}).to(nameBlock, {
   duration: 1,
   scaleY: 0,
   transformOrigin: 'top',
   ease: "expo.out"
}, '-=0.5').to(bioBlock, {
   duration: 1,
   scaleY: 0,
   transformOrigin: 'top',
   ease: "expo.out"
}, '-=0.8').to(rightBlock2, {
   duration: .7,
   scaleX: 0,
   transformOrigin: "right",
   ease: "expo.out"
}, '-=.9').staggerFrom(linkContainers, .4, {
   width: 0,
   transformOrigin: "left",
}, .1, '-=0.4')

// explore button
const exploreText = document.querySelector('.explore-text')
const circles = document.querySelectorAll('.circle')

const exploreTl = new TimelineMax({ paused: true })

exploreTl.staggerTo(circles, 0.4, {
   scale: 0.5,
   ease: "expo.out",
   background: '#EAF2EF'
})

exploreText.addEventListener('mouseenter', () => {
   exploreTl.play()
})

exploreText.addEventListener('mouseleave', () => {
   exploreTl.reverse()
})

