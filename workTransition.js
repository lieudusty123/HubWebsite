
var pos = 0;
var totalSlides = $('#slider-wrap ul li').length;
var sliderWidth = $('#slider-wrap').width();

addEventListener('resize', (event) => {
    sliderWidth = $('#slider-wrap').width();
    $('#slider-wrap ul#slider').width(sliderWidth * totalSlides);
});

$(document).ready(function () {


    /*****************
     BUILD THE SLIDER
    *****************/

    $('#slider-wrap ul#slider').width(sliderWidth * totalSlides);

    //next slide  
    $('#next').click(function () {
        slideRight();
    });

    //previous slide
    $('#previous').click(function () {
        slideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
    ************************/
    //automatic slider
    // var autoSlider = setInterval(slideRight, 5000);

    //for each slide 
    $.each($('#slider-wrap ul li'), function () {

        //create a pagination
        var li = document.createElement('li');
        $('#pagination-wrap ul').append(li);
    });

    countSlides();
    // pagination();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    if (window.innerWidth <= 1000) {
        $('#slider-wrap').addClass('active')
    }
    else {
        $('#slider-wrap').hover(
            function () { $(this).addClass('active') }
            // function () { $(this).removeClass('active'); autoSlider = setInterval(slideRight, 5000); }
        );

    }



});//DOCUMENT READY



/***********
 SLIDE LEFT
************/
function slideLeft() {
    pos--;
    if (pos == -1) { pos = totalSlides - 1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

    //*> optional
    countSlides();
    pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight() {
    pos++;
    if (pos == totalSlides) { pos = 0; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

    //*> optional 
    countSlides();
    pagination();
}




/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides() {
    $('#counter').html(pos + 1 + ' / ' + totalSlides);
}

function pagination() {
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}

