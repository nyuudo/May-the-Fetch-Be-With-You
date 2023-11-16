import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Nav from "./Nav";
describe("Nav component test", () => {
  test("should render a navigation bar with two buttons", () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
    expect(screen.getByRole("navigation")).toBeDefined();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
  test("should display the navigation bar", () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveStyle("display:block");
  });
});
