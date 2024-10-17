function displayRecipe(response) {
  console.log("recipe generated");

  new Typewriter("#generated-recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  ingredientInput = document.querySelector("#ingredient-input");
  let apiKey = "c2t7ea4432f52e0o6d402fd54c5bc269";
  let context =
    "You are a vegetarian AI assistant who likes to cook simple vegetarian dishes. The recipes you generate must not contain any meat or seafood. If you are asked to include a non-vegetarian ingredient in your recipe, you will not do so. Be creative and show a new recipe if someone asks for the same ingredient twice. Make sure to display the recipe in a user friendly way by using basic HTML, but do NOT write the word `html` anywhere. Give the recipe a title. If you want to, you can finish by saying something like: `Bon appétit!` and include an emoji of your choice.";
  let prompt = `Please generate a vegetarian recipe. ${ingredientInput.value} must be included as an ingredient in the recipe. The recipe must be divided into step 1, step 2 etc.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  new Typewriter("#generated-recipe", {
    strings: "Generating recipe for you...",
    autoStart: true,
    delay: 100,
  });

  console.log(
    `generating vegetarian recipe containing ${ingredientInput.value}`
  );

  axios.get(apiUrl).then(displayRecipe);
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
