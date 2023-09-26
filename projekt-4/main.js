const infobox = document.querySelector('.infobox');
//const notes = document.querySelector('.notes');
const save_btn = document.querySelector('.save_btn');

function saveNote() {
  let noteText = document.querySelector('.note_text').value;
  if (noteText === '') {
    infobox.innerHTML = 'You entered a task without content!';

    setTimeout(() => {
      infobox.innerHTML = '';
    }, 2000);
    return;
  }
  console.log(noteText);
}

save_btn.addEventListener('click', saveNote);
