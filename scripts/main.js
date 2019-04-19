let pos, secretWord, txtLetter, divLetter, wordSpace, alphaPos, tempLetter, isIn, nbSameLetter, backgroundImage, winCheck, words, tempLevel, winningLetter

let game ={
  score: 0,
  replayButton: document.querySelector('button'),
  }

let promptWord = { //define secretword
  level1: document.querySelector('.level1'),
  level2: document.querySelector('.level2'),
  level3: document.querySelector('.level3'),
  tempLevel: 0, //save choice of array
  choosenLevel:[],
  words:[
    ['PIRATE', 'BATEAU', 'CANON', 'CALE', 'CAPE', 'MARIN', 'PERROQUET', 'PONT', 'POUPE', 'NAVIRE', 'CAPITAINE', 'TRESOR', 'RAME', 'BOTTES', 'CRANE', 'RAT', 'ILE','PORT','SABRE', 'JACK', 'PLUME'],
    ['GOUVERNAIL', 'ESCALE', 'PAVILLON', 'CORSAIRE', 'TRIBORD','AMARRER', 'NOEUD', 'VAISSEAU', 'CANONNER', 'BOUCANIER', 'CONTREBANDE', 'TRICORNE', 'RHUM', 'TONNEAU', 'TEMPETE', 'MONSTRE', 'VOLEUR', 'PIEUVRE'],
    ['MOUSAILLON', 'FLIBUSTIER', 'MARCHEPIED', 'SABORDER', 'ABORDAGE', 'BABORD', 'FREGATE', 'GALION', 'CHALOUPE', 'PALMIER', 'MARCHANDISE', 'PLANCHE', 'CABINE', 'CAPITAINE', 'CARAIBES', 'BERMUDE', 'PISTOLET','MEDAILLON','CANNIBALE']
  ],//contains difficulty levels
  pos : pos, //position of secret world in words
  secretWord : secretWord,
  looseLetter : 0,
  boxGame:[],
  txtLetter: txtLetter,//li which contains alhabet letters
  divLetter: divLetter, //ul which contains li which contains letter
  wordSpace: wordSpace,
  alphabet: [], //alphabet array
  alphaPos: alphaPos,//letter position in alphabet
  tempLetter: tempLetter,
  isIn: isIn, //save if clicked letter is in sacretWord
  nbSameLetter: nbSameLetter,// nb of same letter in secretWord
  backgroundImage: document.querySelector('.gameSpace'), //background-image which change if wrong letter
  hint: document.querySelector('.hint'),
  winningLetter: 0,
  goodLetter: document.querySelectorAll('.display'),
  chooseLevel: function(){ //--> choose difficulty
    this.level1.addEventListener( // Given level's choice, give one of words array
      'click',
      function(){
        promptWord.tempLevel=0
        console.log(promptWord.tempLevel)
      })
    this.level2.addEventListener(
      'click',
      function(){
        promptWord.tempLevel=1
        console.log(promptWord.tempLevel)
      })
    this.level3.addEventListener(
      'click',
      function(){
        promptWord.tempLevel=2
        console.log(promptWord.tempLevel)
      })
  },
  randomSecretWord: function(){ //give a random secret word from one of the three arrays
    this.pos=Math.floor(Math.random()*this.words[this.tempLevel].length)
    console.log(this.pos) //random choice in words
    this.secretWord=promptWord.words[this.tempLevel][this.pos]
    console.log(this.secretWord)//secret word define with level(tempLevel) and random number(pos)
  },
  createBox: function(divLetter){// create a box for each letter
    this.wordSpace=document.querySelector('.wordSpace')
    this.divLetter=document.createElement('ul') //create ul .divLetter in div .wordSpace
    this.divLetter.className='divLetter'
    this.wordSpace.appendChild(this.divLetter)
    for (let i=0; i < this.secretWord.length; i++){
      this.boxGame.push(this.secretWord[i])//Push each letter of secretWord in boxGame
      this.txtLetter=document.createElement('li') //Create li .txtLetter in ul .divLetter
      this.divLetter.appendChild(this.txtLetter)
      this.txtLetter.className= 'txtLetter'
      this.txtLetter.setAttribute('data-letter',this.boxGame[i] )//give attribute to li given its position in BoxGame
      this.txtLetter.innerHTML=this.boxGame[i]
    }
  },
  runAlphabet: function(){//run the alphabet to check if ckicked letter is in secret word
    this.alphabet= document.querySelectorAll('.alphaLetter')//get the alphabet's letters in li and put the in alphabet: []
    console.log(this.alphabet)
    for (let i=0; i < this.alphabet.length; i++){ //run alphabet
      console.log(this.alphabet[i])
      this.alphaPos = this.alphabet[i]
      console.log(this.alphaPos)
      this.alphaPos.addEventListener( //for each letter of alphabet (alphaPos)
        "click", // if click on the case
        function(){
          promptWord.tempLetter = promptWord.alphabet[i].innerHTML
          promptWord.isIn=promptWord.secretWord.lastIndexOf(promptWord.tempLetter)//if clicked letter(lastIndexOf) is in (secretWord)
          promptWord.nbSameLetter = document.querySelectorAll('[data-letter='+promptWord.tempLetter+']')//get alphabet's letters wich attribute is clicked letter
          if(promptWord.isIn!=-1){ //if isIn is true
            for(let i=0; i<promptWord.nbSameLetter.length; i++){// check if the same letter is severous time in the same word
              promptWord.nbSameLetter[i].classList.add('display')// if it is, display letter
              promptWord.winningLetter++
            }
            if(promptWord.winningLetter+1==promptWord.secretWord.length+1){
              console.log(promptWord.nbSameLetter+1)// if number of display letters is aqual to number of letter in secret word
              console.log(promptWord.secretWord.length+1)
              console.log(promptWord.nbSameLetter+1==promptWord.secretWord.length+1)
              promptWord.backgroundImage.style.background="url(images/winner.png)"// display victory image
              promptWord.backgroundImage.style.backgroundSize="100%"
              promptWord.divLetter.style.display="none"
              promptWord.hint.style.display="none"
            }
          }
          else{
            promptWord.looseLetter++ //looseLetter increase
            console.log(promptWord.looseLetter);
            if(promptWord.looseLetter==1){// given the error number, given level of boat's destruction in background-image
              promptWord.backgroundImage.style.background="url(images/fondAccueil2.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"
            }
            else if(promptWord.looseLetter==2){
              promptWord.backgroundImage.style.background="url(images/fondAccueil3.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"
            }
            else if(promptWord.looseLetter==3){
              promptWord.backgroundImage.style.background="url(images/fondAccueil4.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"
              promptWord.hint.style.display="block"
            }
            else if(promptWord.looseLetter==4){
              promptWord.backgroundImage.style.background="url(images/fondAccueil5.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"

            }
            else if(promptWord.looseLetter==5){
              promptWord.backgroundImage.style.background="url(images/fondAccueil6.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"

            }
            else if(promptWord.looseLetter==6){
              promptWord.backgroundImage.style.background="url(images/fondAccueil7.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"

            }
            else if(promptWord.looseLetter==7){
              promptWord.backgroundImage.style.background="url(images/fondAccueil8.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"

            }
            else if(promptWord.looseLetter==8){
              promptWord.backgroundImage.style.background="url(images/fondAccueil9.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"

            }
            else{
              promptWord.backgroundImage.style.background="url(images/fondAccueil10.jpg)"
              promptWord.backgroundImage.style.backgroundSize="100%"
            }
          }
        }
      )
    }
  },
}

promptWord.chooseLevel()

//start function on click
let playGame=document.querySelector('.replay')

playGame.addEventListener(
  'click',
  promptWord.randomSecretWord()
  )

promptWord.createBox()
promptWord.runAlphabet()


// À faire Jeudi :
// - fonction WIN (toutes les cases des mots sont en display) OK (normalement)
// - afficher image si victoire --> OK (normalement)
// - créer une fonction pour rafraichir la page
// - héberger le lien du site (important) -- FAIT
// - rajouter de la musique en fond du jeu (https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1921854-laudio-et-la-video) - FAIT
// - si on a le temps, essayer de rajouter des indices pendant la progression du jeu et/ou des animations (sur logo, yeux des personnages, etc.) mais seulement si on a le temps
