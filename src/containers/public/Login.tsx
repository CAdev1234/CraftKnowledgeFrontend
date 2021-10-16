import Input from 'components/common/Input';
import { googleIcon, linkedInIcon, loginImg } from 'helper/constants';
import Button, { ButtonWithIcon, SecondaryButton } from 'components/common/Button';
import Hemlet from 'react-helmet';
import 'assets/scss/public/login.scss';
import { useHistory } from 'react-router';

const Register = () => {
    const history = useHistory();

    return (
        <div className="login-wrapper">
            <Hemlet>
                <title>Login | Craft Knowledge</title>
            </Hemlet>
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-6 col-md-12 d-md-flex justify-content-center py80 px20">
                        <div className="row">
                            <div className="col-sm-12 title-text">
                                Login to Craft Knowledge
                            </div>
                            <div className="col-sm-12">
                                <Input label="Email" type="email" />
                            </div>
                            <div className="col-sm-12">
                                <Input label="Password" type="password" />
                            </div>
                            <div className="col-sm-12 forget-password">
                                <span className="cursor-pointer">Forgot password?</span>
                            </div>
                            <div className="col-sm-12">
                                <Button text="LOGIN" className="lh-30" onClick={() => history.push('dashboard')} />
                            </div>
                            <div className="col-sm-12 an-20 lh-24 regular-text py25 text-center">
                                OR
                            </div>
                            <div className="col-sm-12">
                                <ButtonWithIcon text="Continue with Google" className="mb20" icon={googleIcon} />
                            </div>
                            <div className="col-sm-12">
                                <ButtonWithIcon text="Continue with LinkedIn" icon={linkedInIcon} />
                            </div>
                            <div className="col-sm-12 title-text register">
                                <span>New to Craft Knowledge?</span>
                                <SecondaryButton text="REGISTER" className="mt15" onClick={() => history.push('register')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-lg-flex py80 login-image-wrapper pr0">
                        <img src={loginImg} alt="register" className="login-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
