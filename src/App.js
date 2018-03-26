import React, { Component } from 'react';

// import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router'
import ExampleForm1 from './components/form'
import Blog from './components/blog'
// import createHistory from 'history/createBrowserHistory'
// console.log(window);
class App extends Component {
  render() {
    if (window.location.pathname=="/") {
      return(


        <div className="app">

            <ExampleForm1/>

          {/* <Blog /> */}
          {/* <Switch>
          <Route exact path='/' component={ExampleForm1} />
          <Route exact path='/blog' component={Blog} />
          </Switch> */}

        </div>



      );
    } else if(window.location.pathname=='/blog'){
      return(


        <div className="app">
<h1>{window.localStorage.blog}</h1>
            <Blog/>

          {/* <Blog /> */}
          {/* <Switch>
          <Route exact path='/' component={ExampleForm1} />
          <Route exact path='/blog' component={Blog} />
          </Switch> */}

        </div>



      );
    }

  }
}

export default App;
