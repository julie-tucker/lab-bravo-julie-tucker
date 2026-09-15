const signOutButton = document.querySelector('#signOutButton');

signOutButton.addEventListener('click', (event) => {
  event.preventDefault();
  sessionStorage.clear();
  window.location.href = 'signin.html';
});