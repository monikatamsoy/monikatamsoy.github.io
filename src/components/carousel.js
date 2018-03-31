import React, {Component} from 'react'
// import { Carousel,Button  } from 'react-bootstrap';

class CarouselImage extends Component {
  render() {
    return (<div class="uk-child-width-1-1@m" uk-grid="uk-grid">

      <div id="mycarousel" class="uk-position-relative uk-padding-remove uk-visible-toggle uk-light" uk-slideshow="animation:slide ;animation:fade; autoplay:true; autoplay-interval: 2000 ;pause-on-hover: true">

    {/* <img src="../docs/images/dark.jpg" alt="" uk-cover> */}

        <ul class="uk-slideshow-items">
          <li >
            <img class="custom-cover" src="/flower.jpg" alt="1" uk-cover />
          </li>
          <li>
            <img class="custom-cover" src="/sunset.jpg" alt="2" uk-cover/>
          </li>

        </ul>

        <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous="uk-slidenav-previous" uk-slideshow-item="previous">
          <span uk-icon="icon: chevron-left; ratio: 2"></span>
        </a>
        <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next="uk-slidenav-next" uk-slideshow-item="next">
          <span uk-icon="icon: chevron-right; ratio: 2"></span>
        </a>

      </div>

    </div>);
  }
}

export default CarouselImage
