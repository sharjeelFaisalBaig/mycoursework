import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import MediaCard from '../SharedComponents/MediaCard'
class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Fade>
                    <div className="row border-left-theme-md">
                        <div className="col-md-12 p-10">
                            <MediaCard
                                MediaCardColumn="col-md-12"
                                MediaCardIconDirection="left"
                                MediaCardRedirect="javascript:;"
                                MediaCardIconName="fas fa-clock fa-2x"
                                withoutBorder={true}
                                MediaCardHeading="On Time Delivery"
                                MediaCardDescription="There is no deadline that can stop our writers from delivering quality assignments to the students."
                            />
                            <MediaCard
                                MediaCardColumn="col-md-12 mt-30"
                                MediaCardIconDirection="left"
                                MediaCardRedirect="javascript:;"
                                MediaCardIconName="fas fa-file-alt fa-2x"
                                withoutBorder={true}
                                MediaCardHeading="Plagiarism Free Work"
                                MediaCardDescription="Get authentic and unique assignments by using our 100% plagiarism-free services"
                            />
                            <MediaCard
                                MediaCardColumn="col-md-12 mt-30"
                                MediaCardIconDirection="left"
                                MediaCardRedirect="javascript:;"
                                MediaCardIconName="fas fa-stopwatch fa-2x"
                                withoutBorder={true}
                                MediaCardHeading="24 X 7 Live Help"
                                MediaCardDescription="The experienced team of Live web tutors has got your back at all times of the day. Get connected with our customer support executives to receive instant and live solutions for your assignment problems."
                            />
                            <MediaCard
                                MediaCardColumn="col-md-12 mt-30"
                                MediaCardIconDirection="left"
                                MediaCardRedirect="javascript:;"
                                MediaCardIconName="fas fa-book fa-2x"
                                withoutBorder={true}
                                MediaCardHeading="Services For All Subjects"
                                MediaCardDescription="We can build quality assignments in the subjects you're passionate about. Be it Engineering and Literature or Law and Marketing we have an expert writer for all."
                            />
                            <MediaCard
                                MediaCardColumn="col-md-12 mt-30"
                                MediaCardIconDirection="left"
                                MediaCardRedirect="javascript:;"
                                MediaCardIconName="fas fa-thumbs-up fa-2x"
                                withoutBorder={true}
                                MediaCardHeading="Best Price Guarantee"
                                MediaCardDescription="Get premium service at a pocket-friendly rate. At livewebtutors, we understand the tight budget of students and thus offer our services at highly affordable prices."
                            />
                        </div>
                    </div>
                </Fade>
            </>
        );
    }
}

export default SideBar;
