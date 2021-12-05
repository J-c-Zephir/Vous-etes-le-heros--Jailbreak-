//Consignes : https://smnarnold.com/projets/vous-etes-le-heros

//Déclaration de variables du début du jeu et de la fonction biscuit.
let biscuitMange = false;

function biscuit() {
  biscuitMange = true;
  goToChapter("biscuit");
  localStorage.setItem('biscuitMange', biscuitMange);

  // console.log(biscuitMange.value)
}

function parallele() {
  if (biscuitMange == true) {
    goToChapter("un_etre_apparait");
  } else {
    goToChapter("un_etre_apparait2");
  }
}

//CHAPITRE 1

let chaptersObj = {
  la_prison: {
    subtitle: "La cellule",
    text: "Ayant été condamné pour avoir commis un crime violent contre l'humanité, vous vous retrouvez en prison. Le cervaux de l'opération est en liberté et tu pourris en prison, tu ne veux pas finir tes jours en prison. Tout d'un coup, tu recois vent d'un plan de s'échapper de prison par les prisonniers. Aujourd'hui est le grand jour est tu prêt? Sachant que vous être innocent, votre but est de vous enfuir de prison pour prouver votre innoncence. Bonne Chance.",
    // img: "assets/prison.jpg",
    video: "assets/prisonner.mp4 ",
    options: [
      {
        text: "Aller vous coucher ",
        action: "goToChapter('confontation')",
      },
      {
        text: "le temps passe",
        action: "goToChapter('confontation')",
      },
    ],
  },

  //CHAPITRE 2

  confontation: {
    subtitle: "La confrontation",
    text: "Un garde apparait et fait les rondes proche de votre cellulle et pour une curieuse raison, vous apercevez des... licornes?? Ce pourrait être une de vos seule chances de vous enfuir. Que faire?",
    img: "assets/confrontation.jpg",
    options: [
      {
        text: "Provoquer garde",
        action: "goToChapter('le_garde')",
      },
      {
        text: "Ne rien faire",
        action: "goToChapter('choix_difficile')",
      },
    ],
  },
  le_garde: {
    subtitle: "Le Garde te casse la yeuele",
    text: "La souffrance est à son comble depuis que le garde a fait de vous son 'sandbag' tout en s'assurant de ne pas retenir ses coups. Vous êtes maintenant dans une prison sous haute surveillance. Vous avez échoué.",
    img: "assets/boxed_up.jpg",
    options: [
      {
        text: "Rejouer ",
        action: "goToChapter('la_prison')",
      },
    ],
  },

  //CHAPITRE 3

  choix_difficile: {
    subtitle: "choix difficile ",
    text: "En arrivant sur la scène, vous apercevez un biscuit qui semble douteux, une manette qui semble curieuse, et un objet ressemblant a un fusil qui n'inspire pas la confiance. Qu'allez vous faire?",
    img: "assets/pourison.jpg ",
    options: [
      {
        text: "Manger un Biscuit",
        action: "biscuit()",
      },
      {
        text: "Utiliser la machine",
        action: "goToChapter('un_etre_apparait2')",
      },
      {
        text: "Prendre le laser",
        action: "goToChapter('laser')",
      },
    ],
  },
  teleporter: {
    subtitle: "Dans un mur ouch",
    text: "Une fin tragique, vous vous retrouvez dans un mur et incapable d'en sortir. Vous êtes mort. ",
    img: "assets/teleporter.jpg",
    options: [
      {
        text: "réesayer",
        action: "goToChapter('la_prison') ",
      },
    ],
  },
  biscuit: {
    subtitle: "choix difficile",
    text: "Du temps à passé choisir entre une manette qui semble curieuse, et un outil suspicieux qui ressemble drôlement a un fusil.; ",
    img: "assets/cookie.jpg",
    options: [
      {
        text: "Utiliser la machine",
        action: "goToChapter('teleporter') ",
      },
      {
        //Bon choix
        text: "Prendre le laser",
        action: "parallele()",
      },
    ],
  },
  laser: {
    subtitle: "Carnage",
    text: "Vous entrez dans une pièce pleine de gardes et vous vous faites remplir de balles. Vous etes mort. ",
    img: "assets/gun_dead.jpg",
    options: [
      {
        text: "Réessayer",
        action: "goToChapter('la_prison') ",
      },
    ],
  },

  //CHAPITRE 4

  un_etre_apparait: {
    subtitle: "Un être Apparaît ",
    text: "Vous appercevez une jeune femme qui à l'air troublé. Vous vous demandez si vous devriez lui parler.",
    img: "./assets/woman.jpg ",
    options: [
      {
        text: "Tuer la femme",
        action: "goToChapter('tuer_femme')",
      },
      {
        text: "Attendre un peu ",
        action: "goToChapter('attendre_femme') ",
      },
      {
        text: "Lui parler ",
        action: "goToChapter('la_grande_decision') ",
      },
    ],
  },

  tuer_femme: {
    subtitle: "Un accident d'une tristesse immesurable ",
    text: "Le fusil surchauffe et vous explosez. oups. Vous êtes mort ",
    img: "./assets/grilled_hair.jpg ",
    options: [
      {
        text: "Réessayer",
        action: "goToChapter('la_prison')",
      },
    ],
  },

  attendre_femme: {
    subtitle: "Oh lala on est pressé la ",
    text: "Mais à quoi tu pensais. Tu es recherché par une centaine de gardes dans une prison sous haute surveillance. Pas le temp dniaiser. Une panooplie de gardes viennent et se moquent de vous. Vous mourrez d'humiliation. ",
    img: "./assets/bully.png ",
    options: [
      {
        text: "Réessayer",
        action: "goToChapter('la_prison')",
      },
    ],
  },

  parler_femme: {
    subtitle: "Un duo surprenant ",
    text: "Vous lui demander de travailler avec vous et elle accepte! vous êtes maintenant deux pour essayer de s'enfuir. une decision vous attend ",
    img: "./assets/happy_friends.jpg ",
    options: [
      {
        text: "Se decider",
        action: "goToChapter('la_grande_decision')",
      },
    ],
  },

  //CHAPITRE 4 (IF YOU HAVENT EATEN THE COOKIE)

  un_etre_apparait2: {
    subtitle: "Un être Apparaît ",
    text: "Vous appercevez une jeune femme qui à l'air troublé. Vous vous demandez si vous devriez lui parler.",
    img: "./assets/woman.jpg ",
    options: [
      {
        text: "Tuer la femme",
        action: "goToChapter('tuer_femme2')", //CHANGER ÇA FAIRE MOURIR LE GARS
      },
      {
        text: "Attendre un peu ",
        action: "goToChapter('attendre_femme2') ", //CHANGER ÇA FAIRE MOURIR LE GARS
      },
      {
        text: "Faire un son d'oiseau ",
        action: "goToChapter('parler_femme2') ", //CHANGER ÇA l'action la faire continuer dans l'histoire
      },
    ],
  },

  tuer_femme2: {
    subtitle: "Un terrible accident survient ",
    text: "Le fusil se refroidit de manière anormale et vous mourrez d'une engelure. Oh lala. Vous êtes mort ",
    img: "./assets/frozen.jpg ",
    options: [
      {
        text: "Réessayer",
        action: "goToChapter('la_prison')",
      },
    ],
  },

  attendre_femme2: {
    subtitle: "Wesh on t'a SPOT ",
    text: "La femme vous apercoit et vous tire avec son fusil laser. Vous êtes mort.",
    img: "./assets/laser_woman.jpg ",
    options: [
      {
        text: "Réessayer",
        action: "goToChapter('la_prison')",
      },
    ],
  },

  parler_femme2: {
    subtitle: "Un duo surprenant ",
    text: "Vous lui demander de travailler avec vous en cris d'oiseau et par surprise, elle comprend la langue et décide d'accepter! vous êtes maintenant deux pour essayer de s'enfuir. une decision vous attend ",
    img: "./assets/happy_friends.jpg ",
    options: [
      {
        text: "Se decider",
        action: "goToChapter('la_grande_decision3')",
      },
    ],
  },

  //CHAPITRE 5

  la_grande_decision: {
    subtitle: "La grande decision ",
    text: "Un bouton rouge apparait en face de vous allez vous appuyer dessus oui ou non? ",
    img: "./assets/boutton.jpg ",
    options: [
      {
        text: "Appuyer",
        action: "goToChapter('gagner')", //CHANGER ÇA l'action
        
      },
      {
        text: "ne pas appuyer ",
        action: "goToChapter('mort') ", //CHANGER ÇA l'action
      },
    ],
  },

  la_grande_decision2: {
    subtitle: "Le bouton n'est pas appuyé ",
    text: "Vous vous faites encercler et capturer par les gardes. GAME OVER ",
    img: "./assets/encercle.jpg ",
    options: [
      {
        text: "Réessayer ",
        action: "goToChapter('la_prison') ",
      },
    ],
  },

  //CHAPITRE 5 (IF YOU HAVENT EATEN THE COOKIE)

  la_grande_decision3: {
    subtitle: "La grande decision ",
    text: "Un bouton rouge apparait en face de vous. allez vous appuyer dessus?? ",
    img: "./assets/boutton.jpg ",
    options: [
      {
        text: "Appuyer",
        action: "goToChapter('la_grande_decision4') ",
      },
      {
        text: "ne pas appuyer ",
        action: "goToChapter('la_grande_decision5') ",
      },
    ],
  },

  la_grande_decision4: {
    subtitle: "Le bouton est appuyé, mais... ",
    text: "Vous essayez d'appuyer, mais il a été désactivé par la licorne du garde qui a entendus vos cris d'oiseau.. Faut dire que vous n'avez jamais été doué dans le domaine de l'audio 😬. Vous vous attraper par des gardes et torturé. La dernière chose que vous entendez à votre mort est l'intro de cocomelon. ",
    video: "assets/panic_button.mp4 ",
    options: [
      {
        text: "Réessayer ",
        action: "goToChapter('la_prison') ",
      },
    ],
  },

  la_grande_decision5: {
    subtitle: "Le bouton n'est pas appuyé ",
    text: "Vous vous faites encercler et capturer par les gardes. GAME OVER ",
    img: "./assets/boutton.jpg ",
    options: [
      {
        text: "Réessayer ",
        action: "goToChapter('la_prison') ",
      },
    ],
  },

  //Vie et mort
  mort: {
    subtitle: " Perdant",
    text: "Vous avez perdu",
    img: "./assets/lose.png",
    options: [
      {
        text: "Réessayer",
        action: "goToChapter('la_prison')",
      },
    ],
  },

  //WIN SCREEN

  gagner: {
    subtitle: " Vous avez Gagné !",
    text: "Le système de sécurité s'est désactivé et vous réuissez de vous enfuir et de regagner vos droits. Vous avez gagné bravo ",
    // img: "./assets/bravo.jpg",
    video: "assets/final_winner.mp4 ",
    options: [
      {
        text: "Rejouer",
        action: "goToChapter('la_prison')",
      },
    ],
  },
};

const audio = new Audio('assets/vine_boom.mp3');

//Fonction pour se déplacer entre les chapitres

function goToChapter(chapterName) {
  const body = document.querySelector('body');
  body.className = chapterName
  
  /* audio */
  audio.currentTime = 0;
  audio.play()
  
  let chapter = chaptersObj[chapterName];
  // console.log(chapter.subtitle);
  // console.log(chapter.text);
  // console.log(chapter.img);

  document.querySelector("#sub_title").innerHTML = chapter.subtitle;
  document.querySelector("#text_id").innerHTML = chapter.text;


  let options = "";
  let optArr = chapter.options;
  for (let index = 0; index < optArr.length; index++) {
    const opt = optArr[index];
    options += `<button onclick="${opt.action}">${opt.text}</button>`;
  }

  let optDecl = document.querySelector(".menu");
  optDecl.innerHTML = options;

  //Section Video
  const video = document.querySelector(".video")

  if(chapter.video != undefined){
    options = `<video id="video" src="${chapter.video}" style="max-width: 50%" autoplay muted loop>`;
    video.innerHTML = options
  } else {
    options = `<img id="image" src="${chapter.img}" style="max-width: 50%;">`;
    video.innerHTML = options
  }

  localStorage.setItem('chapter', chapterName);
  console.log(localStorage.getItem('chapter'))


  let muteBtn = document.getElementById('mute');

muteBtn.addEventListener('change', function() {
if(muteBtn.checked == true){
  audio.play()
  audio.volume = 1;
   }
else {
  audio.pause();
  audio.volume = 0;
}
})



}

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', function(){
localStorage.clear();
goToChapter('la_prison')
});


// --------------------------------------------- Sauvegarde Local storage ----------------------------------------------------------

if(localStorage.getItem('chapter') != null) {
  goToChapter(localStorage.getItem('chapter'));
} else {
  goToChapter('la_prison');
}

//KEY CONDITIONS FOR COOKIE
if(localStorage.getItem('biscuitMange') != null) {
  biscuitMange = true;
} else {
  biscuitMange = false;
}

// ---------------------------------------------- Sauvegarde Local storage ---------------------------------------------------------------



/*console.log(isChecked)
isChecked.addEventListener('change', function(){
  if(isChecked === true){
    audio.volume = 0;
  } //else{
    // audio.volume = 1;
});
*/
