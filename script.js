//*FONCER DANS LE GARDE DE SÉCURITER POUR T'ENFUIR [YOU DIE]

// Étant distrait par les licornes de couleure verte, le garde oublie la clée de la porte de se cellule

    //CHAPITRE 1

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

      //CHAPITRE 2

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
    le_garde: battu = {
        subtitle: "Le Garde te casse la yeuele",
        text: "La souffrance est grande depuis que le garde vous fait des leçon de boxe sans retenir ses coups. Vous etes mort.",
        img: "boxed_up.jpg",
        options: [{
            text:"Rejouer ",
            action:'goToChapter(la_prison)'
        },]
      },

      //CHAPITRE 3

    choix_difficile: chapitre3 = {
        subtitle:"choix difficile ",
        text:"En arrivant vous apercevez un biscuit, radioactif vert, une manette qui semble curieuse, et un outil suspicieux qui ressemble drôlement a un fusil.",
        img:"pourison.jpg ",
        options: [{
            text:"Manger_Biscuit",
            action:"goToChapter(biscuit)"
        },{
            text:"Utiliser la machine",
            action:"goToChapter(mort) "
        },
        {
            text:"Prendre le laser",
            action:"goToChapter(laser)"
        }],
    },
    teleporter: mort_teleporteur = {
        subtitle: "Dans un mur ouch",
        text: "Une fin tragique, vous vous retrouvez dans un mur et incapable d'en sortir. ",
        img: "pourison.jpg",
        options: [{
            text:"réesayer",
            action:"goToChapter(la_prison) "
        },]
      },
    biscuit: manger_biscuit = {
        subtitle: "choix difficile",
        text: "Du temps à passé choisir entre une manette qui semble curieuse, et un outil suspicieux qui ressemble drôlement a un fusil.; ",
        img: "pourison.jpg",
        options: [{
            text:"Utiliser la machine",
            action:"goToChapter(teleporter) "
        }, { //Bon choix
            text:"Prendre le laser",
            action:"goToChapter(un_etre_apparait)"
        }]
      },
      laser: shooting_range = {
        subtitle: "Carnage",
        text: "Vous entrez dans une pièce pleine de gardes et vous vous faites remplir de balles. Vous etes mort. ",
        img: "gun_dead.jpg",
        options: [{
            text:"Utiliser la machine",
            action:"goToChapter(mort) "
        }, { 
            text:"Prendre le laser",
            action:"goToChapter(un_etre_apparait)"
        }]
      },

      //CHAPITRE 4

    un_etre_apparait: chapitre4 = {
        subtitle:"Un être Apparaît ",
        text:"Vous appercevez une jeune femme qui à l'air troublé. Vous vous demandez si vous devriez lui parler. ",
        img:"woman.jpg ",
        options: [{
            text:"Tuer la femme",
            action:"goToChapter(tuer_femme)",
        },{
            text:"Attendre un peu ",
            action:"goToChapter(mort) "
        },{
            text:"Lui parler ",
            action:"goToChapter(la_grande_decision) "
        }],
    },

    tuer_femme: shooting_woman = {
        subtitle:"Un accident infortuné ",
        text:"Le fusil surchauffe et vous explosez. oups. Vous êtes mort ",
        img:"grilled_hair.jpg ",
        options: [{
            text:"Réessayer",
            action:"goToChapter(la_prison)",
        },],
    },

    attendre_femme: waiting_women = {
        subtitle:"Oh lala on est pressé la ",
        text:"Une panooplie de gardes viennent vous embusquer et vous mourrez d'humiliation de vous être fait embusquer ",
        img:"bully.jpg ",
        options: [{
            text:"reccomencer",
            action:"goToChapter(la_prison)",
        },],
    },

    parler_femme: woman_talking = {
        subtitle:"Un duo surprenant ",
        text:"Vous lui demander de travailler avec vous et elle accepte! vous êtes maintenant deux pour essayer de s'enfuir. une decision vous attend ",
        img:"happy_friends.jpg ",
        options: [{
            text:"Se decider",
            action:"goToChapter(la_grande_decision)",
        },],
    },


        //CHAPITRE 5

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

    la_grande_decision: chapitre5 = {
        subtitle:"Le bouton n'est pas appuyé ",
        text:"Vous vous faites encercler et capturer par les gardes. GAME OVER ",
        img:"boutton.jpg ",
        options: [{
            text:"Réessayer ",
            action:"goToChapter(la_prison) "
        }],
    },


    mort: lose = {
        subtitle:" Perdant",
        text:"Vous avez perdu",
        img:"lose.png",
        options: [{
            text:"Réessayer",
            action: 'goToChapter(la_prison)'
        }]
    },

    //WIN SCREEN

    gagner: win = {
        subtitle:" Vous avez Gagné !",
        text:"Le système de sécurité s'est désactivé et vous réuissez de vous enfuir et de regagner vos droits. Vous avez gagné bravo ",
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
