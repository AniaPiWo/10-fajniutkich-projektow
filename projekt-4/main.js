const infobox = document.querySelector('.infobox');
const notes = document.querySelector('.notes');
const save_btn = document.querySelector('.save_btn');
const textarea = document.querySelector('.note_text');
const empty_list = document.querySelector('.empty_list');

function init() {
  const notesArray = [];
  Object.keys(localStorage).forEach((keyNote) => {
    const textNote = localStorage.getItem(keyNote);
    notesArray.push({ keyNote, textNote });
  });
  notesArray.sort((a, b) => b.keyNote - a.keyNote);
  notesArray.forEach(({ keyNote, textNote }) => {
    createNote(keyNote, textNote);
    empty_list.style.display = 'none';
  });
}
init();

function saveNote() {
  const textNote = textarea.value;
  const keyNote = Date.now().toString();
  if (textNote === '') {
    infobox.innerHTML = 'You entered a task without content!';
    setTimeout(() => {
      infobox.innerHTML = '';
    }, 2000);
    return;
  }

  localStorage.setItem(keyNote, textNote);
  createNote(keyNote, textNote);
  textarea.value = '';
  empty_list.style.display = 'none';
  infobox.innerHTML = 'Task added!';
  setTimeout(() => {
    infobox.innerHTML = '';
  }, 2000);
}

function deleteNote(keyNote) {
  localStorage.removeItem(keyNote);
  const div = document.getElementById(keyNote);
  div.remove();
  infobox.innerHTML = 'Task deleted!';
  setTimeout(() => {
    infobox.innerHTML = '';
  }, 2000);
}

function createNote(keyNote, textNote) {
  const div = document.createElement('div');
  div.id = keyNote;
  div.textContent = textNote;
  div.className = 'text_item';
  /*   const text = document.createTextNode(textNote);
  div.appendChild(text); */
  const button = document.createElement('button');
  button.textContent = 'X';
  button.className = 'delete_btn';
  button.onclick = () => {
    deleteNote(keyNote);
  };
  div.appendChild(button);
  notes.appendChild(div);
}

save_btn.addEventListener('click', saveNote);
