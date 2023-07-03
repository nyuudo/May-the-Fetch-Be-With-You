import { useContext } from "react";
import { StarshipsContext } from "../contexts/StarshipsContext";

const ShipCard = () => {
  const { starShips, selectedShip } = useContext(StarshipsContext);
  const currentShip = starShips.find((ship) => ship.name === selectedShip);
  if (!currentShip) {
    return null;
  }

  return (
    <div key={currentShip.name}>
      <h3>{currentShip.name.toUpperCase()}</h3>
      <img
        className="shipImage"
        src={`https://starwars-visualguide.com/assets/img/starships/${currentShip.url.replace(
          /\D/g,
          ""
        )}.jpg`}
        alt="starship"
        onError={(e) => {
          e.currentTarget.src = `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`;
        }}
      />
      <div className="mainDetails">
        <ul className="shipDetails">
          <li>
            <strong>Model:</strong> {currentShip.model}
          </li>
          <li>
            <strong>Starship Class:</strong> {currentShip.starship_class}
          </li>
          <li>
            <strong>Manufacturer:</strong>
            {currentShip.manufacturer}
          </li>
          <li>
            <strong>Cost:</strong> {currentShip.cost_in_credits}
          </li>
          <li>
            <strong>Crew:</strong> {currentShip.crew}
          </li>
        </ul>
        <ul className="shipDetailsList">
          <li>
            <strong>Passenger Capacity:</strong> {currentShip.passengers}
          </li>
          <li>
            <strong>Cargo Capacity:</strong> {currentShip.cargo_capacity}
          </li>
          <li>
            <strong>Consumables:</strong> {currentShip.consumables}
          </li>
          <li>
            <strong>Length:</strong> {currentShip.length}
          </li>
          <li>
            <strong>Maximum Atmospheric Speed:</strong>
            {currentShip.max_atmosphering_speed}
          </li>
          <li>
            <strong>Hyperdrive Rating:</strong> {currentShip.hyperdrive_rating}
          </li>
          <li>
            <strong>Maximum Speed in RealSpace:</strong> {currentShip.MGLT}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ShipCard;
