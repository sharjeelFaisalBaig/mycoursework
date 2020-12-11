import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './SharedComponents/title'
import ContactFields from './ContactComponents/ContactFields';
import Map from './ContactComponents/Map';
class Contact extends Component {
    render() {
        return (
            <>

                <div className="container mt-60 mb-20">
                    <div className="row">
                        <div className="col-md-12">
                            <Title
                                titleMargin="mt-50 mb-30"
                                titleBefore="Contact"
                                titleAfter=" Us"
                                titleDescription="Feel Free To Leave Us your Query"
                            />
                        </div>
                        <div className="col-md-12 m-auto">
                            <div className="col-md-8">
                                <ContactFields />
                            </div>
                        </div>
                        <div className="col-md-4 mt-20">
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="container-fluid  p-abs-block">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <Link to='/OrderNow' className="scrolltop"> <button className="btn btn-primary btn-block scrolltop focus-theme">Order Now &nbsp; <i class="fas fa-paper-plane"></i></button> </Link>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Contact;
