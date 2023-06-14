

  

let usersWord = '';
let oddList = document.getElementById('odd');
let evenList = document.getElementById('even');

function updateWord(element) {
    usersWord = element.value;

    console.log(usersWord);
  }

function handleSubmit() {
  let newListItem = document.createElement('li');
  newListItem.innerText = usersWord;

  if (usersWord.length % 2 === 0) {
    let newEvenListItem = document.createElement('li');
    newEvenListItem.innerText = usersWord;
    evenList.appendChild(newEvenListItem);
  } else {
    oddList.appendChild(newListItem);
  }

  usersWord = '';
  document.getElementById('even-odd-form').reset();
}





