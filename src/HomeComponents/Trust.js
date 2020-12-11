import React, { Component } from 'react';
import Title from './title';
import MediaCard from './MediaCard'; 
import Zoom from 'react-reveal/Zoom';
class Trust extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="main-content">
                    <section className="divider">
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-md-11 m-auto">
                                    <div className="col-md-12">
                                        <Title
                                            titleMargin="mt-50"
                                            titleBefore="THE SERVICE"
                                            titleAfter=" YOU CAN TRUST"
                                            titleDescription="We Provide 100% Guaranteed Services"
                                        />
                                        <div className="row mb-20">
                                            <div className="col-md-10 m-auto description">
                                                <div className="row mt-20">
                                                    <Zoom top>
                                                        <MediaCard
                                                            MediaCardColumn="col-md-4 popChat"
                                                            MediaCardIconDirection="left"
                                                            imageInstead={<img className='img-media-card' src={require('../images/badges/moneyBack.webp')} alt='' />}
                                                            MediaCardHeading="100% Money Back Guarantee"
                                                            MediaCardDescription="We Provide 100% Money Back Guarantee"
                                                        />
                                                    </Zoom>
                                                    <Zoom top>
                                                        <MediaCard
                                                            MediaCardColumn="col-md-4 popChat"
                                                            MediaCardIconDirection="left"
                                                            imageInstead={<img className='img-media-card' src={require('../images/badges/satisfation.webp')} alt='' />}
                                                            MediaCardHeading="100% Satisfaction Guarantee"
                                                            MediaCardDescription="Your Satisfaction Is Our Priority"
                                                        />
                                                    </Zoom>
                                                    <Zoom top>
                                                        <MediaCard
                                                            MediaCardColumn="col-md-4 popChat"
                                                            MediaCardIconDirection="left"
                                                            imageInstead={<img className='img-media-card' src={require('../images/badges/secure.webp')} alt='' />}
                                                            MediaCardHeading="100% Secure And Reliable"
                                                            MediaCardDescription="No To Worry About Security When Choose Us !"
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
        )
    }
}
export default Trust;