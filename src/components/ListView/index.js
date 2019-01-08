import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss';

export default class ListView extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <div className="card list-view">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <div className="padding-20">
                            <span className="small-view">Posted by u/Joe_Doe・1 hour ago</span>
                            
                            <div className="title padding-t-20">What Page 3 Could Look Like if Women Made It</div>
                            <p className="content">
                                Herbs are fun and easy to grow. When harvested they make even the simplest.
                            </p>
                            <div className="small-view">
                                <span className="padding-r-10"><i className="far fa-comment"></i> 12 Comments</span>
                                <span className="padding-r-10"><i className="fas fa-ban"></i> Hide</span>
                                <span className="padding-r-10"><i className="fas fa-share"></i> Share</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2  d-none d-sm-block">
                            <div className="outer-div">
                                <div className="inner-div">
                                    <img src={'http://placehold.jp/180x150.png'} className="img-fluid screen text-right" alt="placeholder"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-none d-sm-block padding-0">
                        <div className="outer-div rectangle">
                            <div className="inner-div">
                                <i className="fas fa-chevron-circle-up"></i>
                                    <div className="count">25</div>
                                <i className="fas fa-chevron-circle-down"></i>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
