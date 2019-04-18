const maxWidth = 830
let step = 0
let bateauNav = document.querySelector('.bateauNav')

    let move = setInterval(
        function(){

          <!-- step = step-1 -->
          <!-- bateauPos.style.right = step + 'px' -->
          if (step<maxWidth) {
            step = step + 1
            bateauNav.style.left = step + 'px'
          }
          },
          50
      )

// let move, step, bateauPos
//
// let boatAnimation={
//   maxWidth: 830,
//   step: 0,
//   bateauaAv: document.querySelector('.bateauNav'),
//   move: move,
//   step: step,
//   bateauPos: bateauPos,
//   movingBoat: function(){
//     this.move=setInterval(
//       function(){
//
//         <!-- this.step = this.step-1 -->
//         <!-- this.bateauPos.style.right = this.step + 'px' -->
//         if (this.step<this.maxWidth) {
//           this.step = this.step + 1
//           this.bateauNav.style.left = this.step + 'px'
//         }
//         },
//         50
//     )
//   }
// }
//
// boatAnimation.movingBoat()
