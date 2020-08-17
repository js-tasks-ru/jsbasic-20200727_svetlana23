function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  function toggleHidden() {
    if (text.getAttribute('hidden') == 'true') {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', true);
    }
  }

  btn.addEventListener('click', toggleHidden);
}
