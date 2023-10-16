const form = document.querySelector('#form');
const emailAlert = document.querySelector('#email-alert');
const phoneAlert = document.querySelector('#phone-alert');
const passwordAlert = document.querySelector('#password-alert');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let password = document.querySelector('#password').value;

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    emailAlert.textContent = 'Invalid email format!';
    setTimeout(function () {
      emailAlert.textContent = '';
    }, 2000);
  }

  const phoneRegex = /^(\d{3}[\s-]?){3}$/;
  if (!phoneRegex.test(phone)) {
    phoneAlert.textContent = 'Invalid phone number format!';
    setTimeout(function () {
      phoneAlert.textContent = '';
    }, 2000);
  }

  //8-20 znakow, co najmniej jedna cyfra, co najmniej jedna duza litera
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,20}$/;

  if (!passwordRegex.test(password)) {
    passwordAlert.textContent = 'Invalid password format!';
    setTimeout(function () {
      passwordAlert.textContent = '';
    }, 2000);
  }

  if (
    emailRegex.test(email) &&
    phoneRegex.test(phone) &&
    passwordRegex.test(password)
  ) {
    form.style.display = 'none';
    const success = document.createElement('div');
    success.classList.add('successbox');
    success.textContent = 'Success!';
    document.body.appendChild(success);
    const reloadBtn = document.createElement('button');
    reloadBtn.classList.add('reload-btn');
    reloadBtn.textContent = 'Reload form';
    success.appendChild(reloadBtn);
    reloadBtn.addEventListener('click', function () {
      location.reload();
    });
  }
});
