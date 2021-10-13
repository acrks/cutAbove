import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    this.setState({errors: nextProps.errors})
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let fields;
        let required;
        let emailErrorLabel, 
        usernameErrorLabel, 
        passwordErrorLabel, 
        loginErrorsLabel,
        usernameTakenLabel,
        emailTakenLabel = <label></label>;

    return (
        <div className='session-form login'>
        <form onSubmit={this.handleSubmit}>
        <h3 className='session-form-title'>
        <br />
        <br />
        Log In
        </h3>
        {this.renderErrors()}
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              {usernameErrorLabel}
              {usernameTakenLabel}
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="Log In" />
        </form>
        </div>

    );
  }
}

export default withRouter(LoginForm);