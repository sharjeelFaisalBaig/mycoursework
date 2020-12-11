import React, { Component } from 'react';
class MegaCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const withoutBorder = this.props.withoutBorder;
        if (withoutBorder) {
            return (
                <>
                    <div className={`${this.props.MegaCardColumn} cursorPointer`}>
                        <div>
                            {this.props.iconPlacement ?
                                <a className={`media-left pull-${this.props.MegaCardIconDirection} flip`} href={this.props.MegaCardRedirect}>
                                    <i className={`text-theme-colored2 ${this.props.MegaCardIconName}`} />
                                    {this.props.imageInstead}
                                </a>
                                :
                                <div className="p3 border-left-theme">
                                    <a href={this.props.MegaCardRedirect}>
                                        <h2>{this.props.Heading}</h2>
                                    </a>
                                </div>
                            }
                            <div className="media-body p3">
                                <h4 className="megaDesc">{this.props.MegaCardHeading}</h4>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className={`${this.props.MegaCardColumn} cursorPointer`}>
                        <div className="icon-box bg-white left media border-1px border-theme-colored2 bg-hover-theme-colored mb-30 p-30 pb-20 br-megaCard height-adjust-megaCard">
                            {this.props.iconPlacement ?
                                <a className={`media-left pull-${this.props.MegaCardIconDirection} flip`} href={this.props.MegaCardRedirect}>
                                    <i className={`text-theme-colored2 ${this.props.MegaCardIconName}`} />
                                    {this.props.imageInstead}
                                </a>
                                :
                                <div className="p3 border-left-theme blt-blb">
                                    <a href={this.props.MegaCardRedirect}>
                                        <h2>{this.props.Heading}</h2>
                                    </a>
                                </div>
                            }
                            <div className="media-body p3">
                                <h4 className="megaDesc">{this.props.MegaCardHeading}</h4>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default MegaCard;