let chapitre1 = {
    subtitle: "La cellule",
    text: "Ayant été condamné pour avoir commis un crime violent contre l'humanité, vous vous retrouvez en prison. Le cervaux de l'opération est en liberté et tu pourris en prison, tu ne veux pas finir tes jours en prison. Tout d'un coup, tu recois vent d'un plan de s'échapper de prison par les prisonniers. Aujourd'hui est le grand jour est tu prêt? Sachant que vous être innocent, votre but est de vous enfuir de prison pour prouver votre innoncence. Bonne Chance",
    img: "prison.jpg",
    options: [dormir = {
        text:"Aller vous coucher ",
        action:'goToChapter(confontation)'
    }, attendre = { //le temps passe
        text:"le temps passe",
        action:'goToChapter(confontation)'
    }]
  };


//*FONCER DANS LE GARDE DE SÉCURITER POUR T'ENFUIR [YOU DIE]

// Étant distrait par les licornes de couleure verte, le garde oublie la clée de la porte de se cellule

let chapitre2 = {
    subtitle: "La confrontation",
    text: "Un garde apparait et fait les rondes dans les alentours. Vous apercevez des licornes pour une raison curieuse.",
    img: "confrontation.jpg",
    options: [frapper = {
        text:"Provoquer garde", //Le garde se fache et vous bat contre vous. vous perdez le combat
        action:'goToChapter(mort)'},
        rien_faire = {
            text: "Ne rien faire",
            action: 'goToChapter(choix_difficile)'
        }],
}


let chapitre3 = {
    subtitle:"choix difficile ",
    text:"En arrivant vous apercevez un biscuit, radioactif vert, une manette qui semble curieuse, et un outil suspicieux qui ressemble drôlement a un fusil.",
    img:"pourison.jpg ",
    options: [manger_biscuit = {
        text:"Manger_Biscuit",
        action:"goToChapter(un_etre_apparait)"
    },teleporteur = {
        text:"Utiliser la machine",
        action:"goToChapter(mort) "
    },
    laser = {
        text:"Prendre le laser",
        action:"goToChapter(un_etre_apparait)"
    }],
}

let chapitre4 = {
    subtitle:"Un être Apparaît ",
    text:"Vous appercevez une jeune femme qui à l'air troublé. Vous vous demandez si vous devriez lui parler. ",
    img:"woman.jpg ",
    options: [tirer = {
        text:"Tuer la femme",
        action:"goToChapter(mort)",
    },attendre = {
        text:"Attendre un peu ",
        action:"goToChapter(mort) "
    },travailler_ensemble = {
        text:"Lui parler ",
        action:"goToChapter(la_grande_decision) "
    }],
}

let chapitre5 = {
    subtitle:"La grande decision ",
    text:"Un bouton rouge apparait en face de vous allez vous appuyer dessus oui ou non? ",
    img:"boutton.jpg ",
    options: [appuyer = {
        text:"Appuyer",
        action:"goToChapter(win) "
    },pas_appuyer = {
        text:"ne pas appuyer ",
        action:"goToChapter(mort) "
    }],
}

let win = {
    subtitle:" Victoire",
    text:"Vous avez gagné bravo",
    img:"bravo.jpg",
    options: [replay = {
        text:"Rejouer",
        action:"goToChapter(la_prison)"
    },]
}

let lose = {
    subtitle:" Perdant",
    text:"Vous avez perdu",
    img:"bravo.jpg",
    action: 'goToChapter(die)'
}


let chaptersObj = {
    la_prison: chapitre1,
    confontation: chapitre2,
    choix_difficile: chapitre3,
    un_etre_apparait: chapitre4,
    la_grande_decision: chapitre5,
    mort: lose,
}

function goToChapter(chapterName){
    let chapitre = chaptersObj.chapterName;
    console.log(chapitre.subtitle);
    console.log(chapitre.text);
    console.log(chapitre.img);
}
