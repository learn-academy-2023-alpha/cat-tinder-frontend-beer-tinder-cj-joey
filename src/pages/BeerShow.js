import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const BeerShow = ({ beers, deleteBeer }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let selectedBeer = beers.find((beer) => beer.id === +id);
  console.log(selectedBeer);

  const handleSubmit = () => {
    deleteBeer(id);
    navigate("/beerindex");
  };

  return (
    <>
      <div className="beer-card">
        {selectedBeer && (
          <Card style={{ width: "18rem" }}>
            <img alt="beer profile" src={selectedBeer.image} />
            <CardBody>
              <CardTitle tag="h5">{selectedBeer.name}</CardTitle>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>{selectedBeer.brewer}</ListGroupItem>
              <ListGroupItem>{selectedBeer.beer_type}</ListGroupItem>
              <ListGroupItem>
                Description: {selectedBeer.description}
              </ListGroupItem>
            </ListGroup>
            <CardBody>
              <CardLink href={`/beeredit/${selectedBeer.id}`}>
                Edit Beer
              </CardLink>
              <CardLink>
                <Button onClick={handleSubmit}> Delete Beer </Button>
              </CardLink>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default BeerShow;
