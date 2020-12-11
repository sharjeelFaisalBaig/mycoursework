import React, { Component } from 'react';
class MediaCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.withoutBorder) {
            return (
                <>
                    <div className={`${this.props.MediaCardColumn} cursorPointer`}>
                        <div>
                            <a className={`media-left pull-${this.props.MediaCardIconDirection} flip`} href={this.props.MediaCardRedirect}>
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
                    <div className={`${this.props.MediaCardColumn} cursorPointer`}>
                        <div className="icon-box bg-white left media border-1px border-theme-colored2 bg-hover-theme-colored mb-30 p-30 pb-20 height-adjust">
                            <a className={`media-left pull-${this.props.MediaCardIconDirection} flip`} href={this.props.MediaCardRedirect}>
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
        }
    }
}

export default MediaCard;