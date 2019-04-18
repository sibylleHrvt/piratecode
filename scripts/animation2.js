const maxWidth = 1400
let step = 0
let bateauNav = document.querySelector('.bateauNav')

    let move = setInterval(
        function(){

          <!-- step = step-1 -->
          <!-- bateauPos.style.right = step + 'px' -->
          if (step<maxWidth) {
            step = step +1
            bateauNav.style.left = step + 'px'
          }
          },
          50
      )
