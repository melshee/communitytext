import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import background from './background.jpg'

const items = [
  {
    src: background,
    altText: 'Quote 1',
    caption: '',
    header: 'Quote 1'
  },
  {
    src: background,
    altText: 'Quote 2',
    caption: '',
    header: 'Quote 2'
  },
  {
    src: background,
    altText: 'Quote 3',
    caption: '',
    header: 'Quote 3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
