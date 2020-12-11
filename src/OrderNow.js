import React, { Component } from 'react';
import OrderFields from './OrderComponents/OrderFields'
class OrderNow extends Component {
    render() {
        return (
            <>

                <div className="container mt-60 mb-20">
                    <div className="row">
                        <div className="col-md-11 m-auto">
                            <OrderFields />
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default OrderNow;
