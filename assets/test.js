document.querySelectorAll('.varient').forEach(function (el) {

    el.addEventListener('click',function(){
         var checkText=el.textContent

          document.querySelectorAll('#dropdownSelections  .dropdown-select[data-smartrr-choose-sub] input').forEach(function (el) {
          if(el.textContent.indexOf(checkText)>-1){
                console.log(el)
                 el.querySelector('input').click()
            }
    })      
    })
  })
     