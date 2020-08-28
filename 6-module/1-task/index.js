/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.render(rows, this.elem);
    this.elem2 = document.querySelectorAll('button');
    this.elem2.forEach(function(btn) {
      btn.addEventListener('click', (event) => btn.closest('tr').remove());
    });
  }

  render(data, el) {
    el.innerHTML = `
      <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
          <tbody class = "tbody">
          </tbody>
        `;
    document.body.append(el);

    let tbody = document.querySelector('.tbody');

    data.forEach(function(item) {
      let arr = [];

      for (let key in item) {
        arr.push(item[key]);
      }

      let td = arr.map(item => `<td>${item}</td>`).join('');
      td += '<td><button class = "btn">[X]</button></td>';
      let tr = document.createElement('tr');
      tr.innerHTML = td;
      tbody.append(tr);
    });
  }
}
