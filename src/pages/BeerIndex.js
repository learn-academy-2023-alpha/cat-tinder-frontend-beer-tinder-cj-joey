import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const BeerIndex = ({ beers }) => {
  console.log(beers);
  return (
    <div className="beer-card">
      {beers.map((value, index) => {
        return (
          <Card key={index} style={{ width: "18rem" }}>
            <img alt="beer profile" src={value.image} />
            <CardBody>
              <CardTitle tag="h5">
                <a href={`beershow/${value.id}`}>{value.name} </a>
              </CardTitle>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>{value.brewer}</ListGroupItem>
              <ListGroupItem>{value.beer_type}</ListGroupItem>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
};

export default BeerIndex;
