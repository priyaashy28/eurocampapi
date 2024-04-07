import { render, screen } from "@testing-library/react";

import { ErrorBoundary } from "../components/errorBoundary";
import React from "react";

const myError = new Error("Just an error :-)");
const BadComponent = () => {
  throw myError;
};

const GoodComponent = () => <div>Hello world</div>;

describe("ErrorBoundary", () => {
  describe("good component render test", () => {
    it("renders children when everything is fine", async () => {
      render(
        <ErrorBoundary>
          <GoodComponent />
        </ErrorBoundary>
      );
      expect(screen.getByText("Hello world")).toBeInTheDocument();
      expect(
        screen.queryByText("Oops! Something went wrong.")
      ).not.toBeInTheDocument();
    });

    it("shows an error message when an unhandled exception is thrown", () => {
      render(
        <ErrorBoundary>
          <BadComponent />
          <GoodComponent />
        </ErrorBoundary>
      );

      expect(screen.queryByText("Hello world")).not.toBeInTheDocument();
      expect(screen.getByText("An error occurred.")).toBeInTheDocument();
    });
  });
});
