function toggleDiv() {
  let elemento = "#image";
  let largura = document.querySelector(elemento).clientWidth;
  if(largura<992){
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
    
  }

const curso = document.querySelectorAll('[data-animate-curso]');
const about_left = document.querySelectorAll('[data-animate-about-left]');
const about_right = document.querySelectorAll('[data-animate-about-right]');
const about_prism = document.querySelectorAll('[data-animate-about-prism]');
const contrast_right = document.querySelectorAll('[data-animate-contrast-right]');
const show = document.querySelectorAll('[data-animate-show]');
const feed = document.querySelectorAll('[data-animate-feed]');
const about_center = document.querySelectorAll('[data-animate-about-center]');
const prisma = document.querySelectorAll('[data-animate-prisma]');
const news = document.querySelectorAll('[data-animate-news]');
const evento = document.querySelectorAll('[data-animate-event-left]');
const evento_right = document.querySelectorAll('[data-animate-event-right]');
const project_top = document.querySelectorAll('[data-animate-project-top]');
const com = document.querySelectorAll('[data-animate-com]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  curso.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  about_left.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  about_right.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  contrast_right.forEach(function(element){
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  show.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  feed.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  about_center.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  prisma.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  news.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  evento.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  evento_right.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  project_top.forEach(function(element1) {
    if((windowTop) > element1.offsetTop) {
      element1.classList.add(animationClass);
    } 
  })
  com.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
  })
  const windowTop2 = window.pageYOffset + ((window.innerHeight * 4) / 4);
  about_prism.forEach(function(element) {
    if((windowTop2) > element.offsetTop) {
      element.classList.add(animationClass);
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

if(project_top.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}
if(com.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}
if(prisma.length) {
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
    const position = random(1, 92);
    const delay = random(5, 0.1);
  
    li.style.width = `${sizex}px`;
    li.style.height = `${sizey}px`;
    li.style.marginTop = `0`;
  
    li.style.marginLeft = `${position}%`;
  
    li.style.animationDelay = `${delay}s`;
  
    ulconfetti.appendChild(li);
    
  }
