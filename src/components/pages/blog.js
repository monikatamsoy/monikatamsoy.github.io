import React, {Component} from 'react'
import CarouselImage from '/Users/monikatamsoy/Desktop/React-Blog/blog-app/src/components/carousel.js';
import Navbar from '/Users/monikatamsoy/Desktop/React-Blog/blog-app/src/components/navbar.js';
import Blogs from '/Users/monikatamsoy/Desktop/React-Blog/blog-app/src/components/blog-card.js';
class Blog extends Component {
  render() {
    var date = new Date()
    var blogs = JSON.parse(window.localStorage.blogs || "[]")
    var blogsArr = []
    for (var i = 0; i < blogs.length; i++) {
      blogsArr.push(<Blogs title={blogs[i].title} content={blogs[i].content} date={blogs[i].date} />)
    }
    console.log(blogsArr)
    return (
      <div className="blog">
        <div class="blur-back"></div>

      <div class="flex-nav">
        <Navbar/>
      </div>
      <div className="flex-carousel uk-position-relative">
        <div class="blur-background"></div>
        <CarouselImage/>

      </div>
      <br />
      <br />
      <div class="uk-margin uk-position-relative">
        <h1 class="uk-text-center">Drag and Rearrange</h1>
      </div>
      <div id="item" class="uk-child-width-1-3@s blogs uk-text-center uk-padding-small
        uk-margin-large"  uk-sortable uk-grid="uk-grid">


        <Blogs/>

      <Blogs/>
      <Blogs/>
      <Blogs/>

    <Blogs/>
    <Blogs/>
    {blogsArr}
    </div>
    </div>);
  }
}
export default Blog;
