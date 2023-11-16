import { useContext } from "react";
import { StarshipsContext } from "../contexts/StarshipsContext";
import InfiniteScroll from "react-infinite-scroller";
import ShipCard from "./ShipCard";

const MainContent = () => {
  const {
    starShips,
    loading,
    error,
    selectedShip,
    selectShip,
    loadMoreStarships,
    hasMore,
  } = useContext(StarshipsContext);

  const handleToggleShipCard = (shipNameSelected: string) => {
    selectShip(shipNameSelected);
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreStarships}
        hasMore={hasMore}
        loader={
          <p className="loading" key={0}>
            Loading more, it is...
          </p>
        }
      >
        {error ? <p>{error}</p> : null}
        {loading ? (
          <p className="loading">Loading Data it is...</p>
        ) : (
          <main>
            {starShips.map((ship) => (
              <article className="shipCards" key={ship.name}>
                <div className="shipInfo">
                  <p className="shipName">{ship.name.toUpperCase()}</p>
                  <p className="shipModel">{ship.model}</p>
                </div>
                {selectedShip === ship.name ? (
                  <ShipCard key={ship.name} />
                ) : null}
                <button
                  className="moreInfo"
                  onClick={() => handleToggleShipCard(ship.name)}
                >
                  {selectedShip === ship.name ? "HIDE INFO" : "MORE INFO"}
                </button>
              </article>
            ))}
          </main>
        )}
      </InfiniteScroll>
    </>
  );
};

export default MainContent;
