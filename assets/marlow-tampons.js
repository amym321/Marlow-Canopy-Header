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
    document.querySelectorAll('.varient').forEach(function (el) {
      el.classList.remove('active');
    });
  }


  // var varientText;
  document.querySelectorAll('.varient').forEach(function (el) {
    el.addEventListener('click', function () {
      removeClass();
      this.classList.add('active');        
    });
  });


  // by default subscribe click 

  setTimeout(() => {
    document.querySelector('.smartrr-grp-input[value="sub"] label').click()
    document.querySelector('.data-smartrr-label-sub .varient.Subscribe ').click()
  }, 800);






 

  live('.scroll-link', 'click', function () {
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
  scrollLink.addEventListener('click', function (event) {
    // Scroll to the target element, stopping a bit before the top
    targetElement.scrollIntoView({
      behavior: 'smooth', // Use smooth scrolling
      inline: 'nearest' // Keep the target element as close to the vertical center as possible
    });

  });


  live('.smartrr-otp.smartrr-grp-input label','click',function(){
    document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('bm-one-time')
  })

   live('.smartrr-grp-input[value="sub"] label','click',function(){
    document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.remove('bm-one-time')
  })

   

  


  live('.smartrr-otp.smartrr-grp-input label', 'click', function () {
    document.querySelector('.bm-description-wrapper.otp').classList.remove('hide')
    document.querySelector('.bm-description-wrapper.sub').classList.add('hide')
  });

  live('.smartrr-grp-input[value="sub"] label,.Subscribe', 'click', function () {
    document.querySelector('.bm-description-wrapper.otp').classList.add('hide')
    document.querySelector('.bm-description-wrapper.sub').classList.remove('hide')
  });


























  //   live('.varient-wrapper.bm-one-time .varient','click',function(el){

  //        console.log(el.getAttribute('data-id'))
  //       document.querySelectorAll('.bm-description-wrapper.sub .varient-description').forEach(function (el) {
  //       if(el.classList.contains(''))
  //     })
  // })





    live('.varient-wrapper .varient','click',function(el){

console.log(el.getAttribut('data-id'))
      
  })







  


}
// end targetting 