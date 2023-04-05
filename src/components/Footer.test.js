import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  it("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = screen.getByText(/© alpha 2023 \| joey🦘 and cj/i);
    expect(footer).toBeInTheDocument();
  });
});
