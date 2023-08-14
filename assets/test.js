

function removeClass(){
document.querySelectorAll('.varient').forEach(function (el) {
el.classList.remove('active')
})
}

function addClass(){
document.querySelectorAll('.description-wrapper .varient-description').forEach(function (el) {
el.classList.add('hide')
})
}


document.querySelectorAll('.varient').forEach(function (el) {

  el.addEventListener('click', function () {
    removeClass()
    this.classList.add('active')
    var checkText = el.textContent

    document.querySelectorAll('#dropdownSelections  .dropdown-select:not(.hide) .input').forEach(function (el) {
      if (el.textContent.indexOf(checkText) > -1) {
        console.log(el)
        el.querySelector('input').click()
      }
    })

    
    // description 
    document.querySelectorAll('.description-wrapper .varient-description').forEach(function (el) {
      if (el.classList.contains('Combo')) {
        addClass()
        el.classList.remove('hide')

      }
    })
  })
})


// on load combo clicked 
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.data-smartrr-label-sub .varient.Subscribe').click()
})





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
addDynamicClickListener(
    '.smartrr-grp-input[value="sub"] label',                       //trigger
    '.varient-wrapper.data-smartrr-label-sub',                     //hide
    '.varient-wrapper.data-smartrr-label-otp',                     //show
    '.varient-wrapper.data-smartrr-label-otp>div :last-child'      // click 
);


addDynamicClickListener(
    '.smartrr-otp.smartrr-grp-input label',
    '.varient-wrapper.data-smartrr-label-sub',
    '.varient-wrapper.data-smartrr-label-otp',
    '.varient-wrapper.data-smartrr-label-sub>div :first-child'
);

addDynamicClickListener(
    '.smartrr-grp-input[value="sub"]  label',
    '.varient-wrapper.data-smartrr-label-sub',
    '.varient-wrapper.data-smartrr-label-otp',
    '.varient-wrapper.data-smartrr-label-sub>div :first-child'
);




//    document.querySelector('.smartrr-grp-input[value="sub"]  label').click()
//  document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide')
//      document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide')
//         document.querySelector('.varient-wrapper.data-smartrr-label-otp>div :last-child').click()



// document.querySelector('.smartrr-grp-input[value="sub"]  label ').addEventListener('click',function () {
//     document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide')
//      document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide')
//         document.querySelector('.varient-wrapper.data-smartrr-label-otp>div :last-child').click()

// })

document.querySelector('.Subscribe').addEventListener('click',function(){
   document.querySelector('.smartrr-grp-input[value="sub"]  label').click()

})















