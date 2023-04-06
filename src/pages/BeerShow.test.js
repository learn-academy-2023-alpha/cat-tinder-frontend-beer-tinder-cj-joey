import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerShow from './BeerShow';
import beers from '../mockBeers'

const renderShow = () => {
  render (
    <MemoryRouter initialEntries={["/beershow/1"]}>
        <Routes>
            <Route path="/beershow/:id" element={<BeerShow beers={beers}/>}/>
        </Routes>
    </MemoryRouter>
  )
}

describe("<BeerShow />", ()=> {
    it("Renders beer description attribute", ()=> {
        renderShow()
        const description = screen.getByText(`Description: ${beers[0].description}`)
        expect(description).toBeInTheDocument()
    })
})


