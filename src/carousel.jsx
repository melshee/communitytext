import React from 'react';
// import PropTypes from './prop-types'
import { UncontrolledCarousel } from 'reactstrap';
import background from './assets/team.jpg'
import background2 from './assets/team2.jpg'
import background3 from './assets/team3.jpg'
import background4 from './assets/team4.jpg'
import spectra from './assets/spectra.jpg'
import health from './assets/fitness.jpg'
import power from './assets/power.jpg'


export default class Carousel extends React.Component {
  //   CarouselCaption.propTypes = {
  //   captionHeader: PropTypes.string,
  //   // captionText: PropTypes.string.isRequired,
  //   cssModule: PropTypes.object
  // };

  constructor(props){
    super(props);
    this.state = {
      community: this.props.community
    };
  }

  render() {
    console.log("responses in carousel: ", this.props.responses);
      var items = [
      {
        src: background,
        altText: 'HI',
        // caption: 'Being able to be at spectra today!',
        header: 'Being able to be at spectra today!',
      },
      {
        src: background2,
        altText: 'Quote 2',
        // caption: 'all the mentors :)',
        header: 'boba!!!',
      },
      {
        src: background3,
        altText: 'Quote 3',
        // caption: 'my parents - for everything',
        header: 'my parents - for everything',
      },
      {
        src: background4,
        altText: 'Quote 3',
        // caption: 'boba!!!',
        header: 'all the mentors :)',
      }
    ];

    var items2 = [
      {
        src: health,
        altText: 'HI',
        // caption: 'Being able to be at spectra today!',
        header: 'walking up the stairs',
      },
      {
        src: health,
        altText: 'Quote 2',
        // caption: 'all the mentors :)',
        header: 'yogaaa',
      },
      {
        src: health,
        altText: 'Quote 3',
        // caption: 'my parents - for everything',
        header: 'drinking lots of water...and boba',
      },
      {
        src: health,
        altText: 'Quote 3',
        // caption: 'boba!!!',
        header: 'stretching every hour or so',
      }
    ];

    var items3 = [
      {
        src: spectra,
        altText: 'HI',
        // caption: 'Being able to be at spectra today!',
        header: 'APIs',
      },
      {
        src: spectra,
        altText: 'Quote 2',
        // caption: 'all the mentors :)',
        header: 'how to work QUICKLY as a team',
      },
      {
        src: spectra,
        altText: 'Quote 3',
        // caption: 'my parents - for everything',
        header: 'tips for technical interviews',
      },
      {
        src: spectra,
        altText: 'Quote 3',
        // caption: 'boba!!!',
        header: 'how yummy samosas are',
      }
    ];

    var items4 = [
      {
        src: power,
        altText: 'HI',
        // caption: 'Being able to be at spectra today!',
        header: 'my hack :D!',
      },
      {
        src: power,
        altText: 'Quote 2',
        // caption: 'all the mentors :)',
        header: 'working with (and learning from) all these amazing people',
      },
      {
        src: power,
        altText: 'Quote 3',
        // caption: 'my parents - for everything',
        header: 'presenting/demoing my project',
      },
      {
        src: power,
        altText: 'Quote 3',
        // caption: 'boba!!!',
        header: 'completing my first hackathon :)',
      }
    ];

    // if(this.props.community === "gratitude"){
    //   items = items;
    // }

    // else 
    if(this.props.community === "health"){
      items = items2;
    }

    else if(this.props.community === "education"){
      items = items3;
    }

    else if(this.props.community === "empowerment"){
      items = items4;
    }


    return(
      <UncontrolledCarousel items={items} />
    );
  }

}

