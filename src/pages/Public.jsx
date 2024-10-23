import PublicRecipeCard from "../components/PublicRecipeCard"
import Title from "../components/Title"

import usePublicRecipes from '../hooks/usePublicRecipes'

const Public = () => {
    const { data, isLoading } = usePublicRecipes()
    const recipes = data?.meals

    if (!recipes || !Array.isArray(recipes)) {
        return <div>No meals found.</div>
      }
    
    return (
        <>
            <Title />
            <br></br>
            {isLoading
                ?
                <div className="is-centered">
                    <h3 className="is-1 has-text-centered">
                        One moment
                    </h3>
                </div>
                :
                <section className="section">
                    <div className="container">
                        <div className="columns is-multiline">
                            {recipes && recipes.map((recipe, key) => (
                                <div className="column is-one-third" key={key}>
                                    <PublicRecipeCard recipe={recipe} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Public