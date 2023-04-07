import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const BeerShow = ({ beers }) => {
  const { id } = useParams();
  let selectedBeer = beers.find((beer) => beer.id === +id);
  console.log(selectedBeer);

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
              <CardLink href={`/beeredit/${selectedBeer.id}`}>Edit Beer</CardLink>
              <CardLink href="">Another Card Link</CardLink>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default BeerShow;
