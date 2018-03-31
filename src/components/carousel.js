import React, {Component} from 'react'
// import { Carousel,Button  } from 'react-bootstrap';

class CarouselImage extends Component {
  render() {
    return (

      <div id="mycarousel" class="uk-position-relative uk-padding-remove uk-width-1-1 uk-visible-toggle uk-light" uk-slideshow="animation:push ;animation:fade; autoplay:true; autoplay-interval: 2000 ;pause-on-hover: true">

    {/* <img src="../docs/images/dark.jpg" alt="" uk-cover> */}

        <ul class="uk-slideshow-items">
          <li >
            <div class="away">
            </div>
            <img class=" uk-width-1-1 custom-cover" src="/away.jpg" alt="1" uk-cover />
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Title</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>
          <li>
            <img class=" uk-width-1-1 custom-cover" src="/beach.jpg" alt="2" uk-cover/>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Title</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>
          <li>
            <img class=" uk-width-1-1 custom-cover" src="/bird-3270165_1920.jpg" alt="2" uk-cover/>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Title</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>

          <li>
            <img class=" uk-width-1-1 custom-cover" src="/glass-3276648_1920.jpg" alt="2" uk-cover/>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Title</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>
          <li>
            <img class=" uk-width-1-1 custom-cover" src="/hawk-3274349_1920.jpg" alt="2" uk-cover/>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Title</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>
          <li>
            <img class=" uk-width-1-1 custom-cover" src="/fishing-boat-3241419_1920.jpg" alt="2" uk-cover/>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Title</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>
          <li>
            <img class=" uk-width-1-1 custom-cover" src="/people-3120717_1920.jpg" alt="2" uk-cover/>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Title</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>

        </ul>

        <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous="uk-slidenav-previous" uk-slideshow-item="previous">
          <span uk-icon="icon: chevron-left; ratio: 2"></span>
        </a>
        <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next="uk-slidenav-next" uk-slideshow-item="next">
          <span uk-icon="icon: chevron-right; ratio: 2"></span>
        </a>

      </div>

);
  }
}

export default CarouselImage
