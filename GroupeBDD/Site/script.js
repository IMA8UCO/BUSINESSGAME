// Fonction pour afficher le formulaire de réinitialisation
function showResetForm() {
    document.getElementById("loginContainer").classList.remove("active"); // Supprime la classe "active" du conteneur de connexion pour masquer le formulaire de connexion
    document.getElementById("registerContainer").classList.remove("active"); // Supprime la classe "active" du conteneur d'inscription pour masquer le formulaire d'inscription
    document.getElementById("resetContainer").classList.add("active"); // Ajoute la classe "active" au conteneur de réinitialisation pour afficher le formulaire de réinitialisation
}

// Fonction pour afficher le formulaire de connexion
function showLoginForm() {
    document.getElementById("resetContainer").classList.remove("active"); // Supprime la classe "active" du conteneur de réinitialisation pour masquer le formulaire de réinitialisation
    document.getElementById("registerContainer").classList.remove("active"); // Supprime la classe "active" du conteneur d'inscription pour masquer le formulaire d'inscription
    document.getElementById("loginContainer").classList.add("active"); // Ajoute la classe "active" au conteneur de connexion pour afficher le formulaire de connexion
}

// Fonction pour afficher le formulaire d'inscription
function showRegisterForm() {
    document.getElementById("loginContainer").classList.remove("active"); // Supprime la classe "active" du conteneur de connexion pour masquer le formulaire de connexion
    document.getElementById("resetContainer").classList.remove("active"); // Supprime la classe "active" du conteneur de réinitialisation pour masquer le formulaire de réinitialisation
    document.getElementById("registerContainer").classList.add("active"); // Ajoute la classe "active" au conteneur d'inscription pour afficher le formulaire d'inscription
}

// Gestionnaire pour le formulaire de connexion
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (soumission et rechargement de la page)
    const email = document.getElementById("loginEmail").value; // Récupère la valeur du champ email dans le formulaire de connexion
    const password = document.getElementById("loginPassword").value; // Récupère la valeur du champ mot de passe dans le formulaire de connexion
    if (email === "test@mail.com" && password === "1234") { // Vérifie si les informations saisies correspondent à un utilisateur connu
        alert("Connexion réussie !"); // Affiche une alerte si la connexion est réussie
    } else {
        document.getElementById("loginErrorMsg").style.display = "block"; // Affiche un message d'erreur si les informations sont incorrectes
    }
});

// Gestionnaire pour le formulaire de réinitialisation
document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    const email = document.getElementById("resetEmail").value; // Récupère la valeur du champ email dans le formulaire de réinitialisation
    if (email === "test@mail.com") { // Vérifie si l'email correspond à celui d'un utilisateur enregistré
        document.getElementById("resetSuccessMsg").style.display = "block"; // Affiche un message de succès si l'email est valide
    } else {
        document.getElementById("resetErrorMsg").style.display = "block"; // Affiche un message d'erreur si l'email est incorrect
    }
});

// Gestionnaire pour le formulaire d'inscription
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    const name = document.getElementById("registerName").value; // Récupère la valeur du champ nom dans le formulaire d'inscription
    const email = document.getElementById("registerEmail").value; // Récupère la valeur du champ email dans le formulaire d'inscription
    const password = document.getElementById("registerPassword").value; // Récupère la valeur du champ mot de passe dans le formulaire d'inscription
    const confirmPassword = document.getElementById("registerConfirmPassword").value; // Récupère la valeur du champ confirmation de mot de passe dans le formulaire d'inscription
    if (password !== confirmPassword) { // Vérifie si les mots de passe saisis correspondent
        document.getElementById("registerErrorMsg").innerText = "Les mots de passe ne correspondent pas."; // Affiche un message d'erreur si les mots de passe ne correspondent pas
        document.getElementById("registerErrorMsg").style.display = "block"; // Affiche le message d'erreur
    } else {
        document.getElementById("registerSuccessMsg").style.display = "block"; // Affiche un message de succès si l'inscription est réussie
        document.getElementById("registerErrorMsg").style.display = "none"; // Masque le message d'erreur s'il était affiché précédemment
    }
});
