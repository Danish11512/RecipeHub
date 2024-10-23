const PublicRecipeCard = (recipe) => {
    const image = recipe.recipe.strMealThumb
    const name = recipe.recipe.strMeal
    console.log(recipe)

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={image}
                    />
                </figure>
            </div>
            <header className="card-header">
                <p className="card-header-title">{name}</p>
            </header>
        </div>
    )

}

export default PublicRecipeCard