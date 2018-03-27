import React, {Component} from 'react';
import Blog from './blog'

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
      <div>
      <a id="triggermod" hidden uk-toggle="target: #modal-center">hh</a>

      <div id="modal-center" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

      <div align="center">
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="username">
          Name:
          <input name="username" type="text"/>
        </label>
        <label htmlFor="password">
          Password:
          <input name="password" type="text"/>
        </label>
        {
          errors && <div style={{
                color: 'red'
              }}>
              Incorrect Credentials
            </div>
        }
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div></div>);
  }

}





export default Form;
