import React, { Component } from 'react';
class Testimonial extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="col-md-12 p-0 cardTestimonial">
                    <div className="testimonial-wrapper text-center">
                        <div className="thumb-flex col-md-12 text-center"> <div className={`img-thumbnail img-circle img-feedBacks ${this.props.imageSourse}`}></div></div>
                        <div className="col-md-12 p-0">{this.props.testimonialTGNAme}</div>
                        <div className="col-md-12 bg-aliblue">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Testimonial;