import React, { Component } from 'react';
import Title from '../SharedComponents/title';
class Qualities extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="main-content mb-lg-10">
                    <section className="divider">
                        <div className="container-fluid p-0">
                            <Title
                                hideBorder={true}
                                titleMargin="mt-10 pt-150"
                                mainClass='d-none-md'
                                titleBefore="OUR"
                                titleAfter=""
                                titleDescription=""
                            />
                            <div className="row overFlow-auto-md thumb-none margin-bottom-mobile">
                                <div className="col-md-12 text-center orderNow">
                                    <span>Limited time offer! Get 50% Off</span>
                                </div>
                                <div className="col-md-12 text-center orderPic">
                                    <img src={require('../images/discount/57882.webp')} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Qualities;