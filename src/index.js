import './js/swipe';

const refs = {
  modal: document.querySelector('.modal'),
  openModal: document.querySelector('.mode'),
  closeModal: document.querySelector('.modal__close'),
};

document.addEventListener('DOMContentLoaded', () => {
  if (screen.orientation.type === 'portrait-primary') {
    refs.modal.style.display = 'none';
    document.querySelector('main').style.display = 'none';
    document.body.classList.add('wrong');
  }
});
screen.orientation.addEventListener('change', event => {
  const type = event.target.type;
  const angle = event.target.angle;
  if (type === 'portrait-primary') {
    refs.modal.style.display = 'none';
    document.querySelector('main').style.display = 'none';
    document.body.classList.add('wrong');
  } else {
    document.body.classList.remove('wrong');
    refs.modal.style.display = 'block';
    document.querySelector('main').style.display = 'block';
  }
});

refs.openModal.addEventListener('click', toggleOpenModal);
refs.closeModal.addEventListener('click', toggleOpenModal);

function toggleOpenModal() {
  refs.modal.classList.toggle('hidden');
}
