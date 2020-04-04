
function init() {
  
  initButtonsHeader();
  affichPageCourant();

   
  $('.testimonials__list').slick({
    dots: true,
    arrows: false,
    appendDots: $('.testimonials')
  });
  $("#datepicker" ).datepicker();
}

$('.gotop').click(function(){
  $('body,html').animate({
     scrollTop: 0
  }, 1000);
  return false;
});


window.addEventListener('scroll',  goTop)
//window.addEventListener('scroll',  scrolllien)
window.addEventListener('scroll',  scrollHeaderFix)
window.addEventListener('scroll',  scrollBarTrai)
window.addEventListener('scroll',  scrollProgressBar)


function goTop(){
  var element = document.querySelector('.section')
  var gotop = document.querySelector(".gotop")
  var offset = element.offsetTop


  
  if (document.documentElement.scrollTop >= offset) {

    gotop.classList.remove("is-novisible")
    gotop.classList.add("is-visible")

  } else {
  
    gotop.classList.add("is-novisible")
    gotop.classList.remove("is-visible")
  }

  
}
/*function scrolllien(){
   // recuperer les link avec scroll
 var element = document.querySelector('.section')
 
 var offset = element.offsetTop
  if (document.documentElement.scrollTop >= offset ) {
    document.querySelector(".icons").classList.remove("disparai");
    document.querySelector(".icons").classList.add("apparai")
    
  } else {
    document.querySelector(".icons").classList.add("disparai");
    document.querySelector(".icons").classList.remove("apparai");
  }
}*/
function scrollHeaderFix(){
    // sticky header
  var section = document.querySelector('.section');
  var header = document.querySelector(".header");
  
  var sticky = section.offsetTop;

  
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
   

  } else {
    header.classList.remove("sticky");
  }
}
function scrollBarTrai(){
   // recuperer la taille de la page
  var documentHeight = document.body.clientHeight;
  // recuperer la position du scroll 
  var scrollState = document.documentElement.scrollTop;
  // calculer le pourcentage de la position du scroll
  var pourcentage = (scrollState * 100) / (documentHeight - window.innerHeight);
   
  document.querySelector(".trai__scroll").style.width = pourcentage + "%";
}
function scrollProgressBar(){
    // annimation des progress bar en scrollant
  var elems = document.querySelectorAll(".skills__block__wrapper__progress-block__bar__percent");
  var elem = document.querySelector('.skills__block__wrapper__progress-block') 
  var offset = elem.offsetTop;
  
  for (var i = 0; i < elems.length; i++) {
    
    if ( document.documentElement.scrollTop >= offset ){

      elems[i].style.width =  elems[i].getAttribute('data-percent') + "%";
    } 
  }
}




var elem = document.querySelectorAll('.skills__block__wrapper__progress-block__bar__percent');
getElemDistance(elem)
function getElemDistance ( elem ) {
    var location = 0;
     for (var i = 0; i < elem.length; i++) {
        location += elem.offsetTop;
        elem = elem.offsetParent;
      if (elem <= document.documentElement.scrollTop) {
         elem[i].style.width =  elem[i].getAttribute('data-percent') + "%";
      }
    return location >= 0 ? location : 0;
  }
};




// lorsque le pointeur est deplacé sur un element 
var title = document.querySelector(".about__top__header__title");
          

title.addEventListener("mouseover", mouseOver);
title.addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelector(".about__top__header__arria").style.display = "block";
}

function mouseOut() {
  setTimeout(function() {
    document.querySelector(".about__top__header__arria").style.display = "none";
  },3000);
}



function initButtonsHeader()  {
  // je récupère mes boutons
  var navButton = Array.from(document.querySelectorAll('.header__bloc__nav__item'))
  // pour chaque bouton
  navButton.forEach(function(button) {
    // au clic sur le bouton
    button.addEventListener('click', function(event){
      event.preventDefault()
     
      // je récupère la section à appeler
      var sectionAApeller = button.getAttribute('data-section-name')
      // j'apelle la section
      if(sectionAApeller === "portfolio"){
        affichePortfolio()
      }
      else if(sectionAApeller === "contact") {
        afficheContact()
       
      }
       else if(sectionAApeller === "inscription") {
        afficheInscription()
       
      }
       else if(sectionAApeller === "connexion") {
        afficheConnexion()
       
      }
      else if(sectionAApeller === "blog"){
        afficheBlog()
      } 
      else {
        afficheAbout();
      } 
    })
  })// fin
}

// affiche la page en fonction de url
function affichPageCourant() {

  var mapage = window.location.hash.substr(1)

  if (mapage === "portfolio") affichePortfolio();
  else if (mapage === "blog") afficheBlog();
  else if (mapage === "contact") afficheContact();
  else if (mapage === "inscription") afficheInscription();
  else if (mapage === "connexion") afficheConnexion();
  else afficheAbout();
}

function afficheInscription(){
   // mettre le hash dans url
  window.location.hash = "inscription"
  // nettoyer toute les class actives
  nettoyerSectionActives()

  // mette le bouton clické en mode actif
  document.querySelector('a[data-section-name="inscription"]').classList.add('header__bloc__nav__item--active');

  // rajoute la classe active sur les elements d'about
  document.querySelector('.inscription').classList.add('section-page--active');

  // initialisation des composant d'about

}
function afficheConnexion(){
   // mettre le hash dans url
  window.location.hash = "connexion"
  // nettoyer toute les class actives
  nettoyerSectionActives()

  // mette le bouton clické en mode actif
  document.querySelector('a[data-section-name="connexion"]').classList.add('header__bloc__nav__item--active');

  // rajoute la classe active sur les elements d'about
  document.querySelector('.connexion').classList.add('section-page--active');

  // initialisation des composant d'about

}
 
function afficheAbout() {
  // mettre le hash dans url
  window.location.hash = "about"
  // nettoyer toute les class actives
  nettoyerSectionActives()

  // mette le bouton clické en mode actif
  document.querySelector('a[data-section-name="content"]').classList.add('header__bloc__nav__item--active');

  // rajoute la classe active sur les elements d'about
  document.querySelector('.content').classList.add('section-page--active');

  // initialisation des composant d'about

}



function nettoyerSectionActives() {
  document.querySelector('.section-page--active').classList.remove('section-page--active');
   // nettoie le bouton actif
  var boutonActif = document.querySelector('.header__bloc__nav__item--active')
  if (boutonActif) boutonActif.classList.remove('header__bloc__nav__item--active');
}


function affichePortfolio() {
  // mettre le hash dans l'url
  window.location.hash = "portfolio"

  // enlever toutes les classes actives
  nettoyerSectionActives()

  // mette le bouton clické en mode actif
  document.querySelector('a[data-section-name="portfolio"]').classList.add('header__bloc__nav__item--active');

  // rajoute la classe active sur les elements de portefolio
  document.querySelector('.portfolio').classList.add('section-page--active');

  // initialisation des composant de portfolio
  var buttons = document.querySelectorAll('.works__wrapper__list__titles__title');
  
      
   for (var i = 0; i < buttons.length; i++) {
   
    buttons[i].addEventListener('click', (function(i) {
      return function(e) {
      e.preventDefault()
        var title = document.querySelector('.works__wrapper__list__titles__title--active');
        title.classList.remove('works__wrapper__list__titles__title--active');
        buttons[i].classList.add('works__wrapper__list__titles__title--active');
        return false;
      }
    })(i));
  }

  var $grid = $('.works__wrapper__block').isotope({
    itemSelector: '.works__wrapper__block__item',
    layoutMode: 'fitRows'
  });
    var filters = {};
    for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function(e){

      var buttonGroup = document.querySelector('.works__wrapper__list__titles__title');
    
      // set filter for group
      filters[ buttonGroup ] = this.getAttribute('data-filter');
      // combine filters
      var filterValue = concatValues( filters );
      // set filter for Isotope
      $grid.isotope({ filter: filterValue });
    });
  }

  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
 
  lightbox.option({
    'wrapAround': true,
    'fadeDuration':600,
  });
}



function afficheBlog() {
  // mettre le hash dans l'url
  window.location.hash = "blog"

  // enlever toutes les classes actives
  nettoyerSectionActives()

  // mette le bouton clické en mode actif
  document.querySelector('a[data-section-name="blog"]').classList.add('header__bloc__nav__item--active');
  // rajoute la classe active sur les elements de blog
  document.querySelector('.blog').classList.add('section-page--active');
 
}

function afficheContact() {
  initMap()
  // mettre le hash dans l'url
  window.location.hash = "contact"

  // enlever toutes les classes actives
  nettoyerSectionActives()
  
  // mette le bouton clické en mode actif
  document.querySelector('a[data-section-name="contact"]').classList.add('header__bloc__nav__item--active');

  // rajoute la classe active sur les elements de contact
  document.querySelector('.contact').classList.add('section-page--active');

  var myFrom = document.querySelector('.form__contact')
  var input = document.querySelectorAll('.form__contact__input__textes') // [input, input, input]
  

  myFrom.addEventListener('submit', function(e){
    e.preventDefault();
   

    for (var i = 0; i < input.length; i++) {
      
      if(input[i].value == '' ) {
        input[i].style.border = "2px solid #cd5353";
      } else {
        input[i].style.border = "2px solid #efefef";
      }
    }
  });

  var inputEmail = document.querySelector('.form__contact__email')
  inputEmail.addEventListener("blur", function(e){
    e.preventDefault();
    var valeurinput =  inputEmail.value
    if (/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(valeurinput)) {
      document.querySelector('.error').style.display = 'none'
      console.log('email ok');
    } else {
      document.querySelector('.error').style.display = 'block'
      inputEmail.style.border = "1px solid #cd5353";
    }
  });
}
ready(init); 

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


function initMap() {
  
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.querySelector('.map__location'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}























