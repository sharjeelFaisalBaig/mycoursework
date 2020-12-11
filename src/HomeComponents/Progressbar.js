import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Reveal from 'react-reveal/Reveal';
class Progressbar extends Component {
    render() {
        return (
            <>
                <label className="label-progress-head" style={{ color: this.props.headLabelColor }}>{this.props.ProgressLabelTop}</label>
                <label class="label-progress">{this.props.ProgressLabel}</label>
                <Reveal effect="fadeInUp">
                    <ProgressBar animated={true} variant={this.props.ProgressColor} now={`0`} label={`${this.props.ProgressValue}%`} />
                </Reveal>
            </>
        )
    }
}
export default Progressbar;