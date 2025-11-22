function scaleRecipe(ingredients, scale) {
  return ingredients.map(item => {
    const parts = item.split(" ");
    const quantity = Number(parts[0]) * scale;
    
    parts[0] = Number(quantity).toString();
    return parts.join(" ");
  });
}


const x = scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2);

