import React, { Component } from 'react';
import Terms from './Terms';
import {
    Link
} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <>
                <footer id="footer" className="footer" data-bg-img="images/footer-bg.png" data-bg-color="#152029">
                    <div className="container pt-70 pb-40">
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <div className="widget dark">
                                    <Link to="/home" className="scrolltop fit">
                                        <img className="mt-5 mb-20" alt="" src={require('./images/new-log-white.webp')} />
                                    </Link>
                                    <p>My-Coursework Commercial, Behind Burrine Street Downtown USA.</p>
                                    <ul className="list-inline mt-5">
                                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-theme-colored2 mr-5" /> <a className="text-gray" href="tel:+(148)-452-110-49">+(148)-452-110-49</a> </li>
                                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-theme-colored2 mr-5" /> <a className="text-gray" href="javascript:;">support@myCoursework.com</a> </li>
                                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-globe text-theme-colored2 mr-5" /> <Link className="text-gray" to="/">www.my-coursework.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <div className="widget dark">
                                    <h4 className="widget-title line-bottom-theme-colored-2">Useful Links</h4>
                                    <ul className="angle-double-right list-border">
                                        <li><Link className="scrolltop" to="/home">Home</Link></li>
                                        <li><Link className="scrolltop" to="/About">About</Link></li>
                                        <li><Link className="scrolltop" to="/contact">Contact</Link></li>
                                        <li><Link className="scrolltop" to="/TermsCondition">Terms Condition</Link></li>
                                    </ul >
                                </div >
                            </div >
                            <div className="col-sm-8 col-md-4">
                                <div className="widget dark">
                                    <h4 className="widget-title line-bottom-theme-colored-2">Disclaimer</h4>
                                    <div className="opening-hours">
                                        <div className="value pull-right text-white closed"> mycoursework.uk is the best academic writing consultancy, provider. We have a thousand's of happy students from worldwide. Who happy with our high-quality service & the all credit goes to our most experienced and professional writing team. </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                    <div className="footer-bottom" data-bg-color="#2b2d3b">
                        <div className="container pt-20 pb-20">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="font-12 text-black-777 m-0 sm-text-center">Copyright ©2020 My-Coursework. All Rights Reserved</p>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="widget no-border m-0">
                                        <ul className="list-inline sm-text-center mt-5 font-12">
                                            <li>
                                                <Link to="/about" className="scrolltop">Who We Are ?</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link to="/contact" className="scrolltop">Deliver us Your Query</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <a href="mailto:support@myCoursework.com">Support</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer >
            </>
        );
    }
}

export default Footer;