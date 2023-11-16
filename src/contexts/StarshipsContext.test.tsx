import { render, screen } from "@testing-library/react";
import { StarshipsProvider } from "./StarshipsContext";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Context API Tests", () => {
  test("should render children components", () => {
    const children = <div>Test Children</div>;
    render(
      <Router>
        <StarshipsProvider>{children}</StarshipsProvider>
      </Router>
    );
    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });
});
