import React from 'react'
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap"

const BeerIndex = ({ beers }) => {
  return (
    <div className='beer-card'>
    {beers.map((value, index)=>{
     return(
    <Card key={index} style={{ width: '18rem'}}>
    <img alt="beer profile picture" src={value.image}/>
        <CardBody>
          <CardTitle  tag="h5">
          <a href={`beershow/${value.id}`}>{value.name} </a>
          </CardTitle>
        </CardBody>
        <ListGroup flush>
            <ListGroupItem>
              {value.brewer}
        </ListGroupItem>
          <ListGroupItem>
            {value.beer_type}
          </ListGroupItem>
        </ListGroup>
      </Card>
     )
    })}
 </div>
    
  )
}

export default BeerIndex