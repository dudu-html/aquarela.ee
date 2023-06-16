// Funcionamento do menu em dispositivos móveis (burger)

const checkbox = document.getElementById('burger');
const menu = document.querySelector('.menu');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    menu.parentNode.classList.add('show-menu');
  } else {
    menu.parentNode.classList.remove('show-menu');
  }
});
