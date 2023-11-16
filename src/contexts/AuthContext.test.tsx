import { render, screen } from "@testing-library/react";
import { LocalStorageMock } from "../@types/starships";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

const localStorageMock: LocalStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const setLocalStorage = (id: string, data: Record<string, unknown>) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe("Authentication Tests", () => {
  test("should render children", () => {
    const children = <div>Test Children</div>;
    render(
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    );
    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });
  test("data is added into local storage", () => {
    const mockId = "1";
    const mockJson = { data: "json data" };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
});
