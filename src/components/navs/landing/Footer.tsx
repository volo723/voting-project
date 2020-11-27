import React from 'react';
import { Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends React.Component {

    render() {

        return (
            <div className="footer">
                <Row>
                    <Col>
                        <div style={{fontSize: '18px'}}>Do you have questions?</div>
                        <div style={{color: '#248BF2', marginTop: '10px'}}>help@protodao.com</div>
                    </Col>
                    <Col className="text-right">
                        <img src="assets/images/sharp.svg" width="20px" alt=""/>&nbsp;&nbsp;&nbsp;
                        <img src="assets/images/twitter.svg" width="20px" alt=""/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;
