import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import defaultImage from "../assets/beerpfp.png";
import { useNavigate } from "react-router-dom";

const BeerNew = ({ createBeer }) => {
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    brewer: "",
    beer_type: "",
    description: "",
    image: { defaultImage },
  });
  const handleChange = (e) => {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createBeer(newBeer);
    navigate("/beerindex");
  };
  return (
    <>
      <h1>Add a Beer</h1>
      <p>Fill out the form to add a new beer to your beer list!</p>
      <Form>
        <FormGroup floating>
          <Input
            id="exampleBeerName"
            name="name"
            placeholder="Beer Name"
            type="text"
            onChange={handleChange}
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
          />
          <Label for="brewer">Brewer</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="exampleBeerType"
            name="beer type"
            placeholder="Beer Type"
            type="text"
            onChange={handleChange}
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
          />
          <Label for="image">Image</Label>
        </FormGroup>{" "}
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
};

export default BeerNew;
