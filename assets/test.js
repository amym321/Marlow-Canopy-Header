function removeClass(){
document.querySelectorAll('.varient').forEach(function (el) {
el.classList.remove('active')
})
}



document.querySelectorAll('.varient').forEach(function (el) {

    el.addEventListener('click',function(){
      removeClass()
     this.classList.add('active')
         var checkText=el.textContent

          document.querySelectorAll('#dropdownSelections  .dropdown-select .input').forEach(function (el) {
          if(el.textContent.indexOf(checkText)>-1){
                console.log(el)
                 el.querySelector('input').click()
            }
    })      
    })
  })

 // document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.add('hide')

document.querySelector('.smartrr-otp.smartrr-grp-input label ').addEventListener('click',function () {
    document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.remove('hide')
     document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.add('hide')
})

document.querySelector('.smartrr-grp-input[value="sub"]  label ').addEventListener('click',function () {
    document.querySelector('.varient-wrapper.data-smartrr-label-sub').classList.add('hide')
     document.querySelector('.varient-wrapper.data-smartrr-label-otp').classList.remove('hide')
})


     