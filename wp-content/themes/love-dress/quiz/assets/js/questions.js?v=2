/*https://github.com/digitalBush/jquery.maskedinput/tree/master/dist*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
    };
}(Element.prototype));
document.addEventListener('DOMContentLoaded', function (e){
    //Globals
    var currentStep     = 1;
    var MOBILE_VERSION_BREAKPOINT = 840;
    var animationSteps = {
        'step1': ['quiz-title', 'quiz__datepicker-year', 'months__row', 'quiz__datepicker-fallback'],
        'step2': ['quiz-title', 'quiz-item', ],
        'step3': ['quiz-title', 'quiz-item'],
        'step4': ['quiz-title', 'quiz-item'],
        'step5': ['quiz-title', 'quiz-item'],
        'step6': ['quiz-title']
    }

    //Functions
    function $(sel){return document.querySelector(sel)}
    function $$(selAll){return document.querySelectorAll(selAll)}
    function getItemsCollection(classesArr){
        var elements = classesArr.map(function(item){
            return '.step-'+ currentStep + ' .' + item;
        }).join(', ');
        return $$(elements);
    }
    function toggleMonths(){
        var monthInputs = $$('.quiz__datepicker-months [type="radio"]');
        for(var i = 0; i < monthInputs.length; i++){
            if( parseInt( yearOutput.innerText ) === currentYear ){
                if( currentMonth > i ) monthInputs[i].disabled = true;
                if( currentMonth > i ) monthInputs[i].checked = false;
            }
            else{
                monthInputs[i].disabled = false;
            }
        }
    }

    function fadeOut(elem){
        elem.style.transition = (TRANSITION_TIME / 1000) + 's';
        elem.style.opacity = '1';
        elem.classList.add('css-hide');
    }
    function fadeIn(elem){
        elem.style.transition = (TRANSITION_TIME / 1000) + 's';
        elem.style.opacity = '0';
        setTimeout(function(){elem.classList.add('css-visible');}, 20);
    }
    function goToNextStep(){
        var animationItems = getItemsCollection( animationSteps['step'+currentStep] );
        stepAnimations('hide', animationItems );
        var isMobile = window.screen.width < MOBILE_VERSION_BREAKPOINT && currentStep !== 3;
        var mobileHoldTime = isMobile ? MOBILE_ADDITIONAL_TIMEOUT : 0;

        setTimeout(function(){
            fadeOut( $('.step-'+currentStep) );
        }, TIMEOUT_INTERVAL * animationItems.length);


        setTimeout(function (){
            currentStep++;
            var currentText             = $('.quiz-progress__current');
            var progressLine            = $('.quiz-progress__filled');

            currentProgressPercent      = currentStep / totalSteps * 100;
            progressLine.style.width    = currentProgressPercent + '%';
            currentText.innerText       = currentStep;

            $('.step_active').classList.remove('step_active');

            var nextStep = $('.step-'+currentStep);
            fadeIn( nextStep );
            window.scrollTo({
                 top: 0,
                 behavior: "instant"
             });
            nextStep.classList.add('step_active');
            if(isMobile){
                setTimeout(function(){
                    fadeOut( $('.step_active .quiz__image img') );
                }, mobileHoldTime);
            }
            setTimeout(function(){
                stepAnimations('show', getItemsCollection( animationSteps['step'+currentStep] ) );
            }, mobileHoldTime);
            setHeightToImageContainer();
        }, ( TIMEOUT_INTERVAL * animationItems.length ) + (TRANSITION_TIME * 1.8) - mobileHoldTime / 4 );
    }

    var currentDate     = new Date();
    var currentYear     = currentDate.getFullYear();
    var currentMonth    = currentDate.getMonth();
    var yearOutput      = $('.quiz__datepicker-out');
    var totalSteps      = parseInt( $('.quiz-progress__total').innerText );
    var minTagsCount    = parseInt( $('.js-min-tags').innerText ); 

    toggleMonths();
    var datepickerControls = $('.quiz__datepicker-year');
    datepickerControls && datepickerControls.addEventListener('click', function(e){
        if( ~e.target.className.indexOf('quiz-arrow') ){
            var yearNow = parseInt( yearOutput.innerText );
            if( ~e.target.className.indexOf('js-prev') ){
                if( --yearNow >= currentYear) yearOutput.innerText = yearNow;
                else return;
            }
            else{
                yearOutput.innerText = ++yearNow;
            }
            toggleMonths();
        }
    });
    jQuery('input[type="tel"]').mask('+38 (099) 999-99-99',{placeholder: '_'});

    document.body.addEventListener('click', function(e){
        if( ~e.target.className.indexOf('button js-next') ){
            e.target.disabled = true;
            goToNextStep();
        }
    });

    function hideToLeft(elem){
        elem.style.transition = TRANSITION_TIME / 1000 + 's';
        elem.classList.add('hidetoleft');
    }

    function showFromRight(elem){
        elem.style.transition = TRANSITION_TIME / 1000 + 's';
        elem.classList.remove('hidetoright');
    }
    
    function showThanksPopap(){
        $('.popup-wrapper').classList.add('active');
        setTimeout(function(){
            $('.popup-content').classList.add('active');
        }, 300);
    }
    
    function submitData(){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/wp-admin/admin-ajax.php');
        
        var form     = $('form.quiz-steps');
        var formData = new FormData( form );
        formData.append('action', 'submit_quiz_data');

        xhr.send(formData);
        xhr.onload = function () {
            
            if (this.status >= 200 && this.status < 400) {
                console.log(this.response);
                //var resp = JSON.parse(this.response);
                
            } else {
                alert('Ошибка сервера');
            }
        }
    }
    
    function stepAnimations(showOrHide, elementsArray){
        var timeoutMS = TIMEOUT_INTERVAL;
        elementsArray.forEach(function (element){
            if( showOrHide === 'show' ) { //if need to show
                element.classList.add('hidetoright');
                setTimeout(function () {
                    showFromRight(element);
                }, timeoutMS);
                timeoutMS += TIMEOUT_INTERVAL;
            }
            else{
                setTimeout(function () {
                    hideToLeft(element);
                }, timeoutMS);
                timeoutMS += TIMEOUT_INTERVAL;
            }
        });
    }
    window.showFromRight = function showFromRight(elem){
        if( elem.className.indexOf('hidetoright') === -1 ) elem.classList.add('hidetoright');
        setTimeout(function(){
            elem.style.transition = TRANSITION_TIME / 1000 +'s';
            elem.classList.remove('hidetoright');
            }, 100);
    }

    window.addEventListener('load', function(e){
        $('.preloader').classList.add('css-hide');
        stepAnimations('show', getItemsCollection( animationSteps.step1 ) );
    });


    //Allow to go next position with showing button
    $('.quiz-steps').addEventListener('change', function(e){
        //if(e.target.nodeName === 'LABEL'){
            var currentStepRoot = e.target.closest('.quiz-step');
            if( ~currentStepRoot.className.indexOf('step-5') ){
                var checkedInputs = currentStepRoot.querySelectorAll('input:checked');
                if( checkedInputs.length < minTagsCount) return;
            }
            var goNextButton = currentStepRoot.querySelector('.quiz-next');
            ~goNextButton.className.indexOf('hidetoright') && showFromRight( goNextButton );
        //}
    });

    function setHeightToImageContainer(){
        var imageContainer  = $('.step_active .quiz__image');

        if(!imageContainer) return false;
        var parentHeight    = document.body.scrollHeight;
        var windowHeight    = window.screen.height;

        var heightToSet     = Math.max(parentHeight, windowHeight);
        if ( document.body.scrollWidth < 1280 && document.body.scrollWidth > MOBILE_VERSION_BREAKPOINT ) {
            imageContainer.style.height = heightToSet + 'px';
        }
        else{
            imageContainer.style.height = null;
        }
    }

     $('.step-4').addEventListener('change', function(e){
         if(e.target.nodeName === 'INPUT' && window.screen.width > MOBILE_VERSION_BREAKPOINT){
             window.scrollTo({
                 top: 99999,
                 behavior: "smooth"
             });
         }
     });
    setHeightToImageContainer();
    window.addEventListener('load', setHeightToImageContainer);
    window.addEventListener('resize', setHeightToImageContainer);

    document.body.addEventListener('click', function(e){
        if(window.screen.width > MOBILE_VERSION_BREAKPOINT) return;
        var nodeType = e.target.nodeName;
        if(nodeType === 'INPUT' || e.target.closest('label')) return;
        if( !$('.step_active .quiz-next').contains(e.target) && e.target.closest('.step_active') ){
            try{$('.step_active .quiz-next:not(.quiz-finish)').classList.add('hidetoright');}catch (e){}
        }
    });

    //========================== FINISH =====================================//
    function showAlert(msg){
        var placeholder = $('.quiz-next__finish');
        placeholder.innerText = msg;
        showFromRight(placeholder);
    }
    var finishButton = $('.js-finish');
    var isSumbitted = false;
    finishButton && finishButton.addEventListener('click', function(e){
        e.preventDefault();
        if(isSumbitted) return false;
        
        var phonenum = $('.phonenum-input').value;
        if(!phonenum){
            showAlert('Пожалуйста введите номер телефона чтобы закончить квиз');
            e.preventDefault();
            return;
        }
        //use split because it's faster and more clear
        var phoneCode = phonenum.split('(')[1].split(')')[0];
        var allowedCodes = ['039', '067', '068', '096', '097', '098', '050', '066', '095', '099', '063', '093', '094'];

        if( allowedCodes.indexOf(phoneCode) === -1 ){
            showAlert('Пожалуйста, введите валидный номер телефона');
            e.preventDefault();
            return;
        }
        showThanksPopap();
        submitData();
        isSumbitted = true;
        this.style.opacity = '0.6';
        this.disabled = true;
        this.style.cursor = 'default';
        e.preventDefault();
    });
});
