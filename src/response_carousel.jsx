import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import bg0_gratitude from './assets/gratitude/team0.jpg'
import bg1_gratitude from './assets/gratitude/groupPhoto.jpg'
import bg2_gratitude from './assets/gratitude/team1.jpg'
import bg3_gratitude from './assets/gratitude/team2.jpg'
import bg4_gratitude from './assets/gratitude/team3.jpg'
import bg5_gratitude from './assets/gratitude/team4.jpg'

// import spectra from './assets/spectra.jpg'
// import health from './assets/fitness.jpg'
// import power from './assets/power.jpg'


export default class ResponseCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    this.state = { 
      community: this.props.community,
      activeIndex: 0 
    };
    this.items = [];
    this.gratitudeBackgrounds = [bg0_gratitude, bg1_gratitude, bg2_gratitude, bg3_gratitude, bg4_gratitude, bg5_gratitude]
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ 
      activeIndex: nextIndex 
    });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ 
      activeIndex: nextIndex 
    });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ 
      activeIndex: newIndex 
    });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  render() {
    var responses = this.props.responses;
    const { activeIndex } = this.state;     
    this.items = responses.map( (r,i) => {
      return {
        src: this.gratitudeBackgrounds[i % this.gratitudeBackgrounds.length],
        header: r.response,
        caption: r.user,
        altText: r.response
      };
    })

    const slides = this.items.map((item) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.header}>
          <img src={item.src} alt={item.altText}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });



    return(
      <div className="response-carousel">
        <Carousel activeIndex={activeIndex} next={this.next}previous={this.previous}>
          <CarouselIndicators items={this.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }

}

