// Types for data from HTTP Request
export type ShipData = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  url: string;
};

export type ShipDataArray = ShipData[];

// Type for the Starships CONTEXT values
export type StarshipsContextType = {
  starShips: ShipDataArray;
  loading: boolean;
  error: string | null;
  selectedShip: string;
  selectShip: (shipNameSelected: string) => void;
  loadMoreStarships: (page: number) => Promise<void>;
  hasMore: boolean;
};

// Type for the AuthContext CONTEXT values
export type AuthContextType = {
  showSignInModal: boolean;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSignIn: () => void;
  emailError: string;
  passwordError: string;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
  showMessage: boolean;
};

// Type for the PROPS that will be provided within the CONTEXT
export type ProviderProps = {
  children: React.ReactNode;
};

// Type for a function that selects an specific ShipCaard
export type SelectShipFunction = (shipNameSelected: string) => void;

// Types for a testing localStorage mock
export type LocalStorageMock = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  clear: () => void;
  removeItem: (key: string) => void;
  getAll: () => Record<string, string>;
};
