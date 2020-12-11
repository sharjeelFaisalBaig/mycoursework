import React, { Component } from 'react'
import Title from '../HomeComponents/title';
import Testimonial from '../HomeComponents/Testimonial'
class Reviews extends Component {
    render() {
        return (
            <>
                <div className="main-content">
                    <section className="divider">
                        <div className="container-fluid p-0 bg-review">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <div className="col-md-12">
                                        <Title
                                            titleMargin="mt-50 clArea"
                                            titleBefore="OUR HAPPY"
                                            customDescClass='text-c-dark'
                                            titleAfter={<><i className='fas fa-smile'></i> CLIENTS</>}
                                            titleDescription="Place Your Order In 4 Super easy Steps"
                                        />
                                        <div className="row mb-20">
                                            <div className="col-md-4">
                                                <Testimonial
                                                    imageSourse='bg-class1'
                                                    testimonialTGNAme={<div className="col-md-12 text-center tagTestimonial">
                                                        Jhon.S Worth
                                                </div>}
                                                >
                                                    <div className="row mt-10 border-stripe-bootm">
                                                        <div className="col-md-6 text-left title-breath fl-md-l">
                                                            <b>Subjects:</b>
                                                        </div>
                                                        <div className="col-md-6 text-right fl-md-r">
                                                            <div className="badge-review">
                                                                Artical Writing
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-10 border-stripe-bootm">
                                                        <div className="col-md-6 text-left title-breath fl-md-l">
                                                            <b>Score:</b>
                                                        </div>
                                                        <div className="col-md-6 text-right fl-md-r">
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fas fa-star-half-alt text-primary ml-10"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 text-center p-40">
                                                        <blockquote>
                                                            Best Assignments Service In UK
                                                        </blockquote>
                                                    </div>
                                                </Testimonial>
                                            </div>
                                            <div className="col-md-4">
                                                <Testimonial
                                                    imageSourse='bg-class2'
                                                    testimonialTGNAme={<div className="col-md-12 text-center tagTestimonial">
                                                        Andy.R Tomson
                                                </div>}
                                                >
                                                    <div className="row mt-10 border-stripe-bootm">
                                                        <div className="col-md-6 text-left title-breath fl-md-l">
                                                            <b>Subjects:</b>
                                                        </div>
                                                        <div className="col-md-6 text-right fl-md-r">
                                                            <div className="badge-review">
                                                                Pharmacy
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-10 border-stripe-bootm">
                                                        <div className="col-md-6 text-left title-breath fl-md-l">
                                                            <b>Score:</b>
                                                        </div>
                                                        <div className="col-md-6 text-right fl-md-r">
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 text-center p-40">
                                                        <blockquote>
                                                            Nothing But The Best & Trust worthy
                                                        </blockquote>
                                                    </div>
                                                </Testimonial>
                                            </div>
                                            <div className="col-md-4">
                                                <Testimonial
                                                    imageSourse='bg-class3'
                                                    testimonialTGNAme={<div className="col-md-12 text-center tagTestimonial">
                                                        Rosy.J Kelvin
                                                </div>}
                                                >
                                                    <div className="row mt-10 border-stripe-bootm">
                                                        <div className="col-md-6 text-left title-breath fl-md-l">
                                                            <b>Subjects:</b>
                                                        </div>
                                                        <div className="col-md-6 text-right fl-md-r">
                                                            <div className="badge-review">
                                                                Chemistry
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-10 border-stripe-bootm">
                                                        <div className="col-md-6 text-left title-breath fl-md-l">
                                                            <b>Score:</b>
                                                        </div>
                                                        <div className="col-md-6 text-right fl-md-r">
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fa fa-star ml-10 text-primary"></i>
                                                            <i className="fas fa-star-half-alt text-primary ml-10"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 text-center p-40">
                                                        <blockquote>
                                                            Best & Affordable
                                                        </blockquote>
                                                    </div>
                                                </Testimonial>
                                            </div>
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

export default Reviews;
