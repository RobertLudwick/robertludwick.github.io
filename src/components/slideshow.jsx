import React  from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Profile from './profile'
import './Styles/component.css'

class Slideshow extends React.Component {
  
  
  render () {
    return (
      <Carousel className="standard">
        <Carousel.Item>
          <Profile user = {this.props.user} repos = {this.props.repos} avatar = {this.props.avatar} />
        </Carousel.Item>
        <Carousel.Item>
          Test
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Slideshow;