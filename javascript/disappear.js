//funkcija, ki odstrani header, ko poskrolamo navzdol
$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        $('.site-wrapper-inner').css("opacity", 0);
    }
    else{
        $('.site-wrapper-inner').css("opacity", 1);
    }
});