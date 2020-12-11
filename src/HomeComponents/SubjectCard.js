import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
class SubjectCard extends Component {
    // redirectTo = () => {
    //     this.props.SubjectLink === true ?
    //         this.props.history.push(`${this.props.SubjectLink}`)
    //         :
    //         null
    // }
    render() {
        return (
            <>
                <Zoom>
                    <div className={`${this.props.SubjectCardColumn} popChat`}>
                        <div className="icon-box bg-white left media border-1px border-theme-colored2 bg-hover-theme-colored mb-30 p-30 pb-20 d-flex-align-center">
                            <a className={`media-left m-auto ${this.props.SubjectIconDirection} flip`} href='javascript:;'>
                                <i className={`${this.props.SubjectIcon} text-theme-colored2 m-auto`} style={{ fontSize: this.props.fontIcon }} />
                            </a>
                        </div>
                        <div className="mt-m-15">
                            <h4 className="media-heading heading popChat" style={{ fontSize: this.props.fontTitle }}>{this.props.SubjectTitle}</h4>
                        </div>
                    </div>
                </Zoom>
            </>
        );
    }
}

export default withRouter(SubjectCard);