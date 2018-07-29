import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import background from './team.jpg'
import background2 from './team2.jpg'
import background3 from './team3.jpg'
import background4 from './team4.jpg'


export default class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      community: this.props.community
    };
  }

  render() {
    console.log("res: ", this.props.responses);
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
        header: 'all the mentors :)',
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
        header: 'boba!!!',
      }
    ];

    var items2 = [
      {
        src: background,
        altText: 'HI',
        // caption: 'Being able to be at spectra today!',
        header: 'walking up the stairs',
      },
      {
        src: background2,
        altText: 'Quote 2',
        // caption: 'all the mentors :)',
        header: 'yogaaa',
      },
      {
        src: background3,
        altText: 'Quote 3',
        // caption: 'my parents - for everything',
        header: 'drinking lots of water...and boba',
      },
      {
        src: background4,
        altText: 'Quote 3',
        // caption: 'boba!!!',
        header: 'stretching every hour or so',
      }
    ];

    if(this.props.community === "health"){
      items = items2;
    }


    return(
      <UncontrolledCarousel items={items} />
    );
  }

}

