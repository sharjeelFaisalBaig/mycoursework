import React, { Component } from 'react';
import SideBar from './AboutComponents/Sidebar';
import Title from './SharedComponents/title';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import MegaCard from './AboutComponents/MegaCard';
import Flip from 'react-reveal/Flip';
class About extends Component {
  render() {
    return (
      <>
        <Fade>
          <div className="container-fluid mt-60 mb-20">
            <div className="row">
              <div className="col-md-11 m-auto text-center">
                <Title
                  titleMargin="mt-50"
                  titleBefore="About"
                  titleAfter=" Us"
                  titleDescription="Quality ! Satisfaction Generates The Target"
                />
              </div>
              <div className="col-md-11 m-auto">
                <div className="row">
                  <Flip left cascade >
                    <div className="col-md-9 br-0">
                      <div className="row d-flex-align-center-md">
                        <MegaCard
                          withoutBorder={false}
                          MegaCardColumn="col-md-5"
                          iconPlacement={false}
                          MegaCardRedirect="javascript:;"
                          Heading="About Instant Dissertation Help"
                          MegaCardHeading="Instant Dissertation Help satisfies the academic needs of the students by providing premium quality dissertation writing services as per the given specifications and instructions. Adhering to the strict norms and standards, we offer quality online dissertation help to all the students who face hardships to get through this phase. Here, we make academic life easier for you!"
                        />
                        <MegaCard
                          withoutBorder={false}
                          MegaCardColumn="col-md-5"
                          iconPlacement={false}
                          MegaCardRedirect="javascript:;"
                          Heading="Our Expert Writers"
                          MegaCardHeading="Our professional team consists of highly skilled and professional dissertation writers who have relevant subject degrees in hand with the strong passion for academic writing. With all their devotion and professionalism, our team of 200+  professional experts ensures that the best dissertation writing service is provided to the scholars looking for assistance in any subject or field."
                        />

                      </div>
                      <div className="row d-flex-align-center-md mt-30">

                        <MegaCard
                          withoutBorder={false}
                          MegaCardColumn="col-md-5"
                          iconPlacement={false}
                          MegaCardRedirect="javascript:;"
                          Heading="24/7 Customer Support"
                          MegaCardHeading="Students who approach us may belong to different time zones, so our 24*7 support team is readily available to serve them as per their convenience. You can reach us through a phone call, online chat, or email and our talented student support executives will help you with all your issues and queries. We take good care of our customers who seek online dissertation help from us by handling each case individually."
                        />
                        <MegaCard
                          withoutBorder={false}
                          MegaCardColumn="col-md-5"
                          iconPlacement={false}
                          MegaCardRedirect="javascript:;"
                          Heading="Our Mission"
                          MegaCardHeading="Our mission is to offer flexible services where students can get whatever they wish for at any time. We don’t just work to tune into the booming academic writing industry; our aim is to provide the best online writing assistance to the stressed-out scholars. We look forward to providing optimal solutions to college-goers seeking help with academics so as to improve their knowledge of the concerned subject as well as grades. At Instant Dissertation Help, we take pride in serving"
                        />
                      </div>
                    </div>
                  </Flip>
                  <Flip top>
                    <div className="col-md-3">
                      <SideBar />
                    </div>
                  </Flip>
                </div>
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
        </Fade>
      </>
    );
  }
}

export default About;
