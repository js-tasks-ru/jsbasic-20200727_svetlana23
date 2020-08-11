/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');
  let arrNew = [];
  arr.forEach((item, index) => {
    if (index === 0) {
      arrNew.push(item);
    } else {
      let up = item.charAt(0).toUpperCase() + item.slice(1);
      arrNew.push(up);
    }
  });
  return arrNew.join('');
}
