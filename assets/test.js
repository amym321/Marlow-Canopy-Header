// targetting 




{% if window.location.pathname.includes('bundle-save') or window.location.pathname.includes('marlow-tampons')  %}

document.querySelector('body').classList.add('bundle-marlow')

  {% endif %}

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


// remove class function 
function removeClassBySelectors(className, selectors) {
  const elements = document.querySelectorAll(selectors);
  
  elements.forEach(element => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  });
}


function removeClass() {
    document.querySelectorAll('.varient').forEach(function (el) {
        el.classList.remove('active');
    });
}

function addhideClass() {
    document.querySelectorAll('.description-wrapper .varient-description').forEach(function (el) {
        el.classList.add('hide');
    });
}

function selectDropdownByVariant(checkText) {
    document.querySelectorAll('#dropdownSelections .dropdown-select:not(.hide) .input').forEach(function (el) {
        if (el.textContent.includes(checkText)) {
            el.querySelector('input').click();
        }
    });
}


 var varientText; 
document.querySelectorAll('.varient').forEach(function (el) {
    el.addEventListener('click', function () {
        removeClass();
        this.classList.add('active');
        var checkText = el.textContent;
        selectDropdownByVariant(checkText);
      
      // description text 
        varientText = this.textContent; 
       document.querySelectorAll('.varient-description.' + varientText).forEach(function(el) { 
         addhideClass()
         el.classList.remove('hide')  
         document.querySelector('.otp p span').innerHTML=varientText;
      });      
    });
});


// by default subscribe click 

setTimeout(() => {
  document.querySelector('.smartrr-grp-input[value="sub"] label').click()
  document.querySelector('.data-smartrr-label-sub .varient.Subscribe ').click()
}, 800);



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
        triggerElement.addEventListener('click', function () {
            hideElement.classList.add('hide');
            showElement.classList.remove('hide');
            clickElement.click();
        });
    }
}

// Usage

// subscribe click 
addDynamicClickListener(
    '.smartrr-grp-input[value="sub"] label',                       //trigger
    '.varient-wrapper.data-smartrr-label-otp',                     //hide
    '.varient-wrapper.data-smartrr-label-sub',                     //show
    '.varient-wrapper.data-smartrr-label-sub>div :last-child'      // click 
);

 // OTP CLICK 
addDynamicClickListener(  
    '.smartrr-otp.smartrr-grp-input label',
    '.varient-wrapper.data-smartrr-label-sub',
    '.varient-wrapper.data-smartrr-label-otp',
    '.varient-wrapper.data-smartrr-label-otp  div[data-id="4"]'
);



// otp combo click 
document.querySelector('.varient-wrapper.data-smartrr-label-otp .varient.Subscribe ').addEventListener('click',function(){
  document.querySelector('.smartrr-grp-input[value="sub"] label').click()
 document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.add('hide')  
});

// for varient image 
document.querySelectorAll('.smartrr-purchase-options div[data-smartrr-selling-plan-groups] > div label').forEach(function (el) {
  el.addEventListener('click', function () {    
    removeClassBySelectors('color-active', '.smartrr-purchase-options div[data-smartrr-selling-plan-groups] > div');
    this.closest('.smartrr-grp-input').classList.add('color-active');
  });
});




// Find the element to scroll to
var targetElement = document.querySelector('.quantity');

// Find the element that triggers the scroll
var scrollLink = document.querySelector('.scroll-link');

// Add a click event listener to the scrollLink
scrollLink.addEventListener('click', function (event) {
  // Scroll to the target element, stopping a bit before the top
  targetElement.scrollIntoView({
    behavior: 'smooth', // Use smooth scrolling
    inline: 'nearest'  // Keep the target element as close to the vertical center as possible
  });
});




 live('.smartrr-otp.smartrr-grp-input','click', function(){
   document.querySelector('.bm-description-wrapper.otp').classList.remove('hide')
    document.querySelector('.bm-description-wrapper.sub').classList.add('hide')
 });

live('.smartrr-grp-input[value="sub"],.Subscribe','click', function(){
   document.querySelector('.bm-description-wrapper.otp').classList.add('hide')
    document.querySelector('.bm-description-wrapper.sub').classList.remove('hide')
 });










       
     














