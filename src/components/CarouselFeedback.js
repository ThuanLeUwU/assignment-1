import React, { Component } from 'react';
import { Carousel as BSCarousel } from 'react-bootstrap';
import { FEEDBACKS } from '../shared/feedback';

class CarouselFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {feedbacks:FEEDBACKS };

    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    const {feedback,image,adress } = this.props;

    return (
      <BSCarousel activeIndex={this.state.index} feedback={this.state.feedbacks} onSelect={this.handleSelect}>
        <BSCarousel.Item>
          <img src={image} />
          <BSCarousel.Caption>
            <h3>{feedback}</h3>
            <p>{adress}</p>
          </BSCarousel.Caption>
        </BSCarousel.Item>
      </BSCarousel>
    );
  }
}

export default CarouselFeedback;