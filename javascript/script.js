//funkcija za prikaz gadgetov s samodejnim scrollanjem

$(document).ready(function(){
    $("ul li:eq(1)").click(function(){
		$('html, body').animate({
        scrollTop: $("#overview").offset().top
    }, 2000);
    });
});

