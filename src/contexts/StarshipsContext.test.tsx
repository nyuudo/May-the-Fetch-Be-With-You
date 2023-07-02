import { render } from "@testing-library/react";
import { StarshipsProvider, StarshipsContext } from "./StarshipsContext";

describe("StarshipsProvider", () => {
  // test if children element is rendered
  test("renders StarshipsProvider component without crashing", () => {
    render(
      <StarshipsProvider>
        <div>Test</div>
      </StarshipsProvider>
    );
  });
});

describe("StarshipsContext", () => {
  // test if the Context is loaded properly
  test("exports the correct context object", () => {
    expect(StarshipsContext).toHaveProperty("Provider");
    expect(StarshipsContext).toHaveProperty("Consumer");
  });
});
