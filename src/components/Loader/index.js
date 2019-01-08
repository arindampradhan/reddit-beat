import React, { Component } from 'react'
import Reddit2 from './assets/reddit2.gif';
import './index.scss'

export default class PageLoader extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="img-fluid middle" src={Reddit2} alt="Loading"/>
      </div>
    )
  }
}
