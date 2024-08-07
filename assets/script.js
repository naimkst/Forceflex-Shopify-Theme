(function ($) {

    "use strict";

    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/
    $('.select').niceSelect();

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".mobail-menu .open-btn");
        var xbutton = $(".mobail-menu .navbar-toggler");

        openBtn.on("click", function (e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideInn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();

    // Function for toggle class for small menu
    function toggleClassForcatagoryNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".mini-shop-content > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("mini-shop-item");
        } else {
            mainNav.removeClass("mini-shop-item");
        }
    }

    toggleClassForcatagoryNav();

    // Function for catagory menu
    function catagoryNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".header-shop-item");
        var catagoryNav = $(".header-shop-item > .mini-shop-item");
        var menuItemWidthSubMenu = catagoryNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }

    }

    catagoryNavFunctionality();

    $("body").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.open-btn').removeClass('x-close');
    });


    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slide-wrap").length) {
            $(".hero-slide-wrap").slick({
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                fade: true,
                cssEase: 'linear',
            });
        }
    }

    //Active heor slider
    heroSlider();


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {

                //active wow
                wow.init();


            });
        }
    }



    /*------------------------------------------
            = Header search toggle
        -------------------------------------------*/
    if ($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchToggleBtnIcon = $(".search-toggle-btn i");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function (e) {
            searchContent.toggleClass("header-search-content-toggle");
            searchToggleBtnIcon.toggleClass("fi flaticon-search fi ti-close");
            e.stopPropagation();
        });

        body.on("click", function () {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function (e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
    if ($(".mini-cart").length) {
        var cartToggleBtn = $(".cart-toggle-btn");
        var cartContent = $(".mini-cart-content");
        var cartContent2 = $(".header-right");
        var cartCloseBtn = $(".mini-cart-close");
        var body = $("body");

        cartToggleBtn.on("click", function (e) {
            cartContent.toggleClass("mini-cart-content-toggle");
            cartContent2.toggleClass("active");
            e.stopPropagation();
        });

        cartCloseBtn.on("click", function (e) {
            cartContent.removeClass("mini-cart-content-toggle");
            cartContent2.removeClass("active");
            e.stopPropagation();
        });

        body.on("click", function () {
            cartContent.removeClass("mini-cart-content-toggle");
            cartContent2.removeClass("active");
        }).find(cartContent).on("click", function (e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
            = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    /*------------------------------------------
       product slider
    -------------------------------------------*/
    if ($(".product-active").length) {
        $(".product-active").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 20,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },

                350: {
                    items: 1,
                },
                500: {
                    items: 2,
                },

                768: {
                    items: 3,
                },
                992: {
                    items: 3,
                },

                1200: {
                    items: 4
                },

                1400: {
                    items: 5
                },

            }
        });

        // Attach hover events to product-item
        $('.product-active').on('mouseover', '.product-item', function () {
            const image1 = $(this).find('.image1');
            const image2 = $(this).find('.image2');
            const originalSrc = image1.attr('src');
            image1.data('originalSrc', originalSrc); // Store the original src
            image1.attr('src', image2.attr('src'));
        });

        $('.product-active').on('mouseout', '.product-item', function () {
            const image1 = $(this).find('.image1');
            const originalSrc = image1.data('originalSrc');
            image1.attr('src', originalSrc);
        });
    }
    /*------------------------------------------
      category-active
    -------------------------------------------*/
    if ($(".category-active").length) {
        $(".category-active").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 20,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },

                350: {
                    items: 1,
                },
                500: {
                    items: 2,
                },

                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },

                1200: {
                    items: 4
                },

                1400: {
                    items: 4
                },

            }
        });

    }

    /*------------------------------------------
    mobail-active
    -------------------------------------------*/
    $(document).ready(function () {
        function activateOwlCarousel() {
            if ($(window).width() <= 991) {
                if ($(".mobail-active").length) {
                    $(".mobail-active").owlCarousel({
                        autoplay: false,
                        smartSpeed: 300,
                        margin: 0,
                        loop: true,
                        items: 1,
                        autoplayHoverPause: true,
                        dots: true,
                        nav: false
                    });
                }
            } else {
                if ($(".mobail-active").hasClass("owl-carousel")) {
                    $(".mobail-active").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                    $(".mobail-active").find('.owl-stage-outer').children().unwrap();
                }
            }
        }

        activateOwlCarousel();

        $(window).resize(function () {
            activateOwlCarousel();
        });
    });


    $(document).ready(function () {
        $('.product-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            }

        });

    });


    /*-----------------------
       cart-plus-minus-button 
     -------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    // Screen Width
    var screen_width = window.screen.width;

    gsap.registerPlugin(ScrollTrigger);

    // Active GSAP
    if (document.querySelector("#has_smooth").classList.contains("smooth-scrool-animate")) {
        const smoother = ScrollSmoother.create({
            smooth: 1.35,
            effects: screen_width < 1025 ? false : true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

    // gsap.set(".dotsBlue", { yPercent: -10 });
    // gsap.set(".clusterGreat", { yPercent: 20 });

    // gsap.to(".dotsBlue", {
    //     yPercent: 10,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".clusterGreat",
    //         scrub: 1
    //     },
    // });

    // gsap.to(".clusterGreat", {
    //     yPercent: 5,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".clusterGreat",
    //         end: "bottom center",
    //         scrub: 1
    //     },
    // });

    gsap.to('.zoom-image', {
        scale: 1, // Scale to which you want to zoom in
        scrollTrigger: {
            trigger: '.multi-item',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    });


    // sticky-sec
    $(window).scroll(function () {
        var navbar = $("#sticky-sec");
        if (navbar.length === 0) {
            return;
        }

        var sticky = navbar.offset().top;

        if ($(window).scrollTop() >= sticky) {
            navbar.addClass("add-black");
        } else {
            navbar.removeClass("add-black");
        }

        if ($(window).scrollTop() === 0) {
            navbar.removeClass("add-black");
        }
    });

    // $(document).ready(function(){
    //     function isHoveringClassRemove() {
    //         return $('.class-remove:hover').length > 0;
    //     }
    //     $('.class-remove').hover(
    //         function() {
    //             $('.multi-section').removeClass('add-black');
    //         }, function() {
    //             if (!isHoveringClassRemove()) {
    //                 $('.multi-section').addClass('add-black');
    //             }
    //         }
    //     );

    //     $('.multi-item').hover(
    //         function() {
    //             if (!isHoveringClassRemove()) {
    //                 $('.multi-section').addClass('add-black');
    //             }
    //         }, function() {
    //             if (!isHoveringClassRemove()) {
    //                 $('.multi-section').addClass('add-black');
    //             }
    //         }
    //     );
    // });


    document.addEventListener("DOMContentLoaded", () => {
        // Screen Width
        const screen_width = window.screen.width;

        // Check if the element exists and has the required class
        const smoothAnimateElement = document.querySelector("#smooth-animate");
        if (smoothAnimateElement && smoothAnimateElement.classList.contains("smooth-scrool-animate")) {
            const smoother = ScrollSmoother.create({
                effects: screen_width < 1025 ? false : true,
                smooth: 1.35,
                ignoreMobileResize: true,
                normalizeScroll: false,
                smoothTouch: 0.1,
            });
        }
    });

    gsap.to(".product-single-image", {
        scrollTrigger: {
            trigger: ".product-right",
            start: "top top",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true
        }
    });


    /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        preloader();

        toggleMobileNavigation();

        smallNavFunctionality();

        toggleClassForcatagoryNav();
    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {
        toggleBackToTopBtn();

    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {
        toggleClassForSmallNav();
        //smallNavFunctionality();
        catagoryNavFunctionality();
        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();
        }, 200));
    });

})(window.jQuery);