function changeLocation() {
    alert("La sélection des villes sera disponible prochainement.");
}

function reportSomething() {
    alert("Formulaire de signalement — bientôt disponible !");
}


// Category buttons

const categories = document.querySelectorAll(".category-card");

categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");

    });

});
