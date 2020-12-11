import React, { Component } from 'react';
import Title from './title';
import SubjectCard from './SubjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
class SubjectPanel extends Component {
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
                                            titleBefore="WE ACCEPT ALL"
                                            titleAfter=" SUBJECTS"
                                            titleDescription="Our team of expert can handle all major subjects, Talk on Live Chat or Whatsapp and enjoy special discount"
                                            customTitleClass='getTopSubjects'
                                        />
                                        <div className="row overFlow-auto-md thumb-none">
                                            {
                                                window.screen.width >= 786
                                                    ?
                                                    <>
                                                        <div className="col-md-10 m-auto">
                                                            <Swiper
                                                                spaceBetween={10}
                                                                slidesPerView={6}
                                                                loop={true}
                                                                autoplay={{
                                                                    delay: 1500,
                                                                    disableOnInteraction: false
                                                                }}
                                                            >
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-book'
                                                                        SubjectTitle='Accounting'
                                                                        SubjectDescription='Our Best Team For Accounts'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-dollar-sign'
                                                                        SubjectTitle='Business'
                                                                        SubjectDescription='Our Best Team For Business'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-stethoscope'
                                                                        SubjectTitle='Nursing'
                                                                        SubjectDescription='Our Best Team For Nursing'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-user'
                                                                        SubjectTitle='HRM'
                                                                        SubjectDescription='Our Best Team For HRM'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-medkit'
                                                                        SubjectTitle='Medical'
                                                                        SubjectDescription='Our Best Team For Medical'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-people-arrows'
                                                                        SubjectTitle='Anthropology'
                                                                        SubjectDescription='Our Best Team For Anthropology'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-pen'
                                                                        SubjectTitle='Application Letters'
                                                                        SubjectDescription='Our Best Team For Application'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-chart-bar'
                                                                        SubjectTitle='Art &amp; Architecture'
                                                                        SubjectDescription='Our Best Team For Art &amp; Architecture'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-vials'
                                                                        SubjectTitle='Biology'
                                                                        SubjectDescription='Our Best Team For Biology'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-flask'
                                                                        SubjectTitle='Chemistry'
                                                                        SubjectDescription='Our Best Team For Chemistry'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='far fa-file-word'
                                                                        SubjectTitle='Classics English literature'
                                                                        SubjectDescription='Our Best Team For Classics English literature'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-voicemail'
                                                                        SubjectTitle='Communications'
                                                                        SubjectDescription='Our Best Team For Communications'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-network-wired'
                                                                        SubjectTitle='Computer science & IT'
                                                                        SubjectDescription='Our Best Team For Computer science'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-money-check-alt'
                                                                        SubjectTitle='Economics'
                                                                        SubjectDescription='Our Best Team For Economics'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-book'
                                                                        SubjectTitle='Education'
                                                                        SubjectDescription='Our Best Team For Education'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-users'
                                                                        SubjectTitle='Family and consumer science'
                                                                        SubjectDescription='Our Best Team For Family and consumer science'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-camera-retro'
                                                                        SubjectTitle='Film &amp; Theater studies'
                                                                        SubjectDescription='Our Best Team For Film &amp; Theater studies'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-dollar-sign'
                                                                        SubjectTitle='Finance'
                                                                        SubjectDescription='Our Best Team For Finance'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-history'
                                                                        SubjectTitle='History'
                                                                        SubjectDescription='Our Best Team For History'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-gavel'
                                                                        SubjectTitle='Law'
                                                                        SubjectDescription='Our Best Team For Law'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-tasks'
                                                                        SubjectTitle='Management'
                                                                        SubjectDescription='Our Best Team For Management'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fab fa-google-plus-g'
                                                                        SubjectTitle='Marketing'
                                                                        SubjectDescription='Our Best Team For Marketing'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-calculator'
                                                                        SubjectTitle='Mathematics'
                                                                        SubjectDescription='Our Best Team For Mathematics'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-pills'
                                                                        SubjectTitle='Medicine'
                                                                        SubjectDescription='Our Best Team For Medicine'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                            </Swiper>
                                                        </div>
                                                        <div className="col-md-10 m-auto">
                                                            <Swiper
                                                                spaceBetween={10}
                                                                slidesPerView={6}
                                                                loop={true}
                                                                autoplay={{
                                                                    delay: 1500,
                                                                    disableOnInteraction: false
                                                                }}
                                                            >
                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-headphones'
                                                                        SubjectTitle='Music'
                                                                        SubjectDescription='Our Best Team For Music'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fa fa-book'
                                                                        SubjectTitle='Philosophy'
                                                                        SubjectDescription='Our Best Team For Philosophy'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-balance-scale-left'
                                                                        SubjectTitle='Physics'
                                                                        SubjectDescription='Our Best Team For Physics'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-landmark'
                                                                        SubjectTitle='Political science'
                                                                        SubjectDescription='Our Best Team For Political science'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-head-side-virus'
                                                                        SubjectTitle='Psychology'
                                                                        SubjectDescription='Our Best Team For Psychology'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-star-and-crescent'
                                                                        SubjectTitle='Religious studies'
                                                                        SubjectDescription='Our Best Team For Religious studies'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-spell-check'
                                                                        SubjectTitle='Shakespeare'
                                                                        SubjectDescription='Our Best Team For Shakespeare'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-laptop'
                                                                        SubjectTitle='Sociology'
                                                                        SubjectDescription='Our Best Team For Sociology'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-chart-line'
                                                                        SubjectTitle='Statistics'
                                                                        SubjectDescription='Our Best Team For Statistics'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-microchip'
                                                                        SubjectTitle='Technology'
                                                                        SubjectDescription='Our Best Team For Technology'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-cloud-upload-alt'
                                                                        SubjectTitle='Web, High tech'
                                                                        SubjectDescription='Our Best Team For Web, High tech'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-venus-double'
                                                                        SubjectTitle="Women's &amp; gender studies"
                                                                        SubjectDescription="Our Best Team For Women's &amp; gender studies"
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-fist-raised'
                                                                        SubjectTitle='World Affairs'
                                                                        SubjectDescription='Our Best Team For World Affairs'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='far fa-file-word'
                                                                        SubjectTitle='World Literature'
                                                                        SubjectDescription='Our Best Team For World Literature'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-hippo'
                                                                        SubjectTitle='Zoology'
                                                                        SubjectDescription='Our Best Team For Zoology'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <SubjectCard
                                                                        SubjectCardColumn='col-md-12 heightW text-center'
                                                                        SubjectIconDirection='pull-left'
                                                                        SubjectIcon='fas fa-list'
                                                                        SubjectTitle='Other'
                                                                        SubjectDescription='Our Best Team For Other'
                                                                        fontIcon="31px"
                                                                        fontTitle="14px"
                                                                    />
                                                                </SwiperSlide>
                                                            </Swiper>
                                                        </div>
                                                    </>
                                                    :
                                                    <div className="col-md-10 m-auto">
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-book'
                                                            SubjectTitle='Accounting'
                                                            SubjectDescription='Our Best Team For Accounts'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-dollar-sign'
                                                            SubjectTitle='Business'
                                                            SubjectDescription='Our Best Team For Business'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-stethoscope'
                                                            SubjectTitle='Nursing'
                                                            SubjectDescription='Our Best Team For Nursing'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-user'
                                                            SubjectTitle='HRM'
                                                            SubjectDescription='Our Best Team For HRM'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-medkit'
                                                            SubjectTitle='Medical'
                                                            SubjectDescription='Our Best Team For Medical'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-people-arrows'
                                                            SubjectTitle='Anthropology'
                                                            SubjectDescription='Our Best Team For Anthropology'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-pen'
                                                            SubjectTitle='Application Letters'
                                                            SubjectDescription='Our Best Team For Application'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-chart-bar'
                                                            SubjectTitle='Art &amp; Architecture'
                                                            SubjectDescription='Our Best Team For Art &amp; Architecture'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-vials'
                                                            SubjectTitle='Biology'
                                                            SubjectDescription='Our Best Team For Biology'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-flask'
                                                            SubjectTitle='Chemistry'
                                                            SubjectDescription='Our Best Team For Chemistry'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='far fa-file-word'
                                                            SubjectTitle='Classics English literature'
                                                            SubjectDescription='Our Best Team For Classics English literature'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-voicemail'
                                                            SubjectTitle='Communications'
                                                            SubjectDescription='Our Best Team For Communications'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-network-wired'
                                                            SubjectTitle='Computer science & IT'
                                                            SubjectDescription='Our Best Team For Computer science'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-money-check-alt'
                                                            SubjectTitle='Economics'
                                                            SubjectDescription='Our Best Team For Economics'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-book'
                                                            SubjectTitle='Education'
                                                            SubjectDescription='Our Best Team For Education'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-users'
                                                            SubjectTitle='Family and consumer science'
                                                            SubjectDescription='Our Best Team For Family and consumer science'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-camera-retro'
                                                            SubjectTitle='Film &amp; Theater studies'
                                                            SubjectDescription='Our Best Team For Film &amp; Theater studies'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-dollar-sign'
                                                            SubjectTitle='Finance'
                                                            SubjectDescription='Our Best Team For Finance'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-history'
                                                            SubjectTitle='History'
                                                            SubjectDescription='Our Best Team For History'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-gavel'
                                                            SubjectTitle='Law'
                                                            SubjectDescription='Our Best Team For Law'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-tasks'
                                                            SubjectTitle='Management'
                                                            SubjectDescription='Our Best Team For Management'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fab fa-google-plus-g'
                                                            SubjectTitle='Marketing'
                                                            SubjectDescription='Our Best Team For Marketing'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-calculator'
                                                            SubjectTitle='Mathematics'
                                                            SubjectDescription='Our Best Team For Mathematics'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-pills'
                                                            SubjectTitle='Medicine'
                                                            SubjectDescription='Our Best Team For Medicine'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-headphones'
                                                            SubjectTitle='Music'
                                                            SubjectDescription='Our Best Team For Music'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fa fa-book'
                                                            SubjectTitle='Philosophy'
                                                            SubjectDescription='Our Best Team For Philosophy'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-balance-scale-left'
                                                            SubjectTitle='Physics'
                                                            SubjectDescription='Our Best Team For Physics'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-landmark'
                                                            SubjectTitle='Political science'
                                                            SubjectDescription='Our Best Team For Political science'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-head-side-virus'
                                                            SubjectTitle='Psychology'
                                                            SubjectDescription='Our Best Team For Psychology'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-star-and-crescent'
                                                            SubjectTitle='Religious studies'
                                                            SubjectDescription='Our Best Team For Religious studies'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-spell-check'
                                                            SubjectTitle='Shakespeare'
                                                            SubjectDescription='Our Best Team For Shakespeare'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-laptop'
                                                            SubjectTitle='Sociology'
                                                            SubjectDescription='Our Best Team For Sociology'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-chart-line'
                                                            SubjectTitle='Statistics'
                                                            SubjectDescription='Our Best Team For Statistics'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-microchip'
                                                            SubjectTitle='Technology'
                                                            SubjectDescription='Our Best Team For Technology'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-cloud-upload-alt'
                                                            SubjectTitle='Web, High tech'
                                                            SubjectDescription='Our Best Team For Web, High tech'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-venus-double'
                                                            SubjectTitle="Women's &amp; gender studies"
                                                            SubjectDescription="Our Best Team For Women's &amp; gender studies"
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-fist-raised'
                                                            SubjectTitle='World Affairs'
                                                            SubjectDescription='Our Best Team For World Affairs'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='far fa-file-word'
                                                            SubjectTitle='World Literature'
                                                            SubjectDescription='Our Best Team For World Literature'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-hippo'
                                                            SubjectTitle='Zoology'
                                                            SubjectDescription='Our Best Team For Zoology'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                        <SubjectCard
                                                            SubjectCardColumn='col-md-2 heightW text-center'
                                                            SubjectIconDirection='pull-left'
                                                            SubjectIcon='fas fa-list'
                                                            SubjectTitle='Other'
                                                            SubjectDescription='Our Best Team For Other'
                                                            fontIcon="31px"
                                                            fontTitle="14px"
                                                        />
                                                    </div>
                                            }
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

export default SubjectPanel;
