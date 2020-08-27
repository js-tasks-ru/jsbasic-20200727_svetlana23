/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let row = table.rows;
  return Array.from(row).map(function (item, ind) {
    let cell = item.cells;
    cell[ind].style.backgroundColor = "red";
  });
}
