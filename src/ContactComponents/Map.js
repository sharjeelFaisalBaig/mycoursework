import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import Title from '../SharedComponents/title'
class Map extends Component {
    render() {
        return (
            <>
                <Fade>
                    <div className="main-content">
                        <section className="divider">
                            <div className="container-fluid p-0">
                                {/* <Title
                                    titleMargin="mt-50"
                                    titleBefore="We Are"
                                    titleAfter=" Located"
                                /> */}
                                <div className="row overFlow-auto-md thumb-none">
                                    <div className="col-md-12">
                                        <div className="mapouter"><div className="gmap_canvas"><iframe height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://thevpndeal.com/private-internet-access-coupon/" /></div><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}" }} /></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fade>
            </>
        )
    }
}
export default Map;