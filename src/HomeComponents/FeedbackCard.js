import React, { Component } from 'react'

class FeedbackCard extends Component {
    render() {
        return (
            <>
                {
                    this.props.ignore
                        ?
                        <>
                            <div className={`${this.props.feedBackColumn} cursorPointer`}>
                                    {this.props.children}
                            </div>
                        </>
                        :

                        <div className={`${this.props.feedBackColumn} cursorPointer`}>
                            <div className="cardFeedback">
                                <div className="cardFeedbackImgSection">
                                    <img src={this.props.imageInstead} className={this.props.extraImgClass}></img>
                                </div>
                                <div className="cardFeedbackBody">
                                    <div className="col-md-12 cardFeedbackHeading">{this.props.feedBackHeading}</div>
                                    <div className={`col-md-12 cardFeedbackDesc ${this.props.descClass}`}>{this.props.feedBackDescription}</div>
                                </div>
                                {this.props.feedBackFootDetails ?
                                    <div className="cardFeedbackFoot">
                                        <div className="col-md-12 cardFeedbackFootDetails">{this.props.feedBackFootDetails}</div>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                }
            </>
        )
    }
}

export default FeedbackCard;
