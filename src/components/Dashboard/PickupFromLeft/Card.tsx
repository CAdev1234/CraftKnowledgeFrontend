import Button from "components/common/Button";
import { continueArrowIcon } from "helper/constants";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

const CardWrapper = styled.div`
    padding: 15px;

    .card {
        border-radius: 10px;
        border: 1px solid #9C9C9C;

        .card-image {
            height: 220px;
            background-color: #DFF4F1;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .card-content {
            padding: 22px 32px;

            .card-title {
                font-size: 22px;
                font-family: "montserrat-semi-bold";
                color: #0C1125;
                margin-bottom: 12px;

                @media screen and (max-width: 1399.99px) {
                    font-size: 20px;
                }
            }
        
            .card-description {
                font-size: 17px;
                font-family: "montserrat-medium";
                color: #323638;
                margin-bottom: 22px;

                @media screen and (max-width: 1399.99px) {
                    font-size: 15px;
                }
            }
        }

        .progress {
            width: 125px;
            height: 8px;
            border-radius: 11px;

            .progress-bar {
                background-color: #51CB2F;
            }

            @media screen and (max-width: 360px) {
                width: 100%;
            }
        }

        .progress-text {
            font-size: 17px;
            font-family: "montserrat-semi-bold";
            color: #5D6162;
            margin-bottom: 6px;

            @media screen and (max-width: 1399.99px) {
                font-size: 15px;
            }
        }

        .continue-btn {
            width: 50% !important;

            @media screen and (max-width: 1399.99px) {
                font-size: 15px !important;
            }
            
            @media screen and (max-width: 360px) {
                width: 100% !important;
                margin-top: 15px !important;
            }
        }

        .action-section {
            @media screen and (max-width: 360px) {
                display: block !important;
            }
        }

        .points-tag {
            position: absolute;
            right: 5%;
            top: 4%;
            background: #EBEBEB;
            color: #5D6162;
            padding: 5px;
            border-radius: 10px;
            font-size: 15px;
            font-family: "montserrat-semi-bold";
            height: 30px;
            line-height: 20px;
        }
    }
`;

const Card = () => {
    return (
        <CardWrapper className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="card">
                <div className="points-tag">
                    +1,600 points
                </div>
                <div className="card-image"></div>
                <div className="card-content">
                    <div className="card-title">
                        Accelerate Tableau CRM with Apps
                    </div>
                    <div className="card-description">
                        Learn how out-of-the-box apps can help you go faster with Tableau CRM.
                    </div>
                    <div className="flex-x space-between align-center action-section">
                        <div className="flex-y">
                            <span className="progress-text">{60}% Complete</span>
                            <ProgressBar now={60} />
                        </div>
                        <Button text="Continue" className="continue-btn" icon={continueArrowIcon} />
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
};

export default Card;
