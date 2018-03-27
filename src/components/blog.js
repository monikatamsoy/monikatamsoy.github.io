import React, {Component} from 'react'
import CarouselImage from './carousel';
import Navbar from './navbar'
import Form from './form'
class Blog extends Component {
  render() {
    return (<div className="blog">
      <Form />
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
