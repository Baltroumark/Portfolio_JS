const filterButtons = document.querySelectorAll('#filters button');
const projets = document.querySelectorAll('#projets article');

for (const button of filterButtons) {
    button.addEventListener('click', (event) => {
        /*
        for (const btn of filterButtons) {
            btn.classList.remove('active');
        }
        */
        // Supprimer la classe "active" sur le bouton ayant cette classe
        document.querySelector('#filters button.active').classList.remove('active');
        // Ajouter la classe "active" sur le bouton qui a été cliqué
        event.target.classList.add('active');

        // Récupérer l'attribut data-category du bouton cliqué
        const category = event.target.dataset.category;
        // Parcourir la liste des projets (balises <article>)
        for (const projet of projets) {
            // Récupérer l'attribut data-categories de la balise <article> et transformer la chaine de caractères en tableau
            const categories = projet.dataset.categories.split(' ');
            // Vérifier si la catégorie du bouton cliqué est présente sur le projet
            if (categories.includes(category) || category == 'all') {
                projet.classList.add('active');
            } else {
                projet.classList.remove('active');
            }
        }
    });
}

let theme = 0;
document.getElementById('switchThemeButton').addEventListener('click', function() {
    const root = document.querySelector(':root');  
    const element = document.querySelector('.bg-light');

    if (theme === 0) {
        // Thème noir

        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-color', '#eeeeee');
        element.style.setProperty('background-color', '#3b3b3b');
        theme = 1;
    } else if (theme === 1) {
        // Thème blanc

        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        element.style.setProperty('background-color', '#bdbdbd');
        theme = 0;
    }
});