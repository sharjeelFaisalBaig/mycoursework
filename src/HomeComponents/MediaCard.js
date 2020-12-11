import React, { Component } from 'react';
class MediaCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const withoutBorder = this.props.withoutBorder;
        if (withoutBorder) {
            return (
                <>
                    <div className={`${this.props.MediaCardColumn} cursorPointer popChat`}>
                        <div>
                            <a className={`media-left pull-${this.props.MediaCardIconDirection} flip popChat`} href='javascript:;'>
                                <i className={`text-theme-colored2 ${this.props.MediaCardIconName}`} />
                                {this.props.imageInstead}
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading heading">{this.props.MediaCardHeading}</h4>
                                <p>{this.props.MediaCardDescription}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className={`${this.props.MediaCardColumn} cursorPointer popChat`}>
                        <div className={`icon-box bg-white left media border-1px border-theme-colored2 bg-hover-theme-colored mb-30 p-30 pb-20 height-adjust ${this.props.customCardClass}`}>
                            <a className={`media-left pull-${this.props.MediaCardIconDirection} flip popChat`} href='javascript:;'>
                                <i className={`text-theme-colored2 ${this.props.MediaCardIconName}`} />
                                {this.props.imageInstead}
                            </a>
                            <div className="media-body popChat">
                                <h4 className="media-heading heading popChat">{this.props.MediaCardHeading}</h4>
                                <p>{this.props.MediaCardDescription}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default MediaCard;