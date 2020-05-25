
import React from 'react'
// import algorithms from './algorithms.json'
import './card.css'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns
} from "reactstrap";

const Algorithm = ({imageUrl, moreDetailsUrl, name, averagePerformance, addedOn, description, pros, cons}) => {
  return (
    <CardColumns  className=" m-3 p-3">
    {algorithms.map( (algorithm, i) => {
        return (
          <Card key= {i}>
            <CardImg top className="algo-img" src={algorithm.imageUrl} />
            <CardBody> 
              <CardTitle>
              <a className="btn-primary"
                href={algorithm.moreDetailsUrl}
              >
                {algorithm.name}
              </a>
              </CardTitle>
              <CardSubtitle>Big O Notation: {algorithm.averagePerformance}</CardSubtitle><br/>
              <CardSubtitle>Date Added: {algorithm.addedOn}</CardSubtitle>
              <CardText>
                {algorithm.description}
              </CardText>
              <CardText>
                <ul>
                <h6>Pros</h6>
                  {algorithm.pros.map((pro, i) => {
                    return (
                      <li key={i}>{pro}</li>
                    )
                  })}
                </ul>
                <ul>
                <h6>Cons</h6>
                  {algorithm.cons.map((con, i) => {
                    return (
                      <li key={i}>{con}</li>
                    )
                  })}
                </ul>
              </CardText>
            </CardBody>
          </Card>
    ) 
    
    })} 
  </CardColumns>
  )
}

export default Algorithm