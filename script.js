// Création d'une variable compteur égale à 0
let count = 0

// Récupération des éléments pour la manipulation du DOM : compteur, bouton, etc. 
const displayCount = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn")


// Ajout d'un événement au clique sur le bouton : "INCREMENT"
incrementBtn.addEventListener("click", function() {
    // Incrémentation du compteur +1
    count += 1
    // Affichage du compteur sur l'application
    displayCount.textContent = count
    
})