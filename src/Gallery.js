import React, { Component } from 'react';
import { Carousel } from 'antd';


class Gallery extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div><img src="assets/home.png" className="w-100" alt="projet"></img></div>
        <div><img src="assets/restaurants.png" className="w-100" alt="projet"></img></div>
        <div><img src="assets/restaurant.png" className="w-100" alt="projet"></img></div>
      </Carousel>
    );
  }
}

export default Gallery;
