import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BeerNew from "./BeerNew";
import { Form } from "reactstrap";

describe("<BeerNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BeerNew />
      </BrowserRouter>
    );
  });
  it("Renders the BeerNew page for the user", () => {
    const inputTitle = screen.getByText("Beer Name");
    expect(inputTitle).toBeInTheDocument();
  });
  it("has a form with entries for name, brewer, beer type, description, and image", () => {
    const formName = screen.getByText(/name/i);
    expect(formName.getAttribute("for")).toEqual("name");

    const formBrewer = screen.getByText(/brewer/i);
    expect(formBrewer.getAttribute("for")).toEqual("brewer");

    const formBeerType = screen.getByText(/beer type/i);
    expect(formBeerType.getAttribute("for")).toEqual("beer type");

    const formDescription = screen.getByText(/description/i);
    expect(formDescription.getAttribute("for")).toEqual("description");

    const formImage = screen.getByText(/image/i);
    expect(formImage.getAttribute("for")).toEqual("image");
  });
});
