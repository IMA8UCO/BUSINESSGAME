// Fonction pour afficher le formulaire de réinitialisation
function showResetForm() {
    document.getElementById("loginContainer").classList.remove("active"); // Cache le formulaire de connexion
    document.getElementById("resetContainer").classList.add("active"); // Affiche le formulaire de réinitialisation
}

// Fonction pour afficher le formulaire de connexion
function showLoginForm() {
    document.getElementById("resetContainer").classList.remove("active"); // Cache le formulaire de réinitialisation
    document.getElementById("loginContainer").classList.add("active"); // Affiche le formulaire de connexion
}

// Gestion de la soumission du formulaire de connexion
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de soumettre normalement

    const email = document.getElementById("email").value; // Récupère la valeur de l'Identifiant
    const password = document.getElementById("password").value; // Récupère la valeur du mot de passe

    // Vérification simplifiée des identifiants
    if (email === "admin" && password === "password") { // Vérifie si les identifiants sont corrects
        alert("Connexion réussie !"); // Affiche une alerte de succès
        window.location.href = "dashboard.html"; // Redirige vers le tableau de bord
    } else {
        document.getElementById("errorMsg").style.display = "block"; // Affiche le message d'erreur
    }
});

// Gestion de la soumission du formulaire de réinitialisation
document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de soumettre normalement

    const email = document.getElementById("email").value; // Récupère la valeur de l'email

    // Exemple simplifié de vérification de l'email
    if (email === "exemple@email.com") { // Vérifie si l'email est correct
        document.getElementById("successMsg").style.display = "block"; // Affiche le message de succès
        document.getElementById("resetErrorMsg").style.display = "none"; // Cache le message d'erreur
    } else {
        document.getElementById("resetErrorMsg").style.display = "block"; // Affiche le message d'erreur
        document.getElementById("successMsg").style.display = "none"; // Cache le message de succès
    }
});
