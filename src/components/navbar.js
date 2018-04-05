import React, { Component } from 'react'

class Navbar extends Component {

  postBlog = function(e) {
    e.preventDefault()
    var title = document.getElementById("blog-title").value
    var content = document.getElementById("blog-content").value

    if (title && content) {
      var date = new Date()

      var blog = {
        title: title,
        content: content,
        date: date.toDateString()
      }
      var blogs = JSON.parse(window.localStorage.blogs || "[]")
      blogs.push(blog)
      window.localStorage.blogs = JSON.stringify(blogs)
      window.location = "/#!blog"
    } else {
      document.getElementById("error-div").innerHTML = "The above fields are mandatory"
    }
  }

  render() {
    return (
      <div class="uk-offcanvas-content">

        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent ; top: 200">

            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
              <div class="uk-navbar-left uk-hidden@s">
                <ul class="uk-navbar-nav">
                  <a href="#my-id" uk-toggle="target: #off" class="uk-navbar-toggle">
                    <span uk-icon="icon: menu"></span>
                  </a>
                </ul>

              </div>
              <div class="uk-navbar-right uk-visible@s">
                {/* <div class="uk-container uk-container-expand"> */}


                        <ul class="uk-navbar-nav uk-hidden-small">



                            <li class="uk-active"><a href="#">Home</a></li>
                            {/* <li> */}
                                <li><a href="#" class="uk-text-primary" uk-toggle="target: #post-modal">Create Post</a></li>

                            {/* </li> */}
                            <li><a href="/#!logout" class="uk-text-danger">Log Out</a></li>
                        </ul>

                    {/* </div> */}
                </div>
            </nav>

        </div>
<div id="off" class="uk-offcanvas" uk-offcanvas="overlay: true ;mode: push">
  <div class="uk-offcanvas-bar uk-flex uk-flex-column">

            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">

                <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: home"></span> Home</a></li>
                <li><a href="#" uk-toggle="target: #post-modal"><span class="uk-margin-small-right" uk-icon="icon: file-edit"></span> Create Post</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="/#!logout"><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span> Logout</a></li>
            </ul>

        </div>
</div>
{/* <a class="uk-button uk-button-default" href="#modal-center" uk-toggle>Open</a> */}

<div id="post-modal" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

        <button class="uk-modal-close-default" type="button" uk-close></button>
        <legend class="uk-legend uk-text-danger">Post blog</legend>
        <div class="uk-margin">
          <input class="uk-input" id="blog-title" placeholder="Title of your blog" />
        </div>
        <div class="uk-margin">
          <textarea class="uk-textarea" id="blog-content" placeholder="Content of your blog" rows="5"></textarea>
        </div>
        <div class="uk-margin uk-text-muted uk-text-center">
          <span id="error-div"></span>
        </div>
        <div class="uk-margin uk-text-right">
          <button class="uk-button uk-button-default uk-modal-close">Cancel</button> &nbsp;&nbsp;
          <button class="uk-button uk-button-danger post-button" onClick={this.postBlog}>Post</button>
        </div>
    </div>
</div>

    </div>
    );
  }
}
export default Navbar
