
let pos, secretWord='test', txtLetter, divLetter, wordSpace, alphaPos, tempLetter, isIn, nbSameLetter, backgroundImage, winCheck, words, tempLevel

let game ={
  score: 0,
  replayButton: document.getElementById('replay'),
  levels: document.querySelectorAll(".level"),
  end: false,
  replay: function(){
    replayButton.addEventListener(
  'click',
  function (e){
    e.preventDefault() //ÇA MARCHE PAS !!!
    init()
  }
)
  }
   }

let promptWord = { //Definir le mot secret à efficher (nombre de cases, etc.)
  level1: document.querySelector('#level1'),
  level2: document.querySelector('#level2'),
  level3: document.querySelector('#level3'),
  tempLevel: tempLevel, //variable qui enregistre le choix du tableau
  words:[
    ['PIRATE', 'BATEAU', 'CANON', 'CALE', 'CAPE', 'MARIN', 'PERROQUET', 'PONT', 'POUPE', 'NAVIRE', 'CAPITAINE', 'TRÉSOR', 'RAME', 'BOTTES', 'CRANE', 'RAT', 'ILE','PORT','SABRE', 'JACK', 'PLUME'],
    ['GOUVERNAIL', 'ESCALE', 'PAVILLON', 'CORSAIRE', 'TRIBORD','AMARRER', 'NOEUD', 'VAISSEAU', 'CANONNER', 'BOUCANIER', 'CONTREBANDE', 'TRICORNE', 'RHUM', 'TONNEAU', 'TEMPETE', 'MONSTRE', 'VOLEUR', 'PIEUVRE'],
    ['MOUSAILLON', 'FLIBUSTIER', 'MARCHEPIED', 'SABORDER', 'ABORDAGE', 'BABORD', 'FREGATE', 'GALION', 'CHALOUPE', 'PALMIER', 'MARCHANDISE', 'PLANCHE', 'CABINE', 'CAPITAINE', 'CARAIBES', 'BERMUDE', 'PISTOLET','MEDAILLON','CANNIBALE']
  ],//tableau qui contient les different niveaux de difficulte
  pos : pos, //position du mot à trouver dans le tableau
  secretWord : secretWord, //mot à trouver
  looseLetter : 0, //mauvaise lettre //
  boxGame:[],
  txtLetter: txtLetter,// les li qui contiennent les lettres de l'alphabet
  divLetter: divLetter, //ul qui contient les li qui contiennent les lettre de l'alphabet
  wordSpace: wordSpace,
  alphabet: [], //tableau qui contient les lettres de l'alphabet
  alphaPos: alphaPos,//position de la letter dans l'alphabet
  tempLetter: tempLetter,
  isIn: isIn, //variable qui enregistre si a lettre sur laquelle on a cliqué est dans le mot secret
  nbSameLetter: nbSameLetter,// nb de lettres identiques ds un même mot
  backgroundImage: backgroundImage, //image de fond qui change selon les erreures
  chooseLevel: function(){
    //choisir la difficulté
    this.level1.addEventListener(
      "click",
      function(){
        this.tempLevel=0
      })
    this.level2.addEventListener(
      "click",
      function(){
        this.tempLevel=1
      })
    this.level3.addEventListener(
      "click",
      function(){
        this.tempLevel=2
      })
  },
  randomSecretWord: function(){ //génére un mot aleatoire selon les 3 niveaux de difficulté
    this.pos=Math.floor(Math.random()*this.words.length) //choix aléatoire dans words selon la position des elmts
    this.secretWord=this.words[this.tempLevel][this.pos]//le secret word est defini selon le niveau et un nombre aleatoire
    // ERREURE À CORRIGER !!!
  },
  createBox: function(divLetter){// créé les emplacements par lettre
    this.wordSpace=document.querySelector('.wordSpace')
    this.divLetter=document.createElement('ul') //on créé un ul .divLetter dans la div .wordSpace
    this.divLetter.className='divLetter'
    this.wordSpace.appendChild(this.divLetter)
    for (let i=0; i < this.secretWord.length; i++){
      this.boxGame.push(this.secretWord[i])//chacune des lettres du secretWord est poussée dans boxGame
      this.txtLetter=document.createElement('li') //on créé un li .txtLetter dans la ul .divLetter
      this.divLetter.appendChild(this.txtLetter)
      this.txtLetter.className= 'txtLetter'
      this.txtLetter.setAttribute('data-letter',this.boxGame[i] )
      this.txtLetter.innerHTML=this.boxGame[i]
    }
  },
  runAlphabet: function(){//parcours l'alphabet pour vérifier si la lettre cliquée est présente dans le mot secret
    for (let i=0; i < this.alphabet.length; i++){ //on parcourt alphabet
      console.log(this.alphabet[i].innerHTML)
      this.alphaPos = this.alphabet[i]
      this.alphaPos.addEventListener( //pour chacune des lettres de l'alphabet (alphaPos)
        "click", // di on clique sur la case
        function(){
          this.tempLetter = this.alphabet[i].innerHTML
          this.isIn=this.secretWord.lastIndexOf(this.tempLetter)//si la lettre sur laquelle on a cliqué (lastIndexOf) est dans le mot (secretWord)
          this.nbSameLetter = document.querySelectorAll('[data-letter='+this.tempLetter+']')
          if(game.isIn!=-1){ //si isIn est vrai alors
            for(let i=0; i<this.nbSameLetter.length; i++)//vérifie si la même lettre est présente plusieurs fois dans le même mot
            {
              this.nbSameLetter[i].classList.add('display')// si la lettre est présente, elle apparaît
            }
          }
          else{
            this.looseLetter++ //le compteur looseLetter prend la valeur + 1
            console.log(this.looseLetter);
            this.backgroundImage=document.querySelector('gameSpace')// selon le nombre d'erreurs, affiche le niveau de destruction du bateau en background-image
            if(this.looseLetter==1){
              this.backgroundImage.style.background="url(../images/fondAccueil2.jpg)"
            }
            else if(this.looseLetter==2){
              this.backgroundImage.style.background="url(../images/fondAccueil3.jpg)"
            }
            else if(this.looseLetter==3){
              this.backgroundImage.style.background="url(../images/fondAccueil4.jpg)"
            }
            else if(this.looseLetter==4){
              this.backgroundImage.style.background="url(../images/fondAccueil5.jpg)"
            }
            else if(this.looseLetter==5){
              this.backgroundImage.style.background="url(../images/fondAccueil6.jpg5)"
            }
            else if(this.looseLetter==6){
              this.backgroundImage.style.background="url(../images/fondAccueil7.jpg)"
            }
            else if(this.looseLetter==7){
              this.backgroundImage.style.background="url(../images/fondAccueil8.jpg)"
            }
            else if(this.looseLetter==8){
              this.backgroundImage.style.background="url(../images/fondAccueil9.jpg)"
            }
            else{
              this.backgroundImage.style.background="url(../images/fondAccueil10.jpg)"
            }
          }
      })
    }
  }
}

promptWord.chooseLevel()
promptWord.randomSecretWord()
promptWord.createBox()
promptWord.runAlphabet()


// À faire Jeudi :
// - fonction WIN (toutes les cases des mots sont en display)
// - afficher image si victoire
// - créer une fonction pour rafraichir la page
// - héberger le lien du site (important)
// - rajouter de la musique en fond du jeu (https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1921854-laudio-et-la-video)
// - si on a le temps, essayer de rajouter des indices pendant la progression du jeu et/ou des animations (sur logo, yeux des personnages, etc.) mais seulement si on a le temps
