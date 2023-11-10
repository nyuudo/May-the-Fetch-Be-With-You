import { render, screen } from "@testing-library/react";
import Example from "./Example";

// Just practice testing syntax
describe("Example Tests", () => {
  test("Example renders corectly", () => {
    render(<Example />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeDefined();
  });
  test("Example renders correctly with name prop", () => {
    render(<Example name="John" />);
    const textElement = screen.getByText(/hello john/i);
    expect(textElement).toBeDefined();
  });
  test("Example renders correctly with empty name prop", () => {
    render(<Example name="" />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeDefined();
  });
  test("Example does not render non-existent text", () => {
    render(<Example />);
    const textElement = screen.queryByText(/goodbye/i);
    expect(textElement).toBeNull();
  });
  test("Example renders correctly with long name prop", () => {
    const longName =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec nisl tincidunt aliquet. Nulla facilisi. Sed id semper nunc. Nullam auctor, nisl id lacinia lacinia, nunc mauris tincidunt mi, id lacinia mauris metus in lectus. Sed euismod, justo a aliquam ultrices, urna mi tincidunt justo, nec aliquet enim risus id nunc. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.";
    render(<Example name={longName} />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeDefined();
  });
});
