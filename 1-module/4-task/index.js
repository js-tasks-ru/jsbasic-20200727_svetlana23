/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  let result =
    str.toLowerCase().includes('1xBet'.toLowerCase()) ||
    str.toLowerCase().includes('XXX'.toLowerCase());

  return result;
}
