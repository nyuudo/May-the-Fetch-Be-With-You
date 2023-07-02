import { render, screen } from "@testing-library/react";
import Ejemplo from "./Ejemplo";

// Just for practicing the testing methods
describe("Test de Ejemplo", () => {
  test("Example renders correctly", () => {
    render(<Ejemplo />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Example renders with a name", () => {
    render(<Ejemplo name="Sergi" />);
    const textElement = screen.getByText("Hello Sergi");
    expect(textElement).toBeInTheDocument();
  });
});
