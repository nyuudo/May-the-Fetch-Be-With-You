import { createContext, useState, useEffect } from "react";
import {
  ShipDataArray,
  StarshipsContextType,
  ProviderProps,
  SelectShipFunction,
} from "../@types/starships";
import axios from "axios";

export const StarshipsContext = createContext<StarshipsContextType>({
  starShips: [],
  loading: true,
  error: null,
  selectedShip: "",
  selectShip: () => {},
  loadMoreStarships: async () => {},
  hasMore: false,
});

export const StarshipsProvider = ({ children }: ProviderProps) => {
  const [starShips, setStarShips] = useState<ShipDataArray>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedShip, setSelectedShip] = useState("");
  const [hasMore, setHasMore] = useState(true);

  // function to select a Ship according to a match value
  const selectShip: SelectShipFunction = (shipNameSelected) => {
    setSelectedShip((prevSelectedShip) =>
      prevSelectedShip === shipNameSelected ? "" : shipNameSelected
    );
  };

  // First and main HTTP request via AXIOS
  async function fetchStarships() {
    try {
      const res = await axios.get("https://swapi.dev/api/starships/");
      setStarShips(res.data.results);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        setError(error.message);
      } else {
        console.log("unexpected error: ", error);
        setError(error as string | null);
      }
    }
  }
  useEffect(() => {
    fetchStarships();
  }, []);

  // funciton to fetch more data (funcitnoality related to InfiniteScroll component)
  const loadMoreStarships = async (page: number) => {
    if (page > 1) {
      try {
        const res = await axios.get(
          `https://swapi.dev/api/starships/?page=${page}`
        );

        if (res.data.results.length === 0) {
          setHasMore(false);
        } else {
          setStarShips((prevStarShips) => [
            ...prevStarShips,
            ...res.data.results,
          ]);
        }
      } catch (error) {}
    }
  };

  return (
    <StarshipsContext.Provider
      value={{
        starShips,
        loading,
        error,
        selectedShip,
        selectShip,
        loadMoreStarships,
        hasMore,
      }}
    >
      {children}
    </StarshipsContext.Provider>
  );
};
