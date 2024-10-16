function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#generated-recipe", {
    strings: "AI generated recipe",
    autoStart: true,
    delay: 20,
  });
}

new Typewriter("#generated-recipe", {
  strings: [
    "Waiting for your ingredient input...",
    "E.g. type your favourite vegetable or fruit 💚",
  ],
  autoStart: true,
  loop: true,
  delay: 220,
});

let recipeFormElement = document.querySelector(
  "#vegetarian-recipe-generator-form"
);
recipeFormElement.addEventListener("submit", generateRecipe);
