import React from 'react'
import LoginFormContainer from '../session_forms/login_form_container'
import SignupFormContainer from '../session_forms/signup_form_container'


export default class Modal extends React.Component {
  render(){
    let component;
    switch(this.props.currentModal){
      case 'LOGIN_FORM':
        component = <LoginFormContainer />;
        break;
      case 'SIGNUP_FORM':
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    )
  }
}