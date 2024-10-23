import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const usePublicRecipes = () => {

  const queryFn = async () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomIndex = Math.floor(Math.random() * alphabet.length)

    const response = await axios.get(import.meta.env.VITE_PUBLIC_RECIPES_URL + alphabet.charAt(randomIndex))
    return response.data
  }

  return useQuery({
    queryKey: ['public-recipies'],
    queryFn,
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  })
}

export default usePublicRecipes