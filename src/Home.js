import React, { Component } from 'react';
import Banner from './HomeComponents/Banner'
import SubjectPanel from './HomeComponents/SubjectPanel';
import Service from './HomeComponents/Service';
import Feedback from './HomeComponents/Feedback';
import InstantContact from './HomeComponents/InstantContact';
import Qualities from './HomeComponents/Qualities';
import Trust from './HomeComponents/Trust';
import Steps from './HomeComponents/Steps';
import Discount from './HomeComponents/Discount';
import Reviews from './HomeComponents/Reviews';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <>
                <Banner />
                <SubjectPanel />
                <Discount />
                <Service />
                <Trust />
                <Feedback />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <div className="col-md-8">
                                <InstantContact />
                            </div>
                            <div className="col-md-4 p-md-0">
                                <Qualities />
                            </div>
                        </div>
                    </div>
                </div>
                <Reviews />
                <Steps />
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

export default Home;
