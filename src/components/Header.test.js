import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import beerLogo from "../assets/beer-logo.jpg";

describe("<Header />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", beerLogo);
  });
});
