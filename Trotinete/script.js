const filterButtons = document.querySelectorAll('#filters button');
const projets = document.querySelectorAll('#projets article');

for (const button of filterButtons) {
    button.addEventListener('click', (event) => {
        document.querySelector('#filters button.active').classList.remove('active');
        event.target.classList.add('active');
        const category = event.target.dataset.category;
        for (const projet of projets) {
            const categories = projet.dataset.categories.split(' ');
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
