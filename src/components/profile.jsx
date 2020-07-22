import React, { useEffect, useState }  from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card' 

class Profile extends React.Component {
 
  render () {
    return (
        <Card className="text-center">
        <Card.Header>Github</Card.Header>
        <Card.Body>
    <Card.Title>{this.props.user}</Card.Title>
          <Card.Text>
            {this.props.repos}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    )
  }
}

export default Profile;