import React, { useEffect, useState }  from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Profile from './profile'

class Slideshow extends React.Component {
  
  
  render () {
    return (
        <Carousel>
  <Carousel.Item>
      <Profile user = {this.props.user} repos = {this.props.repos} avatar = {this.props.avatar} />
  </Carousel.Item>
</Carousel>
    )
  }
}

export default Slideshow;