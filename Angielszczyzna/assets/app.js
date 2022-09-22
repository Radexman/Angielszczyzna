const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const openModal = document.querySelector('#modal-open');
const closeModal = document.querySelector('#modal-close');
const modal = document.querySelector('#modal');

console.log(openModal);
console.log(closeModal);
console.log(modal);

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});