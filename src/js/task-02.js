const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const listItem = ingredients.map((el) => {
  const listItem = document.createElement('li');
  listItem.textContent = el;
  listEl.append(listItem)
});

