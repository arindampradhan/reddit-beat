import React, { Component } from 'react'
import NotFound from './assets/404.png';
import '../Loader/index.scss';

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="img-fluid middle" src={NotFound} alt="Loading" />
            </div>
        )
    }
}
