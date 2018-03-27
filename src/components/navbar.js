import React, { Component } from 'react'
import User from './user'
class Navbar extends Component {
  render() {
    return (
      <div class="uk-section-primary uk-preserve-color">

        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">

            <nav class="uk-navbar-container">
              <div className="uk-navbar-right">
                <div class="uk-container uk-container-expand">


                        <ul class="uk-navbar-nav ;uk-hidden-small ">
                          <a href="#" class="uk-navbar-toggle ;uk-visible-small">
                             </a>

                            <li class="uk-active"><a href="#">Home</a></li>
                            <li>
                                <a href="/user">My Account</a>

                            </li>
                            <li><a href="#">About</a></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>



    </div>
    );
  }
}
export default Navbar
