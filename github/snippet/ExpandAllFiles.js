const fileDrawers = document.querySelectorAll('[data-details-container-group="file"]'); 
fileDrawers.forEach((file) => { 
    file.classList.add('open'); file.classList.add('Details--on'); 
});
