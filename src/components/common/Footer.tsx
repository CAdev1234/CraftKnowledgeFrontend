import { logoFooter } from 'helper/constants';
import 'assets/scss/common/footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="site-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="row align-flex-end">
                                <div className="col-md-8">
                                    <div className="footer-content-wrap">
                                        <div className="footer-logo">
                                            <img src={logoFooter} alt="Logo" />
                                        </div>
                                        <div className="footer-text">
                                            <p>Craft Knowledge is an online IT training institution, born off the idea that if IT possesses the potential to change the world for the better, why not educate as many as we can in this domain at their personal convenience. </p>
                                            <div>Read More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-links">
                                        <ul>
                                        <li><div>About Craft Knowledge</div></li>
                                        <li><div>About Us</div></li>
                                        <li><Link to='/ContactUs'><div>Contact Us</div></Link></li>
                                        <li><div>Partner Solutions</div></li>
                                        <li><div>Terms and conditions</div></li>
                                        <li><div>Privacy / Cookies</div></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="footer-inner">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="copyright">
                                            <p>Copyright © 2021 CraftKnowledge.net Limited and its affiliated companies. All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="copyright-menu">
                                            <ul>
                                                <li>
                                                    <div>Terms & Condition</div>
                                                </li>
                                                <li>
                                                    <div>Privacy Policy</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default Footer;
