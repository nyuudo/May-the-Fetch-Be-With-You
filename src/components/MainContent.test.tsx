import { render, screen, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";
import MainContent from "./MainContent";

describe("MainContent renders as expected", () => {
  test("renders message at loading", () => {
    render(<MainContent />);
    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
  });
  test("renders data correctly", async () => {
    render(<MainContent />);
    await waitFor(() => screen);
    const dataFromAPI = await waitFor(() => screen.findByRole("main"));
    expect(dataFromAPI).toBeInTheDocument();
  });
  test("renders error", async () => {
    server.use(
      rest.get("https://swapi.dev/api/starships/", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<MainContent />);
    const error = await waitFor(() =>
      screen.findByText("Request failed with status code 500")
    );
    expect(error).toBeInTheDocument();
  });
});
