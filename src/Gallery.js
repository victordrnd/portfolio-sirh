import React, { Component } from 'react';
import { Carousel } from 'antd';


class Gallery extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div><img src="assets/sirh_1.png" className="w-100" alt="projet"></img></div>
        <div><img src="assets/sirh_2.png" className="w-100" alt="projet"></img></div>
        <div><img src="assets/sirh_3.png" className="w-100" alt="projet"></img></div>
      </Carousel>
    );
  }
}

export default Gallery;
