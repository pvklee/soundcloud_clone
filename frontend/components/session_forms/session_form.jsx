import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value})
  }

  render(){
    const {errors, formType} = this.props;

    const buttonValue = (formType == 'login') ? 'Log In' : 'Sign Up';

    const errorMessages = errors.map(error => <li key={error}>{error}</li>);

    const sessionFormModal = (
      <div className="session-form-modal">
        <div>
          <ul>{errorMessages}</ul>
        </div>
        <form class="session-form">
          <input 
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            className='session-form-input'
            placeholder='username' />
          <br/>
          <input 
            type='text'
            value={this.state.email}
            onChange={this.update('email')}
            className='session-form-input'
            placeholder='email' />
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
      </div>
    );
    return sessionFormModal;
  }
}