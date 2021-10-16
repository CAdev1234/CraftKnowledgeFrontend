import Button from "components/common/Button";
import { calenderIcon, dashCartIcon, seatIcon } from "helper/constants";
import styled from "styled-components";

const OurPickWrapper = styled.div`
    padding: 22px 25px;
    background-color: #FFFFFF;
    border-radius: 12px;
    border: 1px solid #9C9C9C;

    .head-wrapper {
        margin-bottom: 19px;

        @media screen and (max-width: 460px) {
            display: block;
        }

        .label-image {
            height: 96px;
            width: 96px;
            border-radius: 10px;
            background-color: #DFF4F1;

            @media screen and (max-width: 460px) {
                width: 100%;
                margin-bottom: 10px;
            }
        }

        .points-tag {
            background: #EBEBEB;
            color: #5D6162;
            padding: 5px;
            border-radius: 10px;
            font-size: 15px;
            font-family: "montserrat-semi-bold";
            height: 100%;
            text-align: center;
            line-height: 20px;

            @media screen and (max-width: 1399.99px) {
                font-size: 14px;
            }
        }
    }
    .title {
        font-size: 22px;
        font-family: "montserrat-semi-bold";
        color: #0C1125;
        margin-bottom: 12px;

        @media screen and (max-width: 1399.99px) {
            font-size: 20px;
        }
    }
    .description {
        font-size: 17px;
        font-family: "montserrat-semi-bold";
        color: rgba(50, 54, 56, 0.8);
        margin-bottom: 20px;

        @media screen and (max-width: 1399.99px) {
            font-size: 15px;
        }
    }
    .stats {
        font-size: 17px;
        font-family: "montserrat-semi-bold";
        color: #5D6162;
        margin-bottom: 25px;

        @media screen and (max-width: 1399.99px) {
            font-size: 15px;
        }

        img {
            margin-right: 7px;
        }

        .rating-wrapper {
            margin-left: 10px;

            @media screen and (max-width: 460px) {
                margin-left: 0px;
                margin-top: 15px;
            }
        }

        @media screen and (max-width: 460px) {
            display: block !important;
        }
    }
    .action-section {
        
        @media screen and (max-width: 460px) {
            display: block !important;
        }
        
        .enroll-btn {
            width: 50% !important;
            
            @media screen and (max-width: 1399.99px) {
                font-size: 18px !important;
            }

            @media screen and (max-width: 460px) {
                width: 100% !important;
            }
        }
        .duration {
            font-size: 17px;
            font-family: "montserrat-semi-bold";
            color: #5D6162;
    
            @media screen and (max-width: 1399.99px) {
                font-size: 15px;
            }

            @media screen and (max-width: 460px) {
                margin-top: 10px;
            }
        }
    }
`;

const OurPick = () => {
    return (
        <OurPickWrapper>
            <div className="flex-x space-between head-wrapper">
                <div className="label-image"></div>
                <div className="points-tag">
                    +1,600 points
                </div>
            </div>
            <div className="title">
                Accelerate Tableau CRM with Apps
            </div>
            <div className="description">
                Learn how out-of-the-box apps can help you go faster with Tableau CRM.
            </div>
            <div className="flex-x align-center stats">
                <div className="flex-x align-center">
                    <img src={calenderIcon} alt="calender" /> 
                    3 months
                </div>
                <div className="flex-x align-center rating-wrapper">
                    <img src={seatIcon} alt="seat" /> 
                    4.8 Star (30780 Rating)
                </div>
            </div>
            <div className="flex-x align-center space-between action-section">
                <Button text="Enroll" className="enroll-btn" prefixIcon={dashCartIcon} />
                <div className="duration">
                    ~5 hrs 40 min
                </div>
            </div>
        </OurPickWrapper>
    );
};

export default OurPick;
