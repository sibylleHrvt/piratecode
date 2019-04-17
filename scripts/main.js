let game ={
  score: 0,
  // replay: function(){
  //   game.winCheck=document.getElementsByClassName('.txtLetter')
  //   if(game.winCheck.classList.contains('display')||game.looseLetter=10){
  //   end=true
  //   console.log(nbSameLetter)
  //  }
  // },
}

let pos, secretWord, txtLetter, divLetter, wordSpace, alphabet, alphaPos, tempLetter, isIn, nbSameLetter, backgroundImage, winCheck

let promptWord = {
  words : ['PIRATE', 'BATEAU', 'CANON'],
  pos : pos,
  secretWord : secretWord,
  looseLetter : 0,
  end: false,
  boxGame:[],
  txtLetter: txtLetter,
  divLetter: divLetter,
  wordSpace: wordSpace,
  alphabet: alphabet,
  alphaPos: alphaPos,
  tempLetter: tempLetter,
  isIn: isIn,
  nbSameLetter: nbSameLetter,
  backgroundImage: backgroundImage,
  winCheck: winCheck,
  randomSecretWord: function(){
    this.pos=Math.floor(Math.random()*this.words.length) //choix aléatoire dans words selon la position des elmts
    this.secretWord=this.words[pos]
  },
  createBox: function(divLetter){
    this.wordSpace=document.getElementsByClassName('wordSpace')
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
  runAlphabet: function(){
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
            for(let i=0; i<this.nbSameLetter.length; i++)
            {
              this.nbSameLetter[i].classList.add('display')
            }
          }
          else{
            this.looseLetter++ //le compteur looseLetter prend la valeur + 1
            console.log(this.looseLetter);
            this.backgroundImage=document.getElementsByClassName('gameSpace')
            this.backgroundImage.style.background="url(../images/fondAccueil)"
          }

      })
    }
  }
}


promptWord.randomSecretWord()
promptWord.createBox()
promptWord.runAlphabet()










/*

// Fonction quand on clique sur une des lettres

//pour chaque lettre du mot, créer un ediv qui contient un formulaire
//si la lettre de l'alphabet est dans le mot, alors on affiche la lettre

var motSecret;

                var now=new Date();            // Date d'aujourd'hui
                var tableauMot=new Array();    // Le tableau qui contient les lettres du mot à trouver
                var mots=new Array();        // Le tableau qui contient tous les mots possibles

                var tailleMot;                // Le nombre de lettres du mot à trouver
                var coupsManques=0;            // Le nombre de lettres fausses essayées
                var lettresTrouvees=0;        // Le nombre de lettres trouvées
                var fini=false;                // true si le jeu est terminé

                mots[0]="TITANESQUE";
                mots[1]="ANABELLE";
                mots[2]="POMPIER";
                mots[3]="OBELISQUE";
                mots[4]="PLACARD";
                mots[5]="RADIATEUR";
                mots[6]="DEODORANT";
                mots[7]="CAMION";
                mots[8]="HORLOGE";
                mots[9]="MARGUERITE";
                mots[10]="ELEPHANT";
                mots[11]="IGLOO";
                mots[12]="NAVIRE";

                // On prend un mot au hasard en fonction de la seconde en cours
                motSecret=mots[now.getSeconds() % mots.length];
                tailleMot=motSecret.length;

                // Permet de changer la couleur des touches du clavier
                function changeCouleur(element,couleur){
                    element.style.backgroundColor=couleur;
                }

                // Gère tous les traitements à faire lorsqu'on appuie sur une touche
                function proposer(element){

                    // Si la couleur de fond est lightgreen, c'est qu'on a déjà essayé - on quitte la fonction
                    if(element.style.backgroundColor=="lightGreen" ||fini) return;

                    // On récupère la lettre du clavier et on met la touche en lightgreen (pour signaler qu'elle est cliquée)
                    var lettre=element.innerHTML;
                    changeCouleur(element,"lightGreen");

                    // On met la variable trouve à false;
                    var trouve=false;

                    // On parcours chaque lettre du mot, on cherche si on trouve la lettre séléectionnée au clavier
                    for(var i=0; i<tailleMot; i++) {

                        // Si c'est le cas :
                        if(tableauMot[i].innerHTML==lettre) {
                            tableauMot[i].style.visibility='visible';    // On affiche la lettre
                            trouve=true;
                            lettresTrouvees++;
                        }

                    }

                    // Si la lettre n'est pas présente, trouvé vaut toujours false :
                    if(!trouve){
                        coupsManques++;
                        document.images['pendu'].src="images/pendu_"+coupsManques+".jpg"; // On change l'image du pendu

                        // Si on a raté 9 fois :
                        if(coupsManques==9){
                            alert("Vous avez perdu !");
                            for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
                            fini=true;
                            // on affiche le mot, on fini le jeu
                        }
                    }
                    if(lettresTrouvees==tailleMot){
                        alert("Bravo ! Vous avez découvert le mot secret !");
                        fini=true;
                    }
                }
*/
