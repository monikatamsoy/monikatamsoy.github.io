import React, { Component } from 'react';
// import {browserHistory, Link,
// withRouter} from 'react-router';
// import { browserHistory } from 'react-router'
// import {
//   Link
// } from 'react-router-dom';
import PropTypes from 'prop-types';
import Blog from './blog'
class ExampleForm1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {value: ''};
  //
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  state ={
    errors:false
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    let username= event.target[0].value;
    let password= event.target[1].value;

    // const value= event.target.element.value
    // const error= this.props.getErrorMessage(value)
    if (username && password){
      window.localStorage.user = username
      console.log('proceed to /blog');
      this.setState({errors: false});
     //  const path = '/blog'
     // browserHistory.push(path)
      // this.setState({value: ''});''
      window.location = '/blog'
    }

    else{
      console.log('show error');
      this.setState({errors: true});
    }
     // this.props.router.push('/blog');
    // browserHistory.push('/blog');
    event.preventDefault();
    // else{
    //   alert('success: ${value}')
    // }
  }

  render() {
    const {errors} = this.state;
    console.log("state", this.state);

    return (
      // const errorfield= this.state;
      <div align="center">
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="username">
          Name:
          <input name="username" type="text"   />
        </label>
        <label htmlFor="password">
          Password:
          <input name="password" type="text"   />
        </label>
        { errors &&
          <div style={{color: 'red'}}>
            Incorrect Credentials
          </div>
        }
        <input type="submit" value="Submit"/>

          {/* <Link to="/blog">Submit</Link> */}


      </form>
      </div>
    );
  }

}

export default ExampleForm1;
