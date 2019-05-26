import React from 'react'

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: []
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
      .then(() => this.props.closeModal())
      .fail(() => this.setState({errors: this.props.errors}))
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value })
  }

  render() {
    const {formType } = this.props;

    const buttonValue = (formType == 'login') ? 'Log In' : 'Sign Up';

    const errorMessages = this.state.errors.map(error => <li key={error}>{error}</li>);

    const formTitle= (formType == 'login') ? 'Log in' : 'Sign up'

    const sessionFormModal = (
      <div className="session-form-outer-container">
        <form className="session-form">
          <div className="session-form-title">{formTitle}</div>
          <div className="session-form-errors">
            <ul>{errorMessages}</ul>
          </div>
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            className='session-form-input'
            placeholder='username' />
          <input
            type='password'
            value={this.state.password}
            onChange={this.update('password')}
            className='session-form-input'
            placeholder='password' />
          <button className="session-form-button" onClick={this.handleSubmit}>{buttonValue}</button>
        </form>
      </div>

    );
    return sessionFormModal;
  }
}