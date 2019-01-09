import React, { Component } from 'react'
import NotFound from './assets/404.jpg';
import './index.scss';

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="container-fluid ">

            <div className="gap-5"></div>
                
                <div className="container bg-asd">
                <div className="text-center">
                    <img className="img-fluid" src={NotFound} alt="Loading" />
                    <h1>404 Not Found!</h1>
                </div>
                </div>
            </div>
        )
    }
}
