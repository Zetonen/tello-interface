import './js/swipe';

const refs = {
  modal: document.querySelector('.modal'),
  openModal: document.querySelector('.mode'),
  closeModal: document.querySelector('.modal__close'),
};

document.addEventListener('DOMContentLoaded', () => {
  if (screen.orientation.type === 'portrait-primary') {
    alert(false);
  }
});
screen.orientation.addEventListener('change', event => {
  const type = event.target.type;
  const angle = event.target.angle;
  if (type === 'portrait-primary') {
    alert(false);
  }
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});

refs.openModal.addEventListener('click', toggleOpenModal);
refs.closeModal.addEventListener('click', toggleOpenModal);

function toggleOpenModal() {
  refs.modal.classList.toggle('hidden');
}
