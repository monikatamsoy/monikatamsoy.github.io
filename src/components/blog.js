import React, {Component} from 'react'
import CarouselImage from './carousel';
import Navbar from './navbar'
class Blog extends Component {
  render() {
    return (<div className="blog">
      <div class="flex-nav">
        <Navbar/>
      </div>
      <div className="flex-carousel">
        <CarouselImage/>

      </div>
    </div>);
  }
}
export default Blog;
