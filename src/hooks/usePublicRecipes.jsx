import { useQuery } from '@tanstack/react-query'


const usePublicRecipes = () => {

  return useQuery({
    queryKey: ['public-recipies'],
    queryFn: () => fetch(import.meta.env.VITE_PUBLIC_RECIPES_URL).then((res) => res.json()),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  })
}

export default usePublicRecipes