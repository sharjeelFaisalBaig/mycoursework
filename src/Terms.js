import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
class Terms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModalVar: false
        }

    }
    showTerms = () => {
        this.setState({
            showModalVar: true
        })
    }
    hideModal = () => {
        this.setState({
            showModalVar: false
        })
    }
    render() {
        return (
            <>
                <li><a onClick={this.showTerms} href="javascript:;" >Terms and Conditions</a></li>
                <Modal
                    show={this.state.showModalVar}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: 'center' }}>{this.props.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.children}</Modal.Body>
                    <Modal.Footer>
                        <button className="btn text-white btn-md btn-fore" onClick={this.hideModal}>
                            Ok Fine <i class="fas fa-thumbs-up like"></i>
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Terms;
