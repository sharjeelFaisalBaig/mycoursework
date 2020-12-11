import React, { Component } from 'react';
import $ from 'jquery';
import {
    Link
} from 'react-router-dom';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: false,
            display1: 'd-none',
            show2: false,
            display2: 'd-none',
            displayNav: 'd-block-xs'
        }
    }
    scrollMenu = (scrTop, divert) => {
        try {
            $('html,body').animate({
                scrollTop: $(`.${scrTop}`).offset().top - divert
            },
                'slow');
        }
        catch {

        }

    }
    hideMenOnMobile = () => {
        if (window.screen.width <= 786) {
            document.querySelector('.showClick').classList.toggle('d-block-xs');
        }

        else {
            return null
        }
    }
    ShowMegaMenu = (displaySpecify, displayProperty, status) => {
        status == true ?
            this.setState({
                [displaySpecify]: true,
                [displayProperty]: 'd-block'

            })
            :
            this.setState({
                [displaySpecify]: false,
                [displayProperty]: 'd-none'
            })
    }
    ShowMenu = () => {
        document.querySelector('.showClick').classList.toggle('d-block-xs');
    }
    HideMenu = () => {
        document.querySelector('.showClick').classList.add('d-block-xs');
    }
    activeNavLink = (e) => {
        const mountActive = document.querySelectorAll('.mount-active')
        for (let i = 0; i < mountActive.length; i++) {
            mountActive[i].classList.remove('active')
        }
        e.target.parentNode.classList.add(`active`)
    }
    render() {
        return (
            <>
                {/* <div id="preloader">
                    <div id="spinner">
                        <div className="preloader-dot-loading">
                            <div className="cssload-loading"><i /><i /><i /><i /></div>
                        </div>
                    </div>
                    <div id="disable-preloader" class="btn btn-default btn-sm">Disable Preloader</div>
                </div> */}
                <div id="wrapper" className="clearfix">
                    {/* preloader */}
                    {/* Header */}
                    <header id="header" className="header modern-header modern-header-theme-colored">
                        <div className="header-top bg-theme-colored2 sm-text-center">

                        </div>
                        <div className="header-middle p-0 bg-light xs-text-center pb-custom">

                        </div>
                        <div className="header-nav">
                            <div className="header-nav-wrapper navbar-scrolltofixed">
                                <div className="">
                                    <nav id="menuzord" className="menuzord yellow d-block-md">
                                        <ul className="pull-left sm-pull-nonelist-inline nav-side-icon-list w-100 d-none-lg">
                                            <li onClick={this.ShowMenu}>
                                                <i class="fa fa-bars fa-2x" style={{ color: "#efba12" }}></i>
                                            </li>
                                        </ul>
                                        <ul className="pull-right sm-pull-nonelist-inline nav-side-icon-list w-100">
                                            <li>
                                                <Link to="/" className="scrolltop"><img src={require('./images/new-logo.webp')} className="logo-img-boss" alt="" /></Link>
                                            </li>
                                        </ul>
                                        <ul className="sm-pull-nonelist-inline nav-side-icon-list w-100 d-none">
                                            <li className="review">
                                                <div className="col-md-12 text-white">
                                                    Reviews:
                                                    <i class="fa fa-star ml-10"></i>
                                                    <i class="fa fa-star ml-10"></i>
                                                    <i class="fa fa-star ml-10"></i>
                                                    <i class="fa fa-star ml-10"></i>
                                                    <i class="fa fa-star-half ml-10"></i>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className={`menuzord-menu onepage-nav showClick li-ml-extends ${this.state.displayNav} `} onBlur={this.HideMenu}>
                                            <li className="ml-auto mount-active"><Link onClick={this.hideMenOnMobile} to="/home" className="scrolltop">Home</Link></li>
                                            <li className="mount-active cursorPointer" onClick={this.hideMenOnMobile}><a onClick={() => this.scrollMenu('getTopSubjects', 150)}>Subjects</a></li>
                                            <li className="mount-active cursorPointer" onClick={this.hideMenOnMobile}><a onClick={() => this.scrollMenu('getTopServices', (-50))}>Services</a></li>
                                            <li className="mount-active cursorPointer" onClick={this.hideMenOnMobile}><a onClick={() => this.scrollMenu('clArea', (90))}>Reviews</a></li>
                                            <li onMouseOver={() => this.ShowMegaMenu('show2', 'display2', false)} className="mount-active"><Link onClick={this.hideMenOnMobile} to="/about" className="scrolltop">About</Link></li>
                                            <li className="mount-active cursorPointer"><Link onClick={this.hideMenOnMobile} to="/contact" className="scrolltop">Contact Us</Link></li>
                                            <li className='phoneLi start b-generic cursorPointer d-none-md'> <a href="tel:+(148)-452-110-49"><i class="fa fa-phone text-white"></i></a></li>
                                            <li className='phoneLi b-generic cursorPointer d-none-md'> <a href="mailto:support@myCoursework.com"><i class="fa fa-envelope text-white"></i></a></li>
                                            <li className='phoneLi b-generic cursorPointer d-none-md'> <a href="mailto:support@myCoursework.com"><i class="fab fa-whatsapp"></i></a></li>
                                            {/* <li><i class="fa fa-phone-square text-white"></i></li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* Start main-content */}
                </div>

            </>
        );
    }
}

export { Navigation };