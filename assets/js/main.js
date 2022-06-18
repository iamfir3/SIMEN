const searchBtn=document.querySelector('.category__search__icon');
const searchForm=document.querySelector('.category-search-form-container');
searchBtn.onmouseover = function(){
    searchForm.classList.add('active-flex');
}
searchBtn.onmouseout = function(){
    searchForm.classList.remove('active-flex');
}
searchForm.onmouseover = function(){
    searchForm.classList.add('active-flex');
}
searchForm.onmouseout = function(){
    searchForm.classList.remove('active-flex');
}


const heartIconCta=document.querySelectorAll('.feature-bar__box-cta-icon--heart');
const heartIconCtaText=document.querySelectorAll('.feature-bar__box-cta-icon--heart-text');
const randomIconCta=document.querySelectorAll('.feature-bar__box-cta-icon--random');
const randomIconCtaText=document.querySelectorAll('.feature-bar__box-cta-icon--random-text');
const eyeIconCta=document.querySelectorAll('.feature-bar__box-cta-icon--eye');
const eyeIconCtaText=document.querySelectorAll('.feature-bar__box-cta-icon--eye-text');

for(let i=0;i<heartIconCta.length;i++) {
    heartIconCta[i].onmouseover= function(){
        heartIconCtaText[i].classList.add('active-visi');
    }
}
for(let i=0;i<heartIconCta.length;i++) {
    heartIconCta[i].onmouseout= function(){
        heartIconCtaText[i].classList.remove('active-visi');
    }
}
for(let i=0;i<randomIconCta.length;i++) {
    randomIconCta[i].onmouseover= function(){
        randomIconCtaText[i].classList.add('active-visi');
    }
}
for(let i=0;i<randomIconCta.length;i++) {
    randomIconCta[i].onmouseout= function(){
        randomIconCtaText[i].classList.remove('active-visi');
    }
}
for(let i=0;i<eyeIconCta.length;i++) {
    eyeIconCta[i].onmouseover= function(){
        eyeIconCtaText[i].classList.add('active-visi');
    }
}
for(let i=0;i<eyeIconCta.length;i++) {
    eyeIconCta[i].onmouseout= function(){
        eyeIconCtaText[i].classList.remove('active-visi');
    }
}

const featureBarText =document.querySelectorAll(".feature-bar__title-text");
const featureBarText2 =document.querySelectorAll(".feature-bar__title-text");
const latestContainer=document.querySelector('.feature-bar__latest__container');
const bestSellerContainer=document.querySelector('.feature-bar__best-seller__container');
const featuredContainer=document.querySelector('.feature-bar__featured__container');

for(let i=0; i<featureBarText.length; i++){
    featureBarText[i].onclick = function(){
        for(let j=0; j<featureBarText2.length; j++){
            if(featureBarText2[j].classList.contains('active-bef-aft-visi')) featureBarText2[j].classList.remove('active-bef-aft-visi');
            if(latestContainer.classList.contains('active-flex')) latestContainer.classList.remove('active-flex');
            if(bestSellerContainer.classList.contains('active-flex')) bestSellerContainer.classList.remove('active-flex');
            if(featuredContainer.classList.contains('active-flex')) featuredContainer.classList.remove('active-flex');
        }

        featureBarText[i].classList.add('active-bef-aft-visi');
        if(i==0) latestContainer.classList.add('active-flex');
        if(i==1) bestSellerContainer.classList.add('active-flex');
        if(i==2) featuredContainer.classList.add('active-flex');
    }
}
