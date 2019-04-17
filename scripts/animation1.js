const maxWidth = -2000
let pos = 0
let bateauPos = document.querySelector('.bateauNav')

let move = setInterval(
      function(){
        pos = pos-1
        bateauPos.style.right = pos + 'px'
          console.log(pos)
          console.log(maxWidth)
        if (pos<maxWidth) {
          pos = 300
          bateauPos.style.right = pos + 'px'
        }
        },
        10
  )
