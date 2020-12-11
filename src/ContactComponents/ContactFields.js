import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class ContactFields extends Component {
    render() {
        return (
            <>
                <Fade>
                    <div className="main-content">
                        <section className="divider">
                            <div className="container-fluid p-0">
                                <div className="row overFlow-auto-md thumb-none">
                                    <div className="col-md-10 m-auto d-flex-space-even">
                                        <form className="reservation-form mt-20 w-95P" method="post" action="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group mb-md-20">
                                                        <input className="form-control" type="text" id="name" placeholder="Your Name (required)" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group mb-md-20">
                                                        <input className="form-control" type="text" id="email" placeholder="Your Email (required)" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group mb-md-20">
                                                        <input className="form-control" type="text" id="number" placeholder="Your Number(required)" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group mb-md-20">
                                                        <select id="my-select" className="form-control" id="subject">
                                                            <option selected>Subject</option>
                                                            <option value="english">English</option>
                                                            <option value="urdu">Urdu</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group mb-md-20">
                                                        <textarea className="form-control" placeholder="Your Message" rows="10" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group mb-0 mt-10 text-center">
                                                        <button type="submit" className="btn text-white btn-md btn-fore">Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
export default ContactFields;