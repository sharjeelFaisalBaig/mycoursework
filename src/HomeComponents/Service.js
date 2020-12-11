import React, { Component } from 'react';
import Title from './title';
import MediaCard from './MediaCard';
import Zoom from 'react-reveal/Zoom';
class Service extends Component {
    render() {
        return (
            <>
                <div className="main-content bg-service">
                    <section className="divider">
                        <div className="container-fluid g-cont p-0">
                            <div className="row">
                                <div className="col-md-11 m-auto">
                                    <div className="col-md-12">
                                        <Title
                                            titleMargin="mt-80"
                                            customTitleClass="text-white"
                                            customDescClass="text-white"
                                            titleBefore="WHAT WE ARE "
                                            titleAfter=" KNOWN FOR"
                                            customDescClass="text-white"
                                            titleDescription="To get instant service, you have to fill up the form on our website with your updated personal details."
                                            customTitleClass='getTopServices text-white'
                                        />
                                        <div className="row mb-20">
                                            <div className="col-md-10 m-auto description">
                                                <div className="row mt-20">
                                                    <Zoom>
                                                        <MediaCard
                                                            MediaCardColumn="col-md-4 popChat"
                                                            MediaCardIconDirection="left"
                                                            imageInstead={<img className='img-media-card' src={require('../images/badges/team.webp')} alt='' />}
                                                            customCardClass='b-0'
                                                            MediaCardHeading="Best Team"
                                                            MediaCardDescription="We Provide Best Team For Your Assignments"
                                                        />
                                                    </Zoom>
                                                    <Zoom>
                                                        <MediaCard
                                                            MediaCardColumn="col-md-4 popChat"
                                                            MediaCardIconDirection="left"
                                                            imageInstead={<img className='img-media-card' src={require('../images/badges/clock-badge.webp')} alt='' />}
                                                            customCardClass='b-0'
                                                            MediaCardHeading="Best Time Delivery"
                                                            MediaCardDescription="Delivery In Best Time Is One Of Our Quality"
                                                        />
                                                    </Zoom>
                                                    <Zoom>
                                                        <MediaCard
                                                            MediaCardColumn="col-md-4 popChat"
                                                            MediaCardIconDirection="left"
                                                            imageInstead={<img className='img-media-card' src={require('../images/badges/dollar-badge.webp')} alt='' />}
                                                            customCardClass='b-0'
                                                            MediaCardHeading="Best Prices We Offer"
                                                            MediaCardDescription="We Offer Best Services In Uncomparable Prices"
                                                        />
                                                    </Zoom>
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

export default Service;
