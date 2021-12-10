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
        $("#aries-info1").toggle();
        $("#aries-info2").toggle();
        $("#aries-info3").toggle();
        $("#aries-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".taurus-card").click(function(){
        $("#taurus-info").toggle();
        $("#taurus-info1").toggle();
        $("#taurus-info2").toggle();
        $("#taurus-info3").toggle();
        $("#taurus-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".gemini-card").click(function(){
        $("#gemini-info").toggle();
        $("#gemini-info1").toggle();
        $("#gemini-info2").toggle();
        $("#gemini-info3").toggle();
        $("#gemini-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".cancer-card").click(function(){
        $("#cancer-info").toggle();
        $("#cancer-info1").toggle();
        $("#cancer-info2").toggle();
        $("#cancer-info3").toggle();
        $("#cancer-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".leo-card").click(function(){
        $("#leo-info").toggle();
        $("#leo-info1").toggle();
        $("#leo-info2").toggle();
        $("#leo-info3").toggle();
        $("#leo-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".virgo-card").click(function(){
        $("#virgo-info").toggle();
        $("#virgo-info1").toggle();
        $("#virgo-info2").toggle();
        $("#virgo-info3").toggle();
        $("#virgo-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".libra-card").click(function(){
        $("#libra-info").toggle();
        $("#libra-info1").toggle();
        $("#libra-info2").toggle();
        $("#libra-info3").toggle();
        $("#libra-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".scorpio-card").click(function(){
        $("#scorpio-info").toggle();
        $("#scorpio-info1").toggle();
        $("#scorpio-info2").toggle();
        $("#scorpio-info3").toggle();
        $("#scorpio-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".sagittarius-card").click(function(){
        $("#sagittarius-info").toggle();
        $("#sagittarius-info1").toggle();
        $("#sagittarius-info2").toggle();
        $("#sagittarius-info3").toggle();
        $("#sagittarius-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".capricorn-card").click(function(){
        $("#capricorn-info").toggle();
        $("#capricorn-info1").toggle();
        $("#capricorn-info2").toggle();
        $("#capricorn-info3").toggle();
        $("#capricorn-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".aquarius-card").click(function(){
        $("#aquarius-info").toggle();
        $("#aquarius-info1").toggle();
        $("#aquarius-info2").toggle();
        $("#aquarius-info3").toggle();
        $("#aquarius-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".pisces-card").click(function(){
        $("#pisces-info").toggle();
        $("#pisces-info1").toggle();
        $("#pisces-info2").toggle();
        $("#pisces-info3").toggle();
        $("#pisces-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-aries-btn").click(function(){
        $("#aries-info").toggle();
        $("#aries-info1").toggle();
        $("#aries-info2").toggle();
        $("#aries-info3").toggle();
        $("#aries-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-taurus-btn").click(function(){
        $("#taurus-info").toggle();
        $("#taurus-info1").toggle();
        $("#taurus-info2").toggle();
        $("#taurus-info3").toggle();
        $("#taurus-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-gemini-btn").click(function(){
        $("#gemini-info").toggle();
        $("#gemini-info1").toggle();
        $("#gemini-info2").toggle();
        $("#gemini-info3").toggle();
        $("#gemini-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-cancer-btn").click(function(){
        $("#cancer-info").toggle();
        $("#cancer-info1").toggle();
        $("#cancer-info2").toggle();
        $("#cancer-info3").toggle();
        $("#cancer-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-leo-btn").click(function(){
        $("#leo-info").toggle();
        $("#leo-info1").toggle();
        $("#leo-info2").toggle();
        $("#leo-info3").toggle();
        $("#leo-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-virgo-btn").click(function(){
        $("#virgo-info").toggle();
        $("#virgo-info1").toggle();
        $("#virgo-info2").toggle();
        $("#virgo-info3").toggle();
        $("#virgo-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-libra-btn").click(function(){
        $("#libra-info").toggle();
        $("#libra-info1").toggle();
        $("#libra-info2").toggle();
        $("#libra-info3").toggle();
        $("#libra-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-scorpio-btn").click(function(){
        $("#scorpio-info").toggle();
        $("#scorpio-info1").toggle();
        $("#scorpio-info2").toggle();
        $("#scorpio-info3").toggle();
        $("#scorpio-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-sagittarius-btn").click(function(){
        $("#sagittarius-info").toggle();
        $("#sagittarius-info1").toggle();
        $("#sagittarius-info2").toggle();
        $("#sagittarius-info3").toggle();
        $("#sagittarius-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-capricorn-btn").click(function(){
        $("#capricorn-info").toggle();
        $("#capricorn-info1").toggle();
        $("#capricorn-info2").toggle();
        $("#capricorn-info3").toggle();
        $("#capricorn-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-aquarius-btn").click(function(){
        $("#aquarius-info").toggle();
        $("#aquarius-info1").toggle();
        $("#aquarius-info2").toggle();
        $("#aquarius-info3").toggle();
        $("#aquarius-info4").toggle();
    });
});

$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-pisces-btn").click(function(){
        $("#pisces-info").toggle();
        $("#pisces-info1").toggle();
        $("#pisces-info2").toggle();
        $("#pisces-info3").toggle();
        $("#pisces-info4").toggle();
    });
});
