import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss';
import {Box} from '../Animation';
import { decodeHTMLEntities, timeSince  } from '../../utils/helpers'
import Truncate from 'react-truncate';

// `https://embed.redditmedia.com/widgets/embed?url=${url}`

export default class ListView extends Component {
    state = {
        toggle: false,
        imgToggle: false
    }
  static propTypes = {
    prop: PropTypes
  }

  toggle = () => {
    this.setState({toggle: !this.state.toggle})
  }

  toggelImage = () => {
    this.setState({ imgToggle: !this.state.imgToggle })
  }
  
  render() {
    const { title, selftext, selftext_html, author, ups, downs, hide, id, created_utc, hidden, thumbnail, num_comments, permalink } = this.props
      
    if (hidden) return <div/>;
    const renderer = (
      <>
        <div className="card list-view">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-lg-9" onClick={this.toggelImage}>
                        <div className="padding-20">
                            <span className="small-view">
                                Posted by  <a rel="noopener noreferrer" target="_blank" href={`https://www.reddit.com/user/${author}`}>u/{author}</a>・{timeSince(created_utc*1000)} ago
                            </span>
                            <div className="title padding-t-15">{title}</div>
                                <div>
                                    {this.state.toggle ? (
                                        <p className="content" dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(selftext_html) }}/>
                                    ) : (
                                        <p className="content">
                                            <Truncate lines={ 3 } ellipsis={ <div>... <a href className="text-primary pointer" onClick={this.toggle}>Read more</a></div>}>
                                                {selftext || selftext_html}
                                            </Truncate>
                                         </p>
                                    )}
                                </div>
                                {/* <p className="content" dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(selftext)}} /> */}
                            <div className="small-view" >
                                {num_comments ? <a rel="noopener noreferrer" target="_blank" href={`https://www.reddit.com/${permalink}`} className="padding-r-10"><i className="far fa-comment"></i> {num_comments} Comments</a>:null}
                                <a href onClick={() => hide(id)} className="padding-r-10"><i className="fas fa-ban"></i> Hide</a>
                                <span className="padding-r-10"><i className="fas fa-share"></i> Share</span>
                            </div>
                        </div>
                        {this.state.imgToggle && !(selftext_html && selftext) ? (
                            <div className="col-12 text-center padding-y-20">
                                <img src={thumbnail} className="img-fluid w-75" alt="・" />
                            </div>
                        ) :null}
                    </div>
                    <div className="col-lg-2  d-none d-sm-block">
                            {!this.state.imgToggle ? (
                                <div className="outer-div">
                                    <div className="inner-div" onClick={this.toggelImage}>
                                        {thumbnail ? (
                                            <img src={thumbnail} className="img-fluid screen text-right" alt="・" />
                                        ) : null}
                                    </div>
                                </div>
                            ) : <div/> }
                    </div>
                    <div className="col-lg-1 d-none d-sm-block padding-0">
                        <div className="outer-div rectangle">
                            <div className="inner-div">
                                <i className="fas fa-chevron-circle-up"></i>
                                    <div className="count">{ups || <>-{downs}</>}</div>
                                <i className="fas fa-chevron-circle-down"></i>
                            </div>
                        </div>                    
                    </div>
                </div>

            </div>
        </div>
        <div className="gap-5"></div>
        </>
    )
      if (this.state.imgToggle || this.state.toggle) return renderer                                  
      return <Box>{renderer}</Box>
  }
}
