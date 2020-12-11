import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className={`main-content ${this.props.mainClass}`}>
                    <section className="divider">
                        <div className="container-fluid p-0">
                            <div className="section-title text-center">
                                <div className={`row ${this.props.titleMargin}`}>
                                    <div className="col-md-12">
                                        {!(this.props.hideBorder) ?
                                            <Bounce right cascade>
                                                <h2 className="text-uppercase line-bottom-double-line-centered mt-0">{this.props.titleBefore} <span className="text-theme-colored2"> {this.props.titleAfter}</span></h2>
                                            </Bounce>
                                            :
                                            null
                                        }
                                        <Bounce right cascade>
                                            <p>{this.props.titleDescription}</p>
                                        </Bounce>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Title;
