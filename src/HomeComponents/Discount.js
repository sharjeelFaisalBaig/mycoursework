import React, { Component } from 'react'

class Discount extends Component {
    render() {
        return (
            <>
                <div className="main-content bg-advertise">
                    <section className="divider">
                        <div className="container-fluid g-cont p-0">
                            <div className="row">
                                <div className="col-md-1 direct-left-disc"></div>
                                <div className="col-md-6 disc-balance">
                                    <div className="col-md-12 mb-51">
                                        <div className="col-md-12 text-left text-white disc-title">
                                            Get The Best Discounts Here
                                        </div>
                                        <div className="col-md-12 text-left text-white disc-desc">
                                            <button className="btn btn-discount popChat" type="button">Get Discount</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-10 text-center">
                                    {/* <div className="withDiscount">Avail Upto</div> */}
                                    <img src={require('../images/discount/dis.png')} className="img-dicount" />
                                    {/* <div className="img-dicount">
                                        50% Off
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default Discount
