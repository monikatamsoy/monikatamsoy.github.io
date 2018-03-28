import React, { Component } from 'react'
import  CarouselImage  from '/Users/monikatamsoy/Desktop/React-Blog/blog-app/src/components/carousel.js'
import Navbar from '/Users/monikatamsoy/Desktop/React-Blog/blog-app/src/components/navbar.js'

class Blog extends Component {
  render()
   {
    return ( <div className="blog">

      <div class="flex-nav">
        <Navbar/>
  </div>
  <div className="flex-carousel">
    <CarouselImage/>

    </div>
  </div>

    );
  }
}
export default Blog;
