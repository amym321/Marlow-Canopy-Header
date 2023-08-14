

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
    '.smartrr-grp-input[value="sub"] label',
    '.varient-wrapper.data-smartrr-label-sub',
    '.varient-wrapper.data-smartrr-label-otp',
    '.varient-wrapper.data-smartrr-label-otp>div :last-child'
);


addDynamicClickListener(
    '.smartrr-otp.smartrr-grp-input label',
    '.varient-wrapper.data-smartrr-label-sub',
    '.varient-wrapper.data-smartrr-label-otp',
    '.varient-wrapper.data-smartrr-label-sub>div :first-child'
);




 document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.add('hide')

document.querySelector('.smartrr-otp.smartrr-grp-input label ').addEventListener('click',function () {
    document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.remove('hide')
     document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.add('hide')

          document.querySelector('.varient-wrapper.data-smartrr-label-sub>div :first-child').click()

})

   document.querySelector('.smartrr-grp-input[value="sub"]  label').click()
 document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide')
     document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide')
        document.querySelector('.varient-wrapper.data-smartrr-label-otp>div :last-child').click()



document.querySelector('.smartrr-grp-input[value="sub"]  label ').addEventListener('click',function () {
    document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide')
     document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide')
        document.querySelector('.varient-wrapper.data-smartrr-label-otp>div :last-child').click()

})

document.querySelector('.Subscribe').addEventListener('click',function(){
   document.querySelector('.smartrr-grp-input[value="sub"]  label').click()

})















