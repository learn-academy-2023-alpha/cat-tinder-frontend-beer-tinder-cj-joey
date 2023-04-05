import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
  it("displays 404", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const notFound = screen.getByRole("heading", {
      name: /[404]/,
    });
    expect(notFound).toBeInTheDocument();
  });
});
