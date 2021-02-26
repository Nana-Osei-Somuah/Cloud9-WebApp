$(document).ready(function() {

    function toggleNavbarMethod() {
        if ($(window).width() > 768) {
            $('.navbar .dropdown').on('mouseover', function() {
                $('.dropdown-toggle', this).trigger('click');
            }).on('mouseout', function() {
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        } else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);

    // Ajax functionality when user clicks submit for registration (id = rSubmit )
    $('#sell-Register').click(function(e) {
        e.preventDefault();

        // checking that inputs are not empty and match relevant patterns
        const fNameCheck = checkEmpty("#fname", "#invalidinput1");
        const lNameCheck = checkEmpty('#lname', '#invalidinput2');
        const bNameCheck = checkEmpty('#business', '#invalidinput4');
        const emailCheck = regexCheck("#email", "#invalidinput3", 1);
        const passCheck = regexCheck("#password", "#invalidinput5", 3);
        const rpassCheck = regexCheck("#rpassword", "#invalidinput6", 3);
        // checking if password and retyped password match
        const pass = (passCheck == rpassCheck) ? true : false;

        if (emailCheck && fNameCheck && lNameCheck && bNameCheck && passCheck && pass) {

            var fName = $("#fname").val().trim();
            var lName = $("#lname").val().trim();
            var bName = $("#business").val().trim();
            var email = $("#email").val().trim();
            var password = $("#password").val().trim();
            var submit = $("#sell-Register").val();

            // Ajax post function to php controller
            $.post('controllers/sRegistration.php', {
                submit: submit,
                fName: fName,
                lName: lName,
                bName: bName,
                pwd: password,
                email: email
            }, function(data) {
                console.log(data);
                if (data == 'true') {
                    alert("Succesfully signed up!");
                }
                if (data == 'false') {
                    alert("Registration details already exist in database!");
                }
            });
        }

    });

    // Ajax functionality when user clicks submit for login (id = lSubmit)
    $('#sell-Login').click(function(e) {
        e.preventDefault();

        // checking that inputs are not empty and match relevant patterns
        const emailCheck = regexCheck("#s-l-email", "#invalidinput7", 1);
        const passCheck = regexCheck("#s-l-password", "#invalidinput9", 3);
        const bNameCheck = checkEmpty('#business-2', '#invalidinput8');

        if (emailCheck && passCheck) {

            var email = $("#s-l-email").val().trim();
            var password = $("#s-l-password").val().trim();
            var bName = $("#business-2").val().trim();
            var submit = $("#sell-Login").val();

            // Ajax post function to php controller
            $.post('controllers/sLogin.php', {
                submit: submit,
                pwd: password,
                bName: bName,
                email: email
            }, function(data) {
                console.log(data);
                if (data == 'true') {
                    window.location.href = "index.html";
                }
                if (data == 'false') {
                    alert("Email or password do not match!" + data);

                }


            });
        }

    });
});

/**errorID: ID for error box
 * elementID: ID for element
 * 
 * Function: Set border-bottom of elementID to red
 *           and add error message in error box
 */
function setErrorFor(errorID, elementID, message) {
    $(errorID).html(message);
    $(document).ready(function() {
        $(elementID).css('border-bottom', '2px solid red');
    });
}
/**errorID: ID for error box
 * elementID: ID for element
 * 
 * Function: Set border-bottom of elementID to green
 *           and clear error box
 */
function setSuccessFor(errorID, elementID) {
    $(errorID).html('');
    $(elementID).css('border-bottom', '3px solid green');
}


/**
 * return:True if pattern matches type regex, false otherwise
 */
function regexCheck(elementID, errorID, type) {
    var regex;
    var errorType;

    // if type is email
    if (type == 1) {
        regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        errorType = 1;
    }
    // if type is ID
    if (type == 2) {
        regex = /(\d{4}20\d{2}$){1}/;
        errorType = 2;
    }
    // if type is password
    if (type == 3) {
        regex = /(^[a-zA-Z0-9]{8,12}$){1}/;
        errorType = 3;
    }
    var input = ($(elementID).val().trim() != null) ? $(elementID).val().trim() : "";
    var value = true;
    if (input.match(regex)) {
        return value;
    } else {
        if (errorType == 1) {
            setErrorFor(errorID, elementID, "Please input a valid ashesi email");
        }
        if (errorType == 2) {
            setErrorFor(errorID, elementID, "Please input a valid ashesi ID");
        }
        if (errorType == 3) {
            setErrorFor(errorID, elementID, "Password should be alphanumeric with 8 to 12 characters");
        }

        value = false;
        return value;
    }

}


/**
 * return:True if not empty, false otherwise
 */
function checkEmpty(elementID, errorID) {

    var element = $(elementID).val();
    if (element != null) {
        element = element.trim();
    }
    var value = true;
    if (element == '' || element == null) {
        setErrorFor(errorID, elementID, "Field must not be empty");
        value = false;
        return value;

    } else {
        return value;
    }
}


// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});


// Header slider
$('.header-slider').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});


// Product Slider 4 Column
$('.product-slider-4').slick({
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});


// Product Slider 3 Column
$('.product-slider-3').slick({
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});


// Product Detail Slider
$('.product-slider-single').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-slider-single-nav'
});
$('.product-slider-single-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.product-slider-single'
});


// Brand Slider
$('.brand-slider').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


// Review slider
$('.review-slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        }
    }]
});


// Widget slider
$('.sidebar-slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});


// Quantity
$('.qty button').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('btn-plus')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find('input').val(newVal);
});


// Shipping address show hide
$('.checkout #shipto').change(function() {
    if ($(this).is(':checked')) {
        $('.checkout .shipping-address').slideDown();
    } else {
        $('.checkout .shipping-address').slideUp();
    }
});


// Payment methods show hide
$('.checkout .payment-method .custom-control-input').change(function() {
    if ($(this).prop('checked')) {
        var checkbox_id = $(this).attr('id');
        $('.checkout .payment-method .payment-content').slideUp();
        $('#' + checkbox_id + '-show').slideDown();
    }
});