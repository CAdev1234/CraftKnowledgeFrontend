import { applicationIntIcon, devOpsIcon, softwareTestingIcon } from 'helper/constants';
import styled from 'styled-components';

const ServiceSectionWrapper = styled.div`
    margin-bottom: 80px;

    @media screen and (max-width: 767px) {
        margin-bottom: 50px;
    }
    
    .services-wraper {
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: 767px) {
           margin: 0 -10px;
        }
        .service {
            width: 33.333%;
            padding: 0 25px;
            @media screen and (max-width: 991px) {
                padding: 0 15px;
            }
            @media screen and (max-width: 767px) {
                width: 50%;
                margin-bottom: 25px;
                &:first-child {
                    width: 100%;
                }
            }
        }
        .service-inner {
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
            text-align: center;
            padding: 20px 20px 30px;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .ser-image {
            margin-bottom: 30px;
            img {
                max-width: 100%;
            }
        }
        .ser-title {
            font-size: 24px;
            line-height: 29px;
            font-family: 'montserrat-semi-bold';
            font-weight: 600;
            color: #006980;
            margin: 0;
            margin-top: auto;
            @media screen and (max-width: 991px) {
                font-size: 20px;
            }
        }
    }
`;

const ServiceSection = () => {
    return (
        <ServiceSectionWrapper>
            <div className="container">
                <div className="services-wraper">
                    <div className="service">
                        <div className="service-inner">
                            <div className="ser-image">
                                <img src={softwareTestingIcon} alt="Software Testing" />
                            </div>
                            <h2 className="ser-title">Software Testing</h2>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-inner">
                            <div className="ser-image">
                                <img src={devOpsIcon} alt="Dev Ops" />
                            </div>
                            <h2 className="ser-title">Dev Ops</h2>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-inner">
                            <div className="ser-image">
                                <img src={applicationIntIcon} alt="Application Integration" />
                            </div>
                            <h2 className="ser-title">Application Integration</h2>
                        </div>
                    </div>
                </div>
            </div>
        </ServiceSectionWrapper>
    );
};

export default ServiceSection;
