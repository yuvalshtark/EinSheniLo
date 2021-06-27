

/*---------------------------
-------CATEGORIES-GALARY-------
-----------------------------*/

var slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("categories_div");
  var icons = document.getElementsByClassName("categories_icons_li");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < icons.length; i++) {
      icons[i].className = icons[i].className.replace("icon_active", "");
 }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.opacity = "1";
  icons[slideIndex-1].className += " icon_active";
}


/*---------------------------
-------CONTACT US-------
-----------------------------*/
//function validateForm() {
//    var x = document.getElementById("fname").value;
//    if (x == "") {
//        //document.getElementById("comment").innerhtml = "Name must be filled out";  
//        alert("Name must be filled out");
//        return false;
                

//    }
//    //return answer;
//}

//function validateForm()
//{
//    var x = document.getElementById("fname").Value;
    
//    if (x == "")
//    {
//        document.getElementById("comment").innerhtml = "אנא הזן ערך";
//        }
//    document.getElementById("comment").innerhtml = "תודה רבה";

    
//}

//function validateForm() {
//    //var send = Document.getElementsBytype("submit").value;
//    Document.getelementbyid("finish").innerHTML = "הטופס נשלח בהצלחה";
//}


function validateForm() {
  let fname = document.forms["form"]["fname"].value;
  let lname = document.forms["form"]["lname"].value;
  let email = document.forms["form"]["email"].value;
  let phoneNumber = document.forms["form"]["phoneNumber"].value;
  let subject = document.forms["form"]["subject"].value;
  if (fname != "" && lname != "" && email != "" && phoneNumber != "" && subject !=  "") {
      let fname = "";
      let lname = "";
      let email = "";
      let phoneNumber = "";
      let subject = "";
      return false;
  }
}