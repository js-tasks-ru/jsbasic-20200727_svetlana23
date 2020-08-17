/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = document.createElement("ul");

  for (let value of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${value.firstName} ${value.lastName}`;
    list.append(li);
  }
  return list;
}
