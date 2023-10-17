const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== '') {
      setIngredientList([...ingredientList, ingredient]);
      setIngredient('');
    }
  };

  return (
    <div>
      <h1>Liste des Ingrédients</h1>
      <div>
        <input
          type="text"
          placeholder="Entrez un ingrédient"
          value={ingredient}
          onChange={handleInputChange}
        />
        <button onClick={handleAddIngredient}>Ajouter</button>
      </div>
      <ul>
        {ingredientList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;