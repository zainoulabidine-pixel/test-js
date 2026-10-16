//les mot et phase que l'utilisateur va saisir
const listemot = ["bonjour", "salut", "coucou"]
const listePhrase = ["bonjour comment allez-vous", "salut ça va", "coucou ça va"]

//resultat de l'utilisateur
function afficherResultat (score, nombredemotpropose){
    console.log("votre score est de " + score + "sur" + nombredemotpropose)
}

function choixphraseOuMot(){
    let choixliste = prompt("veillez choisir la liste de mot ou de phase")
    while(choixliste !== "mot" && choixliste !== "phrase"){
        choixliste = prompt("veillez choisir la liste de mot ou de phase")
    }
    return choixliste
}
function lancerBoucleDejeu(listeproposition){
    let score = 0
    for(let i = 0 ; i < listeproposition.length ; i++){
    let motUtilisateur = prompt("Entrez un mot: " + listemot[i])
    if(motUtilisateur === listemot[i]){
      score++
      console.log(score)
   }else{
    for(let i = 0 ; i < listePhrase.length ; i++){
    let motUtilisateur = prompt("Entrez un mot: " + listePhrase[i])
    if(motUtilisateur === listePhrase[i]){
      score++
      console.log(score)
   }
 }
   
}
 }
 return score
}
function lencerjeu(){
    let choix = choixphraseOuMot()
    let score = 0
    let nombredemotpropose = 0

    if(choix === "mot"){
       score = lancerBoucleDejeu(listemot)
        nombredemotpropose = listemot.length
    }else{
       score = lancerBoucleDejeu(listePhrase)
        nombredemotpropose = listePhrase.length
    }

    afficherResultat(score, nombredemotpropose)
}
lencerjeu()