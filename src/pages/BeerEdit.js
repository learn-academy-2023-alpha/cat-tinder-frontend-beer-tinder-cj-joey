import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";


const BeerEdit = ({beers, updateBeer}) => {
  const navigate = useNavigate()
  const { id } = useParams()
  let currentBeer = beers?.find(beer => beer.id === +id)

  const [editBeer, setEditBeer] = useState({
    name: currentBeer.name,
    brewer: currentBeer.brewer,
    beer_type: currentBeer.beer_type,
    description: currentBeer.description,
    image: currentBeer.image
  })

  const handleChange = (e) => {
    setEditBeer({ ...editBeer, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateBeer(editBeer,currentBeer.id);
    navigate(`/beershow/${id}`);
  };

  return (
    <>
      <h1>{`Update: ${currentBeer.name}`}</h1>
      <Form>
        <FormGroup floating>
          <Input

            id="exampleBeerName"
            name="name"
            placeholder="Beer Name"
            type="text"
            onChange={handleChange}
            value={editBeer.name}
          />
          <Label for="name">Beer Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="exampleBrewer"
            name="brewer"
            placeholder="Brewer"
            type="text"
            onChange={handleChange}
            value={editBeer.brewer}
          />
          <Label for="brewer">Brewer</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="examplebeer_type"
            name="beer_type"
            placeholder="Beer Type"
            type="text"
            onChange={handleChange}
            value={editBeer.beer_type}
          />
          <Label for="beer type">Beer Type</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="exampleDescription"
            name="description"
            placeholder="Description"
            type="text"
            onChange={handleChange}
            value={editBeer.description}
          />
          <Label for="description">Description</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="exampleImage"
            name="image"
            placeholder="Image"
            type="text"
            onChange={handleChange}
            value={editBeer.image}
          />
          <Label for="image">Image</Label>
        </FormGroup>{" "}
        <Button name="submit" onClick={handleSubmit}>Update</Button>
      </Form>
    </>
  );
}

export default BeerEdit