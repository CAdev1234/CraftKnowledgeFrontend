import Input from 'components/common/Input';
import { googleIcon, linkedInIcon, registerImg } from 'helper/constants';
import Button, { ButtonWithIcon } from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import { ReactNode } from 'react';
import Hemlet from 'react-helmet';
import 'assets/scss/public/register.scss';

const Register = () => {
    const agreement: ReactNode = (
        <span className="agreement-wrapper an-16 lh-20 regular-text">
            I have read and agree to the <span className="cursor-pointer">terms and conditions</span> of these service.
        </span>
    );

    return (
        <div className="register-wrapper">
            <Hemlet>
                <title>Register | Craft Knowledge</title>
            </Hemlet>
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-6 col-md-12 d-md-flex justify-content-center py80 px20">
                        <div className="row">
                            <div className="col-sm-12 title-text">
                                Register with Craft Knowledge
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <Input label="First Name" />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <Input label="Last Name" />
                            </div>
                            <div className="col-sm-12">
                                <Input label="Email" type="email" />
                            </div>
                            <div className="col-sm-12">
                                <Input label="Company Name" />
                            </div>
                            <div className="col-sm-12">
                                <Input label="Password" type="password" />
                            </div>
                            <div className="col-sm-12">
                                <Checkbox label={agreement} />
                            </div>
                            <div className="col-sm-12">
                                <Button text="REGISTER" className="lh-30" />
                            </div>
                            <div className="col-sm-12 an-20 lh-24 regular-text py25 text-center">
                                OR
                            </div>
                            <div className="col-sm-12">
                                <ButtonWithIcon text="Register with Google" className="mb20" icon={googleIcon} />
                            </div>
                            <div className="col-sm-12">
                                <ButtonWithIcon text="Register with LinkedIn" icon={linkedInIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-lg-flex py80 register-image-wrapper pr0">
                        <img src={registerImg} alt="register" className="register-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
