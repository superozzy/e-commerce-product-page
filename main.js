const menu = document.querySelector('.menu');
const links = document.querySelector('.header__links');
const closeMenu =document.querySelector('.close-menu');
const cart = document.querySelector('.card');
const cartBox = document.querySelector('.card__box');

menu.addEventListener('click' , function(){
    console.log('hi');
//  links.style.display = 'block';
links.classList.add('links-active');
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

})
closeMenu.addEventListener('click' , function(){
    // links.style.display='none'
    links.classList.remove('links-active');
    document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
})

cart.addEventListener('click' , function(){
   console.log('hi')
      cartBox.classList.toggle('box-active')

})


// SLIDE IMAGES FOR MOBILE START

const slides = document.querySelectorAll('.images__gallery__item');
const slideVisible = document.querySelector('.visible')
const totalSlides = slides.length;


console.log(totalSlides)

const prevButton=document.querySelector('.prev');
const nextButton=document.querySelector('.next');
// const lightBox=document.querySelector('.lightbox');

// const closeBtn =document.querySelector('.closeBtn');


// var x = window.matchMedia("(max-width: 900px)")


let slidePosition =1

prevButton.addEventListener('click' , ()=>{
    moveToPrevSlide()
})
nextButton.addEventListener('click' , ()=>{
    moveToNextSlide()
})
// update slides
function updateSlidePosition(){
   for(let slide of slides){
   
    slide.classList.remove('visible')
    slide.classList.add('hidden')
    console.log(slide)
   }

   slides[slidePosition].classList.add("visible")
}

function moveToNextSlide(){
    console.log('this is next btn')
 

    if(slidePosition === totalSlides - 1){
        slidePosition = 0 ;
        console.log(slidePosition)
    }else{
        slidePosition++;
    }
    updateSlidePosition()
}

function  moveToPrevSlide(){
    console.log('this is prev btn')

    if(slidePosition=== 0 ){
        slidePosition=totalSlides-1;
    }else{
        slidePosition--;
    }
    updateSlidePosition()
}
// SLIDE FOR MOBILE END

// LIGTHBOX SLIDE START


let lightbox= document.createElement('div');
lightbox.id='lightbox'

document.body.appendChild(lightbox);

// selectimages
const imagesLightBox = document.querySelectorAll('.images img')
const sectionImages = document.querySelector('.lightBoxSection');

imagesLightBox.forEach(image =>{
    image.addEventListener('click' , e=>{
     
       lightbox.classList.add('active');
    sectionImages.classList.add('activeImg')


   
    })
})
const closeBtn =document.querySelector('.closeBtn');


closeBtn.addEventListener('click' , ()=>{
     lightbox.classList.remove('active');
     sectionImages.classList.remove('activeImg')
})



const slidesLigthBox = document.querySelectorAll('.lightBoxSection__gallery__item');
const slideVisibleLigthBox = document.querySelector('.visible')
const totalSlidesLigthBox = slidesLigthBox.length;
console.log(totalSlidesLigthBox)

const prevLightBoxBtn=document.querySelector('.prevBtn');
const nextLightBoxBtn=document.querySelector('.nextBtn');




let slidePositionLigthBox =1
prevLightBoxBtn.addEventListener('click' , ()=>{
    moveToPrevSlideligthBox()
})
nextLightBoxBtn.addEventListener('click' , ()=>{
    moveToNextSlideLigthBox()
})
// update slides
function updateSlidePositionLigthBox(){
   for(let slide of slidesLigthBox){
   
    slide.classList.remove('visible')
    slide.classList.add('hidden')
    console.log(slide)
   }

   slidesLigthBox[slidePositionLigthBox].classList.add("visible")
}

function moveToNextSlideLigthBox(){
    console.log('this is next btn')
 

    if(slidePositionLigthBox === totalSlidesLigthBox - 1){
        slidePositionLigthBox = 0 ;
        console.log(slidePosition)
    }else{
        slidePositionLigthBox++;
    }
    updateSlidePositionLigthBox()
}

function  moveToPrevSlideligthBox(){
    console.log('this is prev btn')

    if(slidePositionLigthBox=== 0 ){
        slidePositionLigthBox=totalSlidesLigthBox-1;
    }else{
        slidePositionLigthBox--;
    }
    updateSlidePositionLigthBox()
}






// LIGHTBOX SLIDE END



// MINUS AND PLUS BUTTON
const minusBtn = document.querySelector('.button-minus')
const plusBtn = document.querySelector('.button-plus')
const inputField = document.querySelector('.quantity-field')


minusBtn.addEventListener('click' , event =>{
   
    event.preventDefault()
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue -1
    if(currentValue < 1 ){
     inputField.value = 0;
    alert('please enter a quantity')
   
    }
})
plusBtn.addEventListener('click' , event =>{
   
    event.preventDefault()
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue +1
   
})

// ADD ITEMS TO BASKET
 
const addToCart = document.querySelector('.addBtn')
const quantity = document.querySelector('.quantity-field')
const bubble = document.querySelector('.redbubble')
const clearCart = document.querySelector('.clear')
const error= document.querySelector('.error')
const cardInside = document.querySelector('.card__box__wrap__inside')
const quanitySum =document.querySelector('.quanitySum')
const total=document.querySelector('.sum')
const cost =document.querySelector('.cost')
let costValue = 
// console.log(costValue)

addToCart.addEventListener('click' , addItems)

       
function addItems(){
//   if(  inputField=0){
//     bubble.classList.remove('active')
//     cardInside.style.display='none'
//     error.style.display='block'
//   }else{
    bubble.classList.add('active')
    bubble.innerHTML=  quantity.value 
    cardInside.style.display='flex'
    error.style.display='none'
    quanitySum.innerHTML = quantity.value
   total.innerHTML=` ${ '   $' + 125 * Number(quantity.value)}`
//   }
      
}

clearCart.addEventListener('click' , ()=>{
    bubble.classList.remove('active')
    cardInside.style.display = 'none'
    error.style.display='flex'
})