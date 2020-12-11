import React, { Component } from 'react';
import Rotate from 'react-reveal/Rotate';
class MegaMenu extends Component {
    render() {
        if (window.screen.width >= 786) {
            return (
                <>
                    <Rotate top left when={this.props.display} duration={150} delay={300}>
                        <ul className={`mega-menu-1 ${this.props.customClass}`} id={this.props.Target}>
                            <li>
                                <div className={`row ${this.props.marginTopClass}`}>
                                    {this.props.children}
                                </div>
                            </li>
                        </ul>
                    </Rotate>
                </>
            )
        }else{
            return(
                null
            )
        }
    }
}
export default MegaMenu;