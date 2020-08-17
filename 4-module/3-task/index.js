/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let rows = table.rows;
  let tbodyArr = Array.from(rows).filter ((item, index) => index > 0);

  function setAttr (arr) {
    arr.forEach(item => {
      if (item.cells[3].getAttribute('data-available') == 'true') {
        item.classList.add('available');

      } else if (item.cells[3].getAttribute('data-available') == 'false'){
        item.classList.add('unavailable');
      } else {
        item.setAttribute('hidden', true);
      }
    });
  }

  function setGender (arr) {
    arr.forEach(item => {
      if (item.cells[2].innerHTML == 'm') {
        item.classList.add('male');
      } else {
        item.classList.add('female');
      }
    });
  }

  function checkAge (arr) {
    arr.forEach(item => {
      if (item.cells[1].innerHTML < 18) {
        item.style.textDecoration = 'line-through';
      }
    });
  }

  setAttr(tbodyArr);
  setGender(tbodyArr);
  checkAge(tbodyArr);
}
