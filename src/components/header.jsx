import React from 'react'
import Card from 'react-bootstrap/Card' 

class Header extends React.Component {
  render () {
    
    return (
        <Card className="bg-dark text-white">
  <Card.Img src="/header.jpg"/>
  <Card.ImgOverlay>
    <Card.Title>Full Stack Developer</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    )
  }
}

export default Header;