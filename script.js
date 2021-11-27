// Création d'une variable compteur égale à 0
let count = 0

// Récupération des éléments pour la manipulation du DOM : compteur, bouton, etc. 
const displayCount = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const resetBtn = document.getElementById("reset-btn")
let displayPrevEntries = document.getElementById("previous-entries")

// Ajout d'un événement au clique sur le bouton : "INCREMENT"
incrementBtn.addEventListener("click", function() {
    // Incrémentation du compteur +1
    count += 1
    // Affichage du compteur sur l'application
    displayCount.textContent = count
})

// Ajout d'un événement au clique sur le bouton : "SAVE"
saveBtn.addEventListener("click", function() {
    // Sauvegarde du total obtenu lors de l'incrémentation
    displayPrevEntries.textContent += `${count} - `
})

// Ajout d'un événement au clique sur le bouton : "RESET"
resetBtn.addEventListener("click", function() {
    // Réinitialiser du compteur à zéro
    count = 0
    displayCount.textContent = 0
})

