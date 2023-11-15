import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid fh5co_header_bg">
                    <div className="container p-3">
                        <div className="row">
                            <div className="col-6 fh5co_mediya_center">
                                SENESOZDEL
                            </div>
                            <div className="col-2 fh5co_mediya_center">
                                HOME
                            </div> 
                            <div className="col-2 fh5co_mediya_center">
                                SHOPPING
                            </div> 
                            <div className="col-2 fh5co_mediya_center">
                                CONTACT
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;