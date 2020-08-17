function hideSelf() {
  let btn = document.querySelector('.hide-self-button');

  function setHidden() {
    btn.setAttribute('hidden', true);
  }

  btn.addEventListener('click', setHidden);
}
