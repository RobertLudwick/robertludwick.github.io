import React from 'react'
import Card from 'react-bootstrap/Card' 

class InfoCard extends React.Component {
  render () {
    
    return (
        <div className="distance">
          <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.text}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
        
    )
  }
}

export default InfoCard;