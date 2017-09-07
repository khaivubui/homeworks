document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const favSubmission = (e) => {
    e.preventDefault();
    const ul = document.querySelector('ul#sf-places');
    const favInput = document
                     .querySelector('input.favorite-input');
    const newFav = favInput.value;
    const li = document.createElement('li');
    li.textContent = newFav;
    ul.appendChild(li);
    favInput.value = '';
  };

  const favoriteForm = document.querySelector('.list-container form');
  favoriteForm.addEventListener("submit", favSubmission);

  // adding new photos

  // --- your code here!
  const photoForm = document.querySelector('div.photo-form-container');
  const toggleForm = (e) => {
    if (photoForm.className === 'photo-form-container') {
      photoForm.className = 'photo-form-container hidden';
    } else {
      photoForm.className = 'photo-form-container';
    }
  };

  const photoSubmission = (e) => {
    e.preventDefault();
    const ul = document.querySelector('ul.dog-photos');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = document.querySelector('input.photo-url-input').value;
    li.appendChild(img);
    ul.appendChild(li);
    document.querySelector('input.photo-url-input').value = '';
  };

  const toggleButton = document.querySelector('button.photo-show-button');
  toggleButton.addEventListener('click', toggleForm);

  photoForm.addEventListener('submit', photoSubmission);
});
