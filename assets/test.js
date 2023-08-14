function removeClass() {
    document.querySelectorAll('.varient.active').forEach(function (el) {
        el.classList.remove('active');
    });
}

function selectDropdownByVariant(checkText) {
    document.querySelectorAll('#dropdownSelections .dropdown-select:not(.hide) .input').forEach(function (el) {
        if (el.textContent.includes(checkText)) {
            el.querySelector('input').click();
        }
    });
}

// function showDescriptionForComboVariants() {
//     document.querySelectorAll('.description-wrapper .varient-description').forEach(function (el) {
//         if (el.classList.contains('Combo')) {
//             el.classList.remove('hide');
//         }
//     });
// }

document.querySelectorAll('.varient').forEach(function (el) {
    el.addEventListener('click', function () {
        removeClass();
        this.classList.add('active');
        var checkText = el.textContent;

        selectDropdownByVariant(checkText);

        // showDescriptionForComboVariants();
    });
});










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

// // Usage
addDynamicClickListener(
    '.smartrr-grp-input[value="sub"] label',                       //trigger
    '.varient-wrapper.data-smartrr-label-otp',                     //hide
    '.varient-wrapper.data-smartrr-label-sub',                     //show
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


 document.querySelector('.varient-wrapper.data-smartrr-label-otp .varient.Subscribe').click()

// otp combo click 
document.querySelector('.varient-wrapper.data-smartrr-label-sub .Subscribe').addEventListener('click',function(){
  document.querySelector('.smartrr-grp-input[value="sub"] label').click()
 document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.add('hide')
})


document.querySelector('.smartrr-otp.smartrr-grp-input[value="otp"]  label').addEventListener('click',function () {
   document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide') 
    document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide') 
})

document.querySelector('.smartrr-grp-input[value="sub"]  label').addEventListener('click',function () {
   document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.remove('hide') 
    document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.add('hide')
})






//    document.querySelector('.smartrr-grp-input[value="sub"]  label').click()
//  document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide')
//      document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide')
//         document.querySelector('.varient-wrapper.data-smartrr-label-otp>div :last-child').click()



// document.querySelector('.smartrr-grp-input[value="sub"]  label ').addEventListener('click',function () {
//     document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide')
//      document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide')
//         document.querySelector('.varient-wrapper.data-smartrr-label-otp>div :last-child').click()

// })




       
     














