document.querySelectorAll('.varient').forEach(function (el) {

    el.addEventListener('click',function(){
         var checkText=el.textContent

          document.querySelectorAll('.variant-select [data-variant-id] .dropbtn').forEach(function (el) {
          if(el.textContent.indexOf(checkText)>-1){
                console.log(el)
                 el.click()
            }
    })
    })
  })
     