// tagetting set 
var urlCheck = window.location.pathname;
if (urlCheck.includes('bundle-save') || urlCheck.includes('marlow-tampons')) {

    document.querySelector('body').classList.add('bundle-marlow');



    function live(selector, event, callback, context) {
        /****Helper Functions****/
        // helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent('on' + type, handler);
            else el.addEventListener(type, handler);
        }
        // live binding helper using matchesSelector
        function live(selector, event, callback, context) {
            addEvent(context || document, event, (e) => {
                let found,
                    el = e.target || e.srcElement;
                while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                if (found) callback.call(el, e);
            });
        }
        live(selector, event, callback, context);
    }

    function removeClass() {
        document.querySelectorAll('.varient').forEach(function(el) {
            el.classList.remove('active');
        });
    }

  // remove class function 
  function removeClassBySelectors(className, selectors) {
    const elements = document.querySelectorAll(selectors);

    elements.forEach(element => {
      if (element.classList.contains(className)) {
        element.classList.remove(className);
      }
    });
  }



    function addhideClass() {
        document.querySelectorAll('.description-wrapper .varient-description').forEach(function(el) {
            el.classList.add('hide');
        });
    }




    // triggerSelector: The selector for the element that triggers the click event.
    // hideSelector: The selector for the element to be hidden.
    // showSelector: The selector for the element to be shown.
    // clickSelector: The selector for the element to be clicked.


    function addDynamicClickListener(triggerSelector, hideSelector, showSelector, clickSelector) {
        const triggerElement = document.querySelector(triggerSelector);
        const hideElement = document.querySelector(hideSelector);
        const showElement = document.querySelector(showSelector);
        const clickElement = document.querySelector(clickSelector);

        if (triggerElement && hideElement && showElement && clickElement) {
            triggerElement.addEventListener('click', function() {
                hideElement.classList.add('hide');
                showElement.classList.remove('hide');
                clickElement.click();
            });
        }
    }

    // Usage

    // subscribe click 
    addDynamicClickListener(
        '.smartrr-grp-input[value="sub"] label', //trigger
        '.varient-wrapper.data-smartrr-label-otp', //hide
        '.varient-wrapper.data-smartrr-label-sub', //show
        '.varient-wrapper.data-smartrr-label-sub>div :last-child' // click 
    );

    // OTP CLICK 
    addDynamicClickListener(
        '.smartrr-otp.smartrr-grp-input label',
        '.varient-wrapper.data-smartrr-label-sub',
        '.varient-wrapper.data-smartrr-label-otp',
        '.varient-wrapper.data-smartrr-label-otp  div[data-id="4"]'
    );

    // var varientText;
    document.querySelectorAll('.varient').forEach(function(el) {
        el.addEventListener('click', function() {
            removeClass();
            this.classList.add('active');
        });
    });




    function addClickListener(varientSelector, dropbtnSelector) {
        document.querySelectorAll(varientSelector).forEach(function(el) {
            el.addEventListener('click', function() {
                var checkClass = this.getAttribute('class').split(' ');

                document.querySelectorAll(dropbtnSelector).forEach(function(dropbtn) {
                    checkClass.forEach(function(className) {
                        if (dropbtn.textContent.includes(className)) {

                            console.log(dropbtn.closest('.input'))
                            dropbtn.closest('.input').click();
                        }
                    });
                });
            });
        });
    }


    // by default subscribe click 

    setTimeout(() => {
        document.querySelector('.smartrr-otp.smartrr-grp-input').click()
        document.querySelector('.data-smartrr-label-sub .varient.Light').click()

    }, 800);

    setTimeout(() => {
        // For .varient-wrapper.subscription .varient elements
        addClickListener('.varient-wrapper.bm-one-time .varient', '#dropdownSelections .dropdown-select:not(.hide) label > div');
    }, 700);



    // For .varient-wrapper.bm-one-time .varient elements
    addClickListener('.varient-wrapper .varient', '#dropdownSelections .dropdown-select:not(.hide) label > div');


    live('.scroll-link', 'click', function() {
        if (document.querySelector('#station-tabs-tab_ht-i1-t11')) {
            setTimeout(() => {
                document.querySelector('#station-tabs-tab_ht-i1-t11').click()
            }, 500);

        }

        if (document.querySelector('#station-tabs-tab_ht-i1-t5')) {
            setTimeout(() => {
                document.querySelector('#station-tabs-tab_ht-i1-t5').click()
            }, 500);

        }

    })


    // Find the element to scroll to
    var targetElement = document.querySelector('.quantity');

    // Find the element that triggers the scroll
    var scrollLink = document.querySelector('.scroll-link');

    // Add a click event listener to the scrollLink
    scrollLink.addEventListener('click', function(event) {
        // Scroll to the target element, stopping a bit before the top
        targetElement.scrollIntoView({
            behavior: 'smooth', // Use smooth scrolling
            inline: 'nearest' // Keep the target element as close to the vertical center as possible
        });

    });


    live('.smartrr-otp.smartrr-grp-input label', 'click', function() {
        document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('bm-one-time')
        document.querySelector('.bm-one-time .varient.Light').click()
        document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.remove('subscription')
    })

    live('.smartrr-grp-input[value="sub"] label', 'click', function() {
        document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.remove('bm-one-time')
        document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('subscription')
    })




    live('.varient-wrapper .varient', 'click', function(el) {
        var getVarient = this.getAttribute('data-id')
        document.querySelectorAll('.bm-description-wrapper.sub .varient-description').forEach(function(el) {
            if (el.getAttribute('data-id') == getVarient) {
                addhideClass()
                el.classList.remove('hide')
            }
        })
    })


    live('.bm-one-time .varient ', 'click', function(el) {
        var getVarient = this.getAttribute('data-id')
        document.querySelectorAll('.bm-description-wrapper.otp .varient-description').forEach(function(el) {
            if (el.getAttribute('data-id') == getVarient) {
                addhideClass()
                el.classList.remove('hide')
            }
        })
    })


    live('.smartrr-otp.smartrr-grp-input label', 'click', function() {
        document.querySelector('.bm-description-wrapper.sub').classList.add('hide')
        document.querySelector('.bm-description-wrapper.otp ').classList.remove('hide')
    })

    live('.smartrr-grp-input[value="sub"] label', 'click', function() {
        document.querySelector('.bm-description-wrapper.sub').classList.remove('hide')
        document.querySelector('.bm-description-wrapper.otp ').classList.add('hide')
        document.querySelector('.varient-wrapper.data-smartrr-label-sub .Combo').click()
    })


    live('.bm-one-time .Combo', 'click', function() {
        document.querySelector('.smartrr-grp-input[value="sub"] label').click()
    });


    // for varient image 
  document.querySelectorAll('.smartrr-purchase-options div[data-smartrr-selling-plan-groups] > div label').forEach(function (el) {
    el.addEventListener('click', function () {
      removeClassBySelectors('color-active', '.smartrr-purchase-options div[data-smartrr-selling-plan-groups] > div');
      this.closest('.smartrr-grp-input').classList.add('color-active');
    });
  });



}
// end targetting 