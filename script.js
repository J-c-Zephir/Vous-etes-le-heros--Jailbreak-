//*FONCER DANS LE GARDE DE SÉCURITER POUR T'ENFUIR [YOU DIE]

// Étant distrait par les licornes de couleure verte, le garde oublie la clée de la porte de se cellule

let chaptersObj = {
    la_prison: chapitre1 = {
        subtitle: "La cellule",
        text: "Ayant été condamné pour avoir commis un crime violent contre l'humanité, vous vous retrouvez en prison. Le cervaux de l'opération est en liberté et tu pourris en prison, tu ne veux pas finir tes jours en prison. Tout d'un coup, tu recois vent d'un plan de s'échapper de prison par les prisonniers. Aujourd'hui est le grand jour est tu prêt? Sachant que vous être innocent, votre but est de vous enfuir de prison pour prouver votre innoncence. Bonne Chance",
        img: "prison.jpg",
        options: [{
            text:"Aller vous coucher ",
            action:'goToChapter(confontation)'
        }, { //le temps passe
            text:"le temps passe",
            action:'goToChapter(confontation)'
        }]
      },
    confontation: chapitre2 = {
        subtitle: "La confrontation",
        text: "Un garde apparait et fait les rondes dans les alentours. Vous apercevez des licornes pour une raison curieuse.",
        img: "confrontation.jpg",
        options: [{
            text:"Provoquer garde", //Le garde se fache et vous bat contre vous. vous perdez le combat
            action:'goToChapter(mort)'},
            {
                text: "Ne rien faire",
                action: 'goToChapter(choix_difficile)'
            }],
    },
    choix_difficile: chapitre3 = {
        subtitle:"choix difficile ",
        text:"En arrivant vous apercevez un biscuit, radioactif vert, une manette qui semble curieuse, et un outil suspicieux qui ressemble drôlement a un fusil.",
        img:"pourison.jpg ",
        options: [{
            text:"Manger_Biscuit",
            action:"goToChapter(un_etre_apparait)"
        },{
            text:"Utiliser la machine",
            action:"goToChapter(mort) "
        },
        {
            text:"Prendre le laser",
            action:"goToChapter(un_etre_apparait)"
        }],
    },
    un_etre_apparait: chapitre4 = {
        subtitle:"Un être Apparaît ",
        text:"Vous appercevez une jeune femme qui à l'air troublé. Vous vous demandez si vous devriez lui parler. ",
        img:"woman.jpg ",
        options: [{
            text:"Tuer la femme",
            action:"goToChapter(mort)",
        },{
            text:"Attendre un peu ",
            action:"goToChapter(mort) "
        },{
            text:"Lui parler ",
            action:"goToChapter(la_grande_decision) "
        }],
    },
    la_grande_decision: chapitre5 = {
        subtitle:"La grande decision ",
        text:"Un bouton rouge apparait en face de vous allez vous appuyer dessus oui ou non? ",
        img:"boutton.jpg ",
        options: [{
            text:"Appuyer",
            action:"goToChapter(win) "
        },{
            text:"ne pas appuyer ",
            action:"goToChapter(mort) "
        }],
    },
    mort: lose = {
        subtitle:" Perdant",
        text:"Vous avez perdu",
        img:"bravo.jpg",
        action: 'goToChapter(die)'
    },
    gagner: win = {
        subtitle:" Victoire",
        text:"Vous avez gagné bravo",
        img:"bravo.jpg",
        options: [{
            text:"Rejouer",
            action:"goToChapter(la_prison)"
        },]
    }
}

function goToChapter(chapterName){
    let chapter = chaptersObj[chapterName];
    console.log(chapter.subtitle)
    console.log(chapter.text)
    console.log(chapter.img)
}
