import { groupClassIcon, materialsIcon, oneOnOneIcon } from "helper/constants";
import styled from "styled-components";

const TrainingSectionWrapper = styled.div`
    margin-bottom: 120px;

    @media screen and (max-width: 1199px) {
        margin-bottom: 70px;
    }
    @media screen and (max-width: 1199px) {
        margin-bottom: 50px;
    }

    .training-wraper {
        @media screen and (max-width: 991px) {
            margin-bottom: 30px;
        }
        .title {
            font-family: 'montserrat-bold';
            font-size: 42px;
            line-height: 52px;
            color: #0C1125;
            font-weight: bold;
            margin-bottom: 30px;
            @media screen and (max-width: 1199px) {
                font-size: 36px;
                line-height: 40px;
            }
            @media screen and (max-width: 767px) {
                font-size: 20px;
                line-height: 24px;
                margin-bottom: 30px;
                font-family: 'montserrat-semi-bold';
                margin-bottom: 15px;
                text-align: center;
            }
        }
        .text {
            width: 90%;

            @media screen and (max-width: 991px) {
                width: 100%;
            }
            p {
                font-family: 'montserrat-medium';
                font-size: 24px;
                line-height: 38px;
                color: #646464;
                margin: 0;
                @media screen and (max-width: 1199px) {
                    font-size: 18px;
                    line-height: 32px;
                }
                @media screen and (max-width: 767px) {
                    font-size: 12px;
                    line-height: 19px;
                    line-height: 28px;
                }
                &:not(:last-child) {
                    margin-bottom: 35px;
                    @media screen and (max-width: 767px) {
                        margin-bottom: 20px;
                    }
                }
            }
        }
        .btn-wrap {
            @media screen and (max-width: 767px) {
                text-align: center;
            }
        }
        .theme-btn {
            min-width: 382px;
            text-align: center;
            padding: 26px 25px;
            margin-top: 40px;

            @media screen and (max-width: 991px) {
                min-width: 310px;
                padding: 15px 25px;
            }
            @media screen and (max-width: 767px) {
                padding: 10px 25px;
                font-size: 14px;
                text-transform: uppercase;
                margin: 30px auto 0;
                min-width: 157px;
            }
        }
    }
    .training-types {
        .training-type {
            border-radius: 10px;
            border: 1px solid #E8E8E8;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
            padding: 30px 40px;
            display: flex;
            align-items: center;
            @media screen and (max-width: 575px) {
                padding: 15px;
            }
            &:not(:last-child) {
                margin-bottom: 30px;
            }
        
            .icon-wrap {
                width: 114px;
            }
            .content-wrap {
                width: calc(100% - 14px);
                padding-left: 40px;
                @media screen and (max-width: 575px) {
                    padding-left: 15px;
                    margin-top: 20px;
                }
                h3 {
                    font-size: 24px;
                    line-height: 29px;
                    color: #0C1125;
                    font-family: montserrat-semi-bold;
                    font-weight: 600;
                    margin-bottom: 12px;
                    @media screen and (max-width: 767px) {
                        font-size: 18px;
                        line-height: 28px;
                    }
                }
                p {
                    font-family: 'montserrat-medium';
                    font-size: 20px;
                    line-height: 30px;
                    color: #646464;
                    margin-bottom: 0;
                    @media screen and (max-width: 1199px) {
                        font-size: 18px;
                    }
                    @media screen and (max-width: 767px) {
                        font-size: 14px;
                        line-height: 18px;
                    }
                }
            }
        }
    }
`;

const TrainingSection = () => {
    return (
        <TrainingSectionWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="training-wraper">
                            <h2 className="title">On Site Training</h2>
                            <div className="text">
                                <p>At Craft Knowledge, we believe in providing
                                    nothing but the best, so our seasoned and highly
                                    skilled professional Trainers are readily available to
                                    provide online and onsite IT training in cutting-
                                    edge technologies.</p>
                                <p>At Craft Knowledge, we believe in providing
                                    nothing but the best, so our seasoned and highly
                                    skilled professional Trainers are readily available to
                                    provide online and onsite IT training in cutting-
                                    edge technologies.</p>
                            </div>
                            <div className="btn-wrap">
                                <div className="theme-btn">Contact Us</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="training-types">
                            <div className="training-type">
                                <div className="icon-wrap">
                                    <img src={oneOnOneIcon} alt="Logo" />
                                </div>
                                <div className="content-wrap">
                                    <h3>One-On-One</h3>
                                    <p>One on one training for when you want to have a personal trainer to help you develop specialized skills for career or academic growth.</p>
                                </div>
                            </div>
                            <div className="training-type">
                                <div className="icon-wrap">
                                    <img src={groupClassIcon} alt="Logo" />
                                </div>
                                <div className="content-wrap">
                                    <h3>Group Class</h3>
                                    <p>One of our most popular models where our professional instructors conduct online live classes.</p>
                                </div>
                            </div>
                            <div className="training-type">
                                <div className="icon-wrap">
                                    <img src={materialsIcon} alt="Logo" />
                                </div>
                                <div className="content-wrap">
                                    <h3>Materials</h3>
                                    <p>Our portal is full of resource material to learn from, so there’s plenty to practice and learn from.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TrainingSectionWrapper>
    );
};

export default TrainingSection;
