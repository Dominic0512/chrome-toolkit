const fileDrawers = document.querySelectorAll('[data-details-container-group="file"]'); 
fileDrawers.forEach((file) => { 
    file.classList.remove('open'); file.classList.remove('Details--on'); 
});
