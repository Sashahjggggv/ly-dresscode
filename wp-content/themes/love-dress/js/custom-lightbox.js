
jQuery(function($){
    var lightBoxOptions = {
            captionSelector: 'self',
            closeText: '<div class="button-close"><span></span><span></span></div>',
            navText: ['<div class="swiper-button-prev round-button"><span></span></div>',
                '<div class="swiper-button-next round-button"><span></span></div>'],
            alertErrorMessage: "Картинку не знайдено. Наступна картинка буде завантажена для перегляду.",
            history: false,
            heightRatio: 0.8
        },
        lightboxSelector = $('.lightbox-wrapper'),
        lightboxLength = lightboxSelector.length,
        lightbox = [];

    for(var i=0;i<lightboxLength;i++){
        lightbox[i] = $(lightboxSelector[i]).find('.lightbox').simpleLightbox(lightBoxOptions);
    };

    $('.testmonial-count-wrap').on('click', function() {
        $(this).closest('.item').find('.lightbox').trigger('click');
    });

    $(document).on('click', '.lightbox', function() {
        $('html').addClass('overflow-hidden');
    });

    $(document).on('click', '.sl-close, .sl-overlay', function() {
        $('html').removeClass('overflow-hidden');
        $('#custom-cursor').removeClass('cursor-circle cursor-circle-dark');
    });

});
    