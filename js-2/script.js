

function init(){
  var input = document.querySelector('.header__bloc__nav__search__form__input');
  console.log(input)
  

  input.addEventListener('blur', function(e){
     e.preventDefault();
    if(this.value ===''){
      this.value ='search';
    }
  });

  
  input.addEventListener('focus', function(e){
    
    if(this.value ==='search'){
      this.value ='';
    }
  });
}
ready(init); // content()

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}