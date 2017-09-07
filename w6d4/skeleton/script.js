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
    const ul = document.querySelectorAll('ul#sf-places')[0];
    const favInput = document
                     .querySelectorAll('input.favorite-input')[0];
    const newFav = favInput.value;
    const li = document.createElement('li');
    li.textContent = newFav;
    ul.appendChild(li);
    favInput.value = '';
  };

  const favoriteForm = document.querySelectorAll('.list-container form')[0];
  favoriteForm.addEventListener("submit", favSubmission);

  // adding new photos

  // --- your code here!



});
