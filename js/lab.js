//
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


$(document).ready(function(){
    // Toggles paragraphs display
    $(".aries-card").click(function(){
        $("#aries-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".taurus-card").click(function(){
        $("#taurus-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".gemini-card").click(function(){
        $("#gemini-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".cancer-card").click(function(){
        $("#cancer-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".leo-card").click(function(){
        $("#leo-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".virgo-card").click(function(){
        $("#virgo-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".libra-card").click(function(){
        $("#libra-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".scorpio-card").click(function(){
        $("#scorpioinfo").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".sagittarius-card").click(function(){
        $("#sagittarius-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".capricorn-card").click(function(){
        $("#capricorn-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".aquarius-card").click(function(){
        $("#aquarius-info").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".pisces-card").click(function(){
        $("#pisces-info").toggle();
    });
});
