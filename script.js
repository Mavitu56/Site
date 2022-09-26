function toggleDiv() {
    if(document.getElementById("img-frame").style.display == 'none') {
      document.getElementById("img-frame").style.animation = 'button 500ms';
      document.getElementById("img-frame").style.display = 'block';
      document.getElementById("img-frame-text").style.display = 'none';
    } else {
      document.getElementById("img-frame").style.display = 'none';
      document.getElementById("img-frame-text").style.animation = 'button 500ms';
      document.getElementById("img-frame-text").style.display = 'block';
    }
    if(document.getElementById("img-frame2").style.display == 'none') {
      document.getElementById("img-frame2").style.animation = 'button 500ms';
      document.getElementById("img-frame2").style.display = 'block';
      document.getElementById("img-frame2-text").style.display = 'none';
    } else {
      document.getElementById("img-frame2").style.display = 'none';
      document.getElementById("img-frame2-text").style.animation = 'button 500ms';
      document.getElementById("img-frame2-text").style.display = 'block';
    }
  }

const curso = document.querySelectorAll('[data-animate-curso]');
const about_left = document.querySelectorAll('[data-animate-about-left]');
const about_right = document.querySelectorAll('[data-animate-about-right]');
const about_prism = document.querySelectorAll('[data-animate-about-prism]');
const contrast_right = document.querySelectorAll('[data-animate-contrast-right]');
const show = document.querySelectorAll('[data-animate-show]');
const feed = document.querySelectorAll('[data-animate-feed]');
const about_center = document.querySelectorAll('[data-animate-about-center]');
const news = document.querySelectorAll('[data-animate-news]');
const evento = document.querySelectorAll('[data-animate-event-left]');
const animationClass = 'animate';
const fixtopClass = 'fixed-top';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  curso.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  about_left.forEach(function(element2) {
    if((windowTop) > element2.offsetTop) {
      element2.classList.add(animationClass);
    } 
  })
  about_right.forEach(function(element3) {
    if((windowTop) > element3.offsetTop) {
      element3.classList.add(animationClass);
    } 
  })
  contrast_right.forEach(function(element4){
    if((windowTop) > element4.offsetTop) {
      element4.classList.add(animationClass);
    } 
  })
  show.forEach(function(element5) {
    if((windowTop) > element5.offsetTop) {
      element5.classList.add(animationClass);
    } 
  })
  feed.forEach(function(element6) {
    if((windowTop) > element6.offsetTop) {
      element6.classList.add(animationClass);
    } 
  })
  about_center.forEach(function(element8) {
    if((windowTop) > element8.offsetTop) {
      element8.classList.add(animationClass);
    } 
  })
  news.forEach(function(element9) {
    if((windowTop) > element9.offsetTop) {
      element9.classList.add(animationClass);
    } 
  })
  evento.forEach(function(element9) {
    if((windowTop) > element9.offsetTop) {
      element9.classList.add(animationClass);
    } 
  })
  const windowTop2 = window.pageYOffset + ((window.innerHeight * 4) / 4);
  about_prism.forEach(function(element10) {
    if((windowTop2) > element10.offsetTop) {
      element10.classList.add(animationClass);
    } 
  })
}

animeScroll();

if(curso.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}
if(news.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}
if(evento.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}

if(contrast_right.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}

  /* background confetti */
  const ulconfetti = document.querySelector("ul.confetti");
  

  for (let i = 0; i < 70; i++) {
    const li = document.createElement("li");
  
    const random = (min, max) => Math.random() * (max - min) + min;
  
    const sizex = Math.floor(random(20, 30));
    const sizey = Math.floor(random(8, 12));
    const position = random(1, 96);
    const delay = random(5, 0.1);
  
    li.style.width = `${sizex}px`;
    li.style.height = `${sizey}px`;
    li.style.marginTop = `0`;
  
    li.style.marginLeft = `${position}%`;
  
    li.style.animationDelay = `${delay}s`;
  
    ulconfetti.appendChild(li);
    
  }
