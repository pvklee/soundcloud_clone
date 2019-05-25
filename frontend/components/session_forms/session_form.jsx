import React from 'react'

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
      .then(() => this.props.closeModal());
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value})
  }

  render(){
    const {errors, formType} = this.props;

    const buttonValue = (formType == 'login') ? 'Log In' : 'Sign Up';

    const errorMessages = errors.map(error => <li key={error}>{error}</li>);

    const sessionFormModal = (
      <form className="session-form">
        <div>
          <ul>{errorMessages}</ul>
        </div>
        <input 
          type='text'
          value={this.state.username}
          onChange={this.update('username')}
          className='session-form-input'
          placeholder='username' />
        <br/>
        <input 
          type='password'
          value={this.state.password}
          onChange={this.update('password')}
          className='session-form-input'
          placeholder='password' />
        <br/>
        <button className="session-form-button" onClick={this.handleSubmit}>{buttonValue}</button>
      </form>
    );
    return sessionFormModal;
  }
}