import React, {Component} from 'react';


class Form extends React.Component {

  state = {
    errors: false
  }
  handleSubmit = (event) => {
    event.preventDefault()
    let username = event.target[0].value;
    let password = event.target[1].value;
// checking for non-empty values
    if (username && password) {
      // window.localStorage.user = username
      console.log('proceed to /blog');
      this.setState({errors: false});
      window.location = '/blog'
    } else {
      console.log('show error');
      this.setState({errors: true});
    }
    event.preventDefault();

  }

  render() {
    const {errors} = this.state;
    console.log("state", this.state);

    return (
      <div className="formbox">
      <div align="center">
      <form onSubmit={this.handleSubmit}>
        <h1>Login to Continue</h1>
        <label htmlFor="username">
          Name:
          <input name="username" type="text"/>
        </label>
        <label htmlFor="password">
          Password:
          <input name="password" type="password"/>
        </label>
        {
          errors && <div style={{
                color: 'red'
              }}>
              Incorrect Credentials
            </div>
        }
        <input type="submit" align="center" value="Submit"/>
      </form>
      </div>
    </div>);
  }

}

export default Form;
