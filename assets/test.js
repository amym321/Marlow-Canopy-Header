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
     