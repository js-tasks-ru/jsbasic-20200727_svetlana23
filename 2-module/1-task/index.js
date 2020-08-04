/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number') {
      sum += salaries[key];
    }
  }
  return sum;
}


function isEmpty(obj) {
  if (obj) {
    return true;
  } return false;
  console.log(obj);
  for (let key in obj) {
    console.log(key);
    if (key == false ) {
      return true;
    }
      return false;


  }

}

let schedule = {};
isEmpty(schedule);
