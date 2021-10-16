import Hemlet from 'react-helmet';

import { contactIcon, emailIcon, locationIcon, timeIcon } from 'helper/constants';
import 'assets/scss/public/contactUs.scss';
import Input from '../../components/common/Input'
import Button,{SecondaryButton} from '../../components/common/Button'
import Textarea from 'components/common/Textarea';

export default function ContactUs() {
    return (
        <div className="contactus-wrapper">
            <Hemlet>
                <title>ContactUs | Craft Knowledge</title>
            </Hemlet>
            <div className="container py50">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="heading mb-4">Contact Us</h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mr-5">
                        <h4 className="msg">We Would Be Happy To Meet You.</h4>
                        <p className="content">To demonstrate the value of our software, Craft Software offers a Data Quality Assessment. Craft Software will process your data through our software to find data anomalies and improvement opportunities. Please contact us and to request your no-fee Data Quality Assessment.</p>
                        <div className="contact-info">
                            <div className="info d-flex mb-2">
                                <img src={emailIcon} alt="Email" />
                                <span className="ml-3">info@craftknowledge.net</span>
                            </div>
                            <div className="info d-flex mb-2">
                                <img src={contactIcon} alt="Contact Number" />
                                <span>+1-888-479-2142</span>
                            </div>
                            <div className="info d-flex mb-2">
                                <img src={timeIcon} alt="Time" />
                                <span>Monday – Friday | 8:30am CT to 5:30pm CT</span>
                            </div>
                            <div className="info d-flex mb-2">
                                <img src={locationIcon} alt="Location" />
                                <span>10801 Lockwood Dr, Silver Spring, MD 20901, USA</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="container contact-form p-4">
                            <div className="col-md-12">
                                <h4 className="form-heading">Get In touch</h4>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6 col-12 input">
                                    {/* <input type="text" className="firstName mb-3" placeholder="First Name *" /> */}
                                    <Input label="First Name" type="text" placeholder="First Name"/>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6 col-12">
                                    {/* <input type="text" className="lastName mb-3" placeholder="Last Name *" /> */}
                                    <Input label="Last Name" type="text" placeholder="Last Name"/>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    {/* <input type="text" className="Email mb-3" placeholder="Email *" /> */}
                                    <Input label="Email" type="email" placeholder="Email"/>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    {/* <textarea className="comment mb-2" placeholder="Comment or Message *" /> */}
                                    <Textarea label="Comment or Message *"/>
                                </div>
                                <div className="col-md-12 d-flex">
                                    {/* <button className="submit btn lh-30 fill-width">Submit</button>
                                    <button className="clear btn btn-light fill-width">Clear</button> */}
                                    <Button text="Submit" className="lh-15 m-2" />
                                    <SecondaryButton text="Clear" className="lh-15 m-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
