import React, {Component} from 'react';

import Form from './components/form'
import Blog from './components/blog'
import User from './components/user'
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    switch (window.location.pathname) {
      case "/":
      return (<div className="app">

        <Form/>

      </div>);
        break;
      case "/blog":
        return (<div className="app">
          <Blog/>
        </div>);
        break;
      case "/user":
        return(
          <div className="app">
            <User/>
        </div>);
        break;
      default:
        return 'error'
    }
    // if (window.location.pathname == "/") {
    //   return (<div className="app">
    //
    //     <ExampleForm1/>
    //
    //   </div>);
    // } else if (window.location.pathname == '/blog') {
    //   return (<div className="app">
    //     {/* <h1>{window.localStorage.blog}</h1> */}
    //     <Blog/>
    //   </div>);
    // }

  }
}

export default App;
