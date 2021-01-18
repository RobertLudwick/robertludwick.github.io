import React, { useEffect, useState }  from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card' 

import './Styles/profile.css'

class Profile extends React.Component {
 
  render () {
    return (
      <Card >
        <Card.Header>Github</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.user}</Card.Title>
          <Card.Img variant="left" className="profile" src={this.props.avatar} />
          <Card.Text className="profile">
            {this.props.repos}
          </Card.Text>
          <Button variant="primary" className="button1">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Profile;