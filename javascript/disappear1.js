//funkcija, ki odstrani header, ko poskrolamo navzdol
$(window).scroll(function() {
    if ($(window).scrollTop() > 30) {
        //$('.site-wrapper-inner').css("opacity", 0);
        $('.inner').fadeOut(500);
    }
    else{
        //$('.site-wrapper-inner').css("opacity", 1);
        $('.inner').fadeIn(500);
    }
});