import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import beers from '../mockBeers'
import BeerIndex from "./BeerIndex";


describe("<BeerIndex />", ()=> {
    it("Renders beer description attribute", ()=> {
        render(
            <BrowserRouter>
                <BeerIndex beers={beers}/>
            </BrowserRouter>
        )
        beers.forEach(beer =>{
            const beerName = screen.getByText(beer.name)
            expect(beerName).toBeInTheDocument()
        })
    })
   })

