import Slider from "components/common/Slider";
import { homeSliderSettings } from "helper/utils";
import styled from "styled-components";
import PopularCourse from "./PopularCourse";
import RecentCourse from "./RecentCourse";

const IndexWrapper = styled.div`
    padding: 60px 0 120px;
    background: rgb(244,247,250);
    background: linear-gradient(180deg, rgba(244,247,250,1) 0%, rgba(244,247,250,1) 47%, rgba(244,247,250,0) 100%);
    @media screen and (max-width: 991px) {
        padding: 50px 0;
    }
    .title {
        font-family: montserrat-semi-bold;
        font-size: 32px;
        line-height: 40px;
        color: #0C1125;
        margin-bottom: 45px;

        @media screen and (max-width: 767px) {
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 30px;
        }
    }
    .courses-list {
        .courses-item {
            background-color: #FFFFFF;
            border-radius: 12px;
            box-shadow: rgba(24, 106, 165, 0.10) 0px 3px 10px;
        }
        .content-wraper {
            padding: 20px;
            @media screen and (max-width: 575px) {
                padding: 10px;
            }
            @media screen and (max-width: 360px) {
                flex-direction: column-reverse;
            }
            .text-wraper {
                width: calc(100% - 99px);
                padding-right: 30px;
                @media screen and (max-width: 575px) {
                    padding-right: 10px;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
                @media screen and (max-width: 360px) {
                    width: 100%;
                }
                h4 {
                    font-family: montserrat-semi-bold;
                    font-size: 22px;
                    color: #0C1125;
                    margin-bottom: 10px;
                }
                p {
                    font-family: montserrat-medium;
                    font-size: 16px;
                    color: #323638;
                    margin-bottom: 0;
                }
            }
            .icon-wraper {
                width: 99px;
                height: 99px;
                border-radius: 100%;
                background-color: #DFF4F1;
            }
        }
        .bottom-detail {
            padding: 0 20px 20px;
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                @media screen and (max-width: 575px) {
                    flex-direction: column;
                }

                li {
                    font-family: montserrat-medium;
                    font-size: 17px;
                    color: #323638;
                    display: flex;

                    &:not(:last-child) {
                        margin-right: 20px;

                        @media screen and (max-width: 575px) {
                            margin-right: 0;
                            margin-bottom: 10px;
                        }
                    }
                    img {
                        margin-right: 10px;
                    }
                }
            }
        }
        .box-wraper {
            background-color: #DFF4F1;
            min-height: 176px;
        }
        .actions-wraper {
            padding: 20px;
            .theme-btn {
                font-family: montserrat-semi-bold;
                font-size: 20px;
                padding: 8px 35px;
                margin-right: 25px;

                @media screen and (max-width: 1199px) {
                    font-size: 18px;
                    margin-right: 15px;
                }
                @media screen and (max-width: 575px) { 
                    margin-bottom: 10px;
                }
            }
            .link {
                font-family: montserrat-semi-bold;
                font-size: 20px;
                color: #000;
                text-decoration: none;
                @media screen and (max-width: 1199px) {
                    font-size: 16px;
                }
            }
        }
    }
    .recently-courses {
        .actions-wraper {
            padding-top: 0;
        }
        .courses-list {
            .content-wraper  {
                .text-wraper {
                    width: 100%;

                    h4 {
                        position: relative;
                        padding-top: 15px;
                        &:before {
                            content: "";
                            width: 99px;
                            height: 6px;
                            background-color: #DFF4F1;
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                    }
                }
            }
        }
    }
    .bottom-ctc {
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
    .popular-courses {
        padding-bottom: 140px;
        @media screen and (max-width: 767px) {
            padding-bottom: 110px;
        }
    }
    .recently-courses {
        padding-bottom: 100px;
    }
`;

const Index = () => {
    return (
        <IndexWrapper>
            <div className="container">
                <div className="popular-courses">
                    <h2 className="title text-center">Popular Courses</h2>
                    <div className="courses-wraper">
                        <div className="courses-list">
                            <Slider settings={homeSliderSettings}>
                                <PopularCourse />
                                <PopularCourse />
                                <PopularCourse />
                                <PopularCourse />
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="recently-courses">
                    <h2 className="title text-center">Recently Added Courses</h2>
                    <div className="courses-wraper">
                        <div className="courses-list">
                            <Slider settings={homeSliderSettings}>
                                <RecentCourse />
                                <RecentCourse />
                                <RecentCourse />
                                <RecentCourse />
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="bottom-ctc text-center">
                    <div className="theme-btn">Explore more sources</div>
                </div>
            </div>
        </IndexWrapper>
    );
};

export default Index;
