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
      <ul className="shipDetails">
        <li>Model: {currentShip.model}</li>
        <li>Starship Class: {currentShip.starship_class}</li>
        <li>Manufacturer: {currentShip.manufacturer}</li>
        <li>Cost: {currentShip.cost_in_credits}</li>
        <li>Crew: {currentShip.crew}</li>
      </ul>
      <ul className="shipDetailsList">
        <li>Passenger Capacity: {currentShip.passengers}</li>
        <li>Cargo Capacity: {currentShip.cargo_capacity}</li>
        <li>Consumables: {currentShip.consumables}</li>
        <li>Length: {currentShip.length}</li>
        <li>Maximum Atmospheric Speed: {currentShip.max_atmosphering_speed}</li>
        <li>Hyperdrive Rating: {currentShip.hyperdrive_rating}</li>
        <li>Maximum Speed in RealSpace: {currentShip.MGLT}</li>
      </ul>
    </div>
  );
};
export default ShipCard;
