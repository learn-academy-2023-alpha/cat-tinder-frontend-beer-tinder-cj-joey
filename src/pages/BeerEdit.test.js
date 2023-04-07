import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerEdit from "./BeerEdit";
import beers from '../mockBeers'

describe("<BeerEdit />",  () => {
  beforeEach(() => {
    render (
    <MemoryRouter initialEntries={["/beeredit/1"]}>
      <Routes>
        <Route path="/beeredit/:id" element={<BeerEdit beers={beers}/>}/>
      </Routes>
    </MemoryRouter>
  )
    })
  it("Renders the BeerEdit page for the user", () => {
    const inputTitle = screen.getByText(`Update: ${beers[0].name}`);
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
