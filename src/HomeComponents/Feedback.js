import React, { Component } from 'react';
import Title from './title';
import FeedbackCard from '../HomeComponents/FeedbackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
SwiperCore.use([Autoplay]);
class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsiveOpt: 4
        }

        this.responsiveOptHandle = e => {
            console.log(this.state)
            window.screen.width <= 600
                ?
                this.setState({
                    responsiveOpt: 1
                })
                :
                this.setState({
                    responsiveOpt: 4
                })
        }
        setTimeout(() => {
            this.responsiveOptHandle()
        }, 1000)
    }
    render() {
        return (
            <>

                <div className="main-content bg-feedback">
                    <section className="divider">
                        <div className="container-fluid g-cont p-0">
                            <div className="row">
                                <div className="col-md-11 m-auto">
                                    <div className="col-md-12">
                                        <Title
                                            titleMargin="mt-50"
                                            customTitleClass="text-white"
                                            customDescClass="text-white"
                                            titleBefore="OUR BEST TEAM"
                                            titleAfter=" FOR YOUR SUBJECTS"
                                            titleDescription="Faculty That Fulfills Your Requirement"
                                        />
                                        <div className="row mb-20">
                                            <div className="col-md-12 m-auto description">
                                                <div className="row mt-20">
                                                    <Swiper
                                                        slidesPerView={this.state.responsiveOpt}
                                                        loop={true}
                                                    // autoplay={{
                                                    //     delay: 1500,
                                                    //     disableOnInteraction: false
                                                    // }}
                                                    >
                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (1).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Joseph S. Nelson (MSC)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>Database Design</li>
                                                                                        <li>Python Tenserflow</li>
                                                                                        <li>Data Science With Pandas</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="MSC Computer Science"
                                                            />

                                                        </SwiperSlide>
                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (2).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Archer Mocatta (Ph.D)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>Fertilizer Manufacturing</li>
                                                                                        <li>Genetics Dealing</li>
                                                                                        <li>Inheritence & Relation</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="PhD Biochemistry"
                                                            />

                                                        </SwiperSlide>
                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (3).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Jason H. Mizell (M.Phil)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>Professional Proposal Writing</li>
                                                                                        <li>Official Writing</li>
                                                                                        <li>Thesis Writing</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="M.Phil Literature"
                                                            />

                                                        </SwiperSlide>
                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (5).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Donnie S. Ornellas (BSC)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>Finance Moduling</li>
                                                                                        <li>Module Managemnet</li>
                                                                                        <li>Project Managemnet</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="BSC Accounting"
                                                            />

                                                        </SwiperSlide>
                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (6).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Poulin J. Richard (PhD)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>Bussiness Management</li>
                                                                                        <li>Finance Moduling</li>
                                                                                        <li>Computerized Finance</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="PhD Business & Finance"
                                                            />

                                                        </SwiperSlide>
                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (7).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Justin J. Clough (MSC)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>First Aid Methods</li>
                                                                                        <li>Emergency Handling</li>
                                                                                        <li>Complex Dressing Guides</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="MSC In Pharmacy"
                                                            />

                                                        </SwiperSlide>
                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (8).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Carl J. Nakagawa (MSC)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>Case Managing</li>
                                                                                        <li>Problem Identification</li>
                                                                                        <li>Operating Guides</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="MSC In Medical"
                                                            />

                                                        </SwiperSlide>

                                                        <SwiperSlide>

                                                            <FeedbackCard
                                                                feedBackColumn="col-md-12"
                                                                imageInstead={require('../images/about/feed (10).jpg')}
                                                                descClass="text-center"
                                                                feedBackHeading="Angelica F. Stubbs (MSC)"
                                                                feedBackDescription={
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                Ratings:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-7 text-right">
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                                <i className="fa fa-star ml-5 colorTheme"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-20">
                                                                            <div className="col-md-4">
                                                                                Subject:
                                                                            </div>
                                                                            <div className="col-md-1"></div>
                                                                            <div className="col-md-12 badgeExtras text-center">
                                                                                <strong>
                                                                                    <ul>
                                                                                        <li>Artical Writing</li>
                                                                                        <li>Business Writing</li>
                                                                                        <li>Professional Writing</li>
                                                                                    </ul>
                                                                                </strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row p-20 text-right d-flex-md">
                                                                            <div className="col-md-6">
                                                                                <btn className="btn mr-10  btn-dark mt-m7">Whatsaap &nbsp; <i className="fab fa-whatsapp text-white"></i></btn>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <btn className="btn btn-dark mt-m7 popChat">Chat &nbsp; <i class="fas fa-comments"></i></btn>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                                feedBackFootDetails="MSC English"
                                                            />

                                                        </SwiperSlide>
                                                        {/* <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="Diploma In Nursing"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Stevenson"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In HRM"
                                                                />
                                                            
                                                        </SwiperSlide>


                                                           <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Rutherford"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="far fa-star ml-10 colorTheme"></i>
                                                                            <i className="far fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC Architecture"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Biology"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Chemistry"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="Diploma In MSC English literature"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Communications"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="Diploma In Computer MSC & IT"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Economics"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Education"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="Diploma In Family MSC consumer science"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Pretty"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="far fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="Diploma In MSC Theater studies"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Dalton Boston"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="PhD In Finance"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Jhon Rutherford"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In History"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                    
                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Law"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Management"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Marketing"
                                                                />
                                                            
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Mathematics"
                                                                />
                                                            
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            
                                                                <FeedbackCard
                                                                    feedBackColumn="col-md-12"
                                                                    imageInstead={require('../images/about/feed (3).jpg')}
                                                                    descClass="text-center"
                                                                    feedBackHeading="Brown Angle"
                                                                    feedBackDescription={
                                                                        <>
                                                                            Reviews:
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fa fa-star ml-10 colorTheme"></i>
                                                                            <i className="fas fa-star-half-alt colorTheme ml-10"></i>
                                                                        </>
                                                                    }
                                                                    feedBackFootDetails="MSC In Medicine"
                                                                />
                                                            
                                                        </SwiperSlide> */}
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
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

export default Feedback;