

/*---------------------------
-------LOOKS-GALARY-------
-----------------------------*/

var look_slideIndex = 1 ;
console.log(look_slideIndex);
//look_showSlides(look_slideIndex);



// Next/previous controls
function look_plusSlides(n) {
  look_showSlides(look_slideIndex += n);
}

// Thumbnail image controls
function look_currentSlide(n) {
  look_showSlides(look_slideIndex = n);
}

function look_showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("look_info_main_div");
  console.log(slides)
  var icons = document.getElementsByClassName("look_btn");
 // console.log(icons);
  if (n > slides.length) {look_slideIndex = 1}
  if (n < 1) {look_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 for (i = 0; i < icons.length; i++) {
     icons[i].className = icons[i].className.replace("lookLines_active","");
    }

  slides[look_slideIndex-1].style.display = "block";
  slides[look_slideIndex-1].style.opacity = 1;
  icons[look_slideIndex-1].className += " lookLines_active";
}


/*---------------------------
-------ARIA LABELED-BY-------
-----------------------------*/

function arialabeledBy_Func(div_num,id){
  var aria = document.getElementsByClassName("tirgul_card");
  aria[div_num].setAttribute("aria-labelledby", id);
}


/*---------------------------
-------INNER-NAV-------
-----------------------------*/
