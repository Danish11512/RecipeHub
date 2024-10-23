import Title from "../components/Title"

import usePublicRecipes from '../hooks/usePublicRecipes'

const Public = () => {
    const {data, isLoading} = usePublicRecipes()

    console.log(data)
    return (
        <Title />
    )
}

export default Public