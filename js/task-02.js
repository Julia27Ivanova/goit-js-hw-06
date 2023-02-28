`use scrict`
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  
const list = document.querySelector(`#ingredients`);const ingredientsEl = ingredients.map(ingredient => {
const ingredientsItem = document.createElement('li');
ingredientsItem.classList.add('item');
ingredientsItem.textContent = ingredient;
  
return ingredientsItem;
  });
  
  ingredientsList.append(...ingredientsEl);
  
  console.log(ingredientsList);


