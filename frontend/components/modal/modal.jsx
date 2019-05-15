import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'


export default class Modal extends React.Component {
  render(){
    switch(this.props.currentModal){
      case 'LOGIN_FORM':
        return <div>hello</div>
      case 'SIGNUP_FORM':
        return <div>hello</div>
      default:
        return <div></div>
    }
  }
}