import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import LandingLayout from 'layout/LandingLayout';
import "./index.css";

interface LandingPageProps {

}

export class LandingPage extends Component<LandingPageProps> {

    render() {

        return (
            <LandingLayout>
                <div className="topDiv">
                    <div className="landing_title">
                        Vote, Delegate,<br /> and Earn
                    </div>
                    <div className="pt-3">
                        Accumulate Voting Power through chat, games,<br /> and discussion
                    </div>
                    <div className="pt-5 d-flex">
                        <span className="h-100 mt-2">OUR FEATURES</span> &nbsp;&nbsp;&nbsp; <img src="assets/images/down_arrow.svg" alt="" />
                    </div>
                    <div className="curveDiv">
                        <img src="assets/images/curve.svg" alt="" />
                    </div>
                </div>
                <div className="middleDiv">
                    <h4>A Decentralized Application, Not a Protocol</h4>

                    <Row className="mt-5">
                        <Col md="6" xl="4" className="mb-3">
                            <div className="featureCard">
                                <div className="cardHeader">
                                    <img src="assets/images/chat.svg" alt="" width="30px" />
                                    <div className="mt-3">Incentivized Chat</div>
                                </div>
                                <div className="cardContent text-left">
                                    <ul>
                                        <li>Upvote, Downvote, and Delegate Votes.</li>
                                        <li>Most Upvoted members enter to win the Jackpot</li>
                                        <li>Build reputation and earn voting power.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md="6" xl="4" className="mb-3">
                            <div className="featureCard">
                                <div className="cardHeader">
                                    <img src="assets/images/delegate.svg" alt="" width="30px" />
                                    <div className="mt-3">Vote and Delegate</div>
                                </div>
                                <div className="cardContent text-left">
                                    <ul>
                                        <li>Vote to govern your favorite protocols</li>
                                        <li>Delegate votes to community members you trust.</li>
                                        <li>Voting Power can be reused across protocols.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md="6" xl="4" className="mb-3">
                            <div className="featureCard">
                                <div className="cardHeader">
                                    <img src="assets/images/governance.svg" alt="" width="30px" />
                                    <div className="mt-3">Multi-Protocol Governance</div>
                                </div>
                                <div className="cardContent text-left">
                                    <ul>
                                        <li>Protocol and Chain Agnostic Governance</li>
                                        <li>Access Protocol-Specific Financial Services such as Insurance, Staking Leverage etc</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md="6" xl="4" className="mb-3">
                            <div className="featureCard">
                                <div className="cardHeader">
                                    <img src="assets/images/chat.svg" alt="" width="30px" />
                                    <div className="mt-3">Incentivized Chat</div>
                                </div>
                                <div className="cardContent text-left">
                                    <ul>
                                        <li>Upvote, Downvote, and Delegate Votes.</li>
                                        <li>Most Upvoted members enter to win the Jackpot</li>
                                        <li>Build reputation and earn voting power.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md="6" xl="4" className="mb-3">
                            <div className="featureCard">
                                <div className="cardHeader">
                                    <img src="assets/images/delegate.svg" alt="" width="30px" />
                                    <div className="mt-3">Vote and Delegate</div>
                                </div>
                                <div className="cardContent text-left">
                                    <ul>
                                        <li>Vote to govern your favorite protocols</li>
                                        <li>Delegate votes to community members you trust.</li>
                                        <li>Voting Power can be reused across protocols.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md="6" xl="4" className="mb-3">
                            <div className="featureCard">
                                <div className="cardHeader">
                                    <img src="assets/images/governance.svg" alt="" width="30px" />
                                    <div className="mt-3">Multi-Protocol Governance</div>
                                </div>
                                <div className="cardContent text-left">
                                    <ul>
                                        <li>Protocol and Chain Agnostic Governance</li>
                                        <li>Access Protocol-Specific Financial Services such as Insurance, Staking Leverage etc</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </LandingLayout >
        )
    }
}

export default LandingPage;