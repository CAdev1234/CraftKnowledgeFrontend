import styled from 'styled-components';

const HomeVideoSectionWrapper = styled.div`
    .home-video-inner {
        background: rgb(0,105,128);
        background: linear-gradient(-47deg, rgba(0,105,128,1) 0%, rgba(73,122,88,1) 50%, rgba(229,159,3,1) 100%);
        border-radius: 10px;
        padding: 85px 30px 85px 65px;
        margin-bottom: 95px;

        @media screen and (max-width: 1199px) {
            padding: 50px 30px 50px 50px;
        }
        @media screen and (max-width: 991px) {
            margin-bottom: 50px;
        }
        @media screen and (max-width: 767px) {
            padding: 0;
            background: none;
        }

        .text-wraper {
            h2 {
                font-family: 'montserrat-bold';
                font-size: 40px;
                line-height: 61px;
                font-weight: bold;
                color: #FFFFFF;
                margin-bottom: 30px;
                text-shadow: 3px 0px 6px rgba(0, 0, 0, 0.16);
                @media screen and (max-width: 1199px) {
                    font-size: 32px;
                    line-height: 50px;
                    margin-bottom: 15px;
                }
                @media screen and (max-width: 767px) {
                    font-size: 36px;
                    font-family: 'montserrat-semi-bold';
                    line-height: 46px;
                    color: #000;
                    margin-bottom: 25px;
                }
            }
            p {
                font-family: 'montserrat-semi-bold';
                font-size: 24px;
                line-height: 35px;
                font-weight: 600;
                color: #FFFFFF;
                max-width: 415px;
                margin-bottom: 50px;
                @media screen and (max-width: 1199px) {
                    font-size: 20px;
                    line-height: 28px;
                }
                @media screen and (max-width: 991px) {
                    font-size: 18px;
                    line-height: 28px;
                    max-width: 100%;
                    margin-bottom: 30px;
                }
                @media screen and (max-width: 767px) {
                    font-size: 16px;
                    margin-bottom: 20px;
                    line-height: 24px;
                    color: #000; 
                }
            }
            .theme-btn {
                @media screen and (max-width: 767px) {
                    display: none;
                }
            }
        }

        .video-wraper {
            @media screen and (max-width: 991px) {
                margin-top: 30px;
            }
            @media screen and (max-width: 767px) {
                margin-bottom: 20px;
                margin-top: 0;
            }
            iframe {
                width: 100%;
            }
        }
    }
`;

const HomeVideoSection = () => {
    return (
        <HomeVideoSectionWrapper>
            <div className="container">
                <div className="home-video-inner">
                    <div className="row align-center align-items-stretch row-eq-height">
                        <div className="col-lg-5">
                            <div className="text-wraper">
                                <h2 className="an-bold-text">World’s #1 Online Business Learning </h2>
                                <p>2,000,000 careers advanced 1,500 live classes every month 85% report career benefits including promotion or a new job</p>
                                <div className="theme-btn">Explore Programs</div>
                            </div>
                        </div>
                        <div className="col-lg-7 text-center">
                            <div className="video-wraper fill-height">
                                <iframe className="fill-height" src="https://www.youtube.com/embed/9Wqjyc_m4PA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="theme-btn d-md-none">Explore Programs</div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeVideoSectionWrapper>
    );
};

export default HomeVideoSection;
