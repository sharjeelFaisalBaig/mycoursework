import React, { Component } from 'react';
import Title from '../HomeComponents/title'
import { Swiper, SwiperSlide } from 'swiper/react';
import FeedbackCard from '../HomeComponents/FeedbackCard';
class Steps extends Component {
    render() {
        return (
            <>
                <div className="main-content">
                    <section className="divider">
                        <div className="container-fluid p-0 bg-step">
                            <div className="row">
                                <div className="col-md-11 m-auto">
                                    <div className="col-md-12">
                                        <Title
                                            titleMargin="mt-50"
                                            customTitleClass="text-white"
                                            customDescClass="text-white"
                                            titleBefore="PLACE ORDER"
                                            titleAfter=" IN 4 SIMPLE STEPS"
                                            titleDescription="Place Your Order In 4 Super easy Steps"
                                        />
                                        <div className="row mb-20 mt-m-md-82">
                                            <Swiper
                                                slidesPerView={1}
                                                loop={true}
                                            autoplay={{
                                                delay: 1000,
                                                disableOnInteraction: true
                                            }}
                                            >
                                                <SwiperSlide>
                                                    <div className="col-md-10 m-auto mt-60 card-Ignore-mas">
                                                        <div className="row card-Ignore">
                                                            <FeedbackCard
                                                                feedBackColumn="col-md-3 pb-satify"
                                                                ignore={true} >
                                                                <div className="col-md-12 text-right step-img-head">
                                                                    <img src={require('../images/steps/chat.webp')} className="imgStep contact" />
                                                                    {/* <i class="fas fa-comments fa-2x text-white"></i> */}
                                                                </div>
                                                            </FeedbackCard>

                                                            <div className="col-md-9">
                                                                <div className="">
                                                                    <div className="col-md-2 stepNum">1</div>
                                                                    <div className="col-md-12 mt-30 text-left">
                                                                        <h4 className="stepTitle">
                                                                            CONTACT US
                                                                    </h4>
                                                                    </div>
                                                                    <div className="col-md-12 mt-30 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fas fa-question-circle focus-oranG fa-23px"></i>  Simply Discuss Your Tasks with us via LIVE CHAT
                                                                    </div>
                                                                    <div className="col-md-12 mt-10 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fas fa-comments focus-oranG fa-23px"></i>  Live Chat can be access by simply clicking the live Chat icon located at right side
                                                                    </div>
                                                                    <div className="col-md-12 mt-10 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fa fa-hand-o-right focus-oranG fa-23px"></i>  Still Confused ? Simply &nbsp; <a href="javascript:;" className="popChat focus-oranG">Click Here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="col-md-10 m-auto mt-60 card-Ignore-mas">
                                                        <div className="row card-Ignore">
                                                            <FeedbackCard
                                                                feedBackColumn="col-md-3 pb-satify"
                                                                ignore={true} >
                                                                <div className="col-md-12 text-right step-img-head">
                                                                    <img src={require('../images/steps/prestige.webp')} className="imgStep expert" />
                                                                </div>
                                                            </FeedbackCard>

                                                            <div className="col-md-9">

                                                                <div className="">
                                                                    <div className="col-md-2 stepNum">2</div>
                                                                    <div className="col-md-12 mt-30 text-left">
                                                                        <h4 className="stepTitle">
                                                                            GET QUOTED
                                                                        </h4>
                                                                    </div>
                                                                    <div className="col-md-12 mt-30 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fas fa-user focus-oranG fa-23px"></i>  After it we will find the best expert According to your task
                                                                    </div>
                                                                    <div className="col-md-12 mt-10 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="far fa-handshake focus-oranG fa-23px"></i> Thats It ! your task will be assigned to our expert
                                                                    </div>
                                                                    <div className="col-md-12 mt-10 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fab fa-whatsapp focus-oranG fa-23px"></i>  We will also let you to coordinate with our expert via LIVE CHAT or Whatsaap If you want</div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="col-md-10 m-auto mt-60 card-Ignore-mas">
                                                        <div className="card-Ignore">
                                                            <FeedbackCard
                                                                feedBackColumn="col-md-3 pb-satify"
                                                                ignore={true} >
                                                                <div className="col-md-12 text-right step-img-head">
                                                                    <img src={require('../images/steps/debit-card.webp')} className="imgStep expert" />
                                                                </div>
                                                            </FeedbackCard>

                                                            <div className="col-md-9">

                                                                <div className="">
                                                                    <div className="col-md-2 stepNum">3</div>
                                                                    <div className="col-md-12 mt-30 text-left">
                                                                        <h4 className="stepTitle">
                                                                            PAYMENT PROCESS
                                                                        </h4>
                                                                    </div>
                                                                    <div className="col-md-12 mt-30 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fas fa-smile focus-oranG fa-23px"></i>  No Need To Worry About Payments When with us !
                                                                    </div>
                                                                    <div className="col-md-12 mt-10 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="far fa-handshake focus-oranG fa-23px"></i> After Completion a Secure & Convineint Payment Module is provided to you !
                                                                    </div>
                                                                    <div className="col-md-12 mt-10 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fab fa-cc-mastercard focus-oranG fa-23px"></i>  Querious ? No Problem Easy and Secure Payment Methods are available
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="col-md-10 m-auto mt-60 card-Ignore-mas">
                                                        <div className="card-Ignore">
                                                            <FeedbackCard
                                                                feedBackColumn="col-md-3 pb-satify"
                                                                ignore={true} >
                                                                <div className="col-md-12 text-right step-img-head">
                                                                    <img src={require('../images/steps/handshake.webp')} className="imgStep expert" />
                                                                </div>
                                                            </FeedbackCard>

                                                            <div className="col-md-9">

                                                                <div className="">
                                                                    <div className="col-md-2 stepNum">4</div>
                                                                    <div className="col-md-12 mt-30 text-left">
                                                                        <h4 className="stepTitle">
                                                                            RECIEVED <i class="fas fa-check-double focus-oranG"></i>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="col-md-12 mt-30 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fas fa-check-circle focus-oranG fa-23px"></i>  After All We Will Deliver your task according to your deadline
                                                                    </div>
                                                                    <div className="col-md-12 mt-10 text-left d-flex-lg-align-center-all stepDesc">
                                                                        <i class="fas fa-plus-square focus-oranG fa-23px"></i> But Thats Not It ! We will let you coordinate with our experts even after task completion To Discuss Your Task With Them
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default Steps
