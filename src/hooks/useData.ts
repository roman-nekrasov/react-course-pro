import { useState, useEffect } from "react";
import req from "../utils/request";

const usePokemons = <T,>() => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, selIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(()=> {
    const getPokemons = async () => {

      try {
        const result = await req<T>("getPokemons")
        setData(result)
      } catch (e) {
        setIsError(true)
      } finally {
        selIsLoading(false)
      }
    }
    getPokemons()
  }, [])

  return {
    data,
    isLoading,
    isError
  }
}

export default usePokemons