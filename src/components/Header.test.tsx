import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Logo StarWars", () => {
  test("renders a brand image", () => {
    render(<Header />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  test("renders an image with the alt text: brand", () => {
    render(<Header />);
    const imageElement = screen.getByAltText("brand");
    expect(imageElement).toBeInTheDocument();
  });
});
