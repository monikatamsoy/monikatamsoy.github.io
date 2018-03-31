import React, {Component} from 'react'

class Blogs extends Component {
  render()
  {
    var title = this.props.title || "Title"
    var date = this.props.time || new Date()
    if (typeof(date) == "object") {
      date = date.toDateString()
    }
    var content = this.props.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    return (<div className="blogs-layout">

        <div>
          <div class="uk-card uk-card-hover uk-padding-small uk-card-default uk-card-body">
            <div class="uk-card-header">
              <div class="uk-grid-small blogs uk-flex-middle" uk-grid="uk-grid">
                <div class="uk-width-auto">
                  <img class="uk-border-square" width="70" height="70" src="sunset.jpg"/>
                </div>
                <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">{title}</h3>
                  <p class="uk-text-meta uk-margin-remove-top">
                    <time datetime="2016-04-01T19:00">{date}</time>
                  </p>
                </div>
              </div>
            </div>
            <div class="uk-card-body uk-text-left uk-padding-small">
              <p>{content}</p>
            </div>
            <div class="uk-card-footer">
              <a class="uk-button uk-button-text" href="#modal-full" uk-toggle="target: #modal-full">Read More</a>

            </div>
          </div>
        </div>


        <div id="modal-full" class="uk-modal-full" uk-modal="uk-modal">
          <div class="uk-modal-dialog">
            <button class="uk-modal-close-full uk-close-large" type="button" uk-close="uk-close"></button>
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid="uk-grid">
              <div class="uk-background-cover" uk-height-viewport="uk-height-viewport"></div>
              <div class="uk-padding-large">
                <h1>Headline</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blogs
