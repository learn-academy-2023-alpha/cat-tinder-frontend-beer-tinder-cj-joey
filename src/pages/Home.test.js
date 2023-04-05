import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("<Home />", () => {
  it("displays a welcome", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const home = screen.getByRole("heading", {
      name: /home/i,
    });
    expect(home).toBeInTheDocument();
  });
});
