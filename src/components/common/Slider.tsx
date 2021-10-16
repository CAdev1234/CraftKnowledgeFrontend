import { arrowLeftIcon, arrowRightIcon } from "helper/constants";
import { FC } from "react";
import Slick from "react-slick";
import styled from "styled-components";

interface ISliderProps {
    settings: any
}

const SlickWrapper = styled(Slick)`
    .slick-list {
        @media screen and (max-width: 767px) {
            padding-right: 50px;
        }
    }
    .slick-track {
        .slick-slide {
            padding: 0 20px;
            
            @media screen and (max-width: 360px) {
                padding: 5px;
            }
        }
    }
    .slick-dots {
        bottom: -55px;
        background-color: #DBDBDB;
        border-radius: 11px;
        width: auto;
        height: 8px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 0;
        padding: 0 15px;
        
        li {
            margin: 0;
            width: 35px;
            height: 8px;
            @media screen and (max-width: 360px) {
                width: 15px;
            }
            button {
                width: 35px;
                height: 8px;
                transition: all 0.5s;
                padding: 0;
                @media screen and (max-width: 360px) {
                    width: 15px;
                }

                &:before {
                    display: none;
                }
            }
            &.slick-active {
                width: 57px;
                @media screen and (max-width: 575px) {
                    width: 30px;
                }

                button {
                    width: 57px;
                    background-color: #006980;
                    border-radius: 11px;
                    @media screen and (max-width: 575px) {
                        width: 30px;
                    }
                }
            }
        }
    }
    .slick-arrow {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-repeat: no-repeat;
        top: inherit;
        bottom: -78px;
        transform: none;

        &:before {
            display: none;
        }

        &.slick-prev {
            background-image: url(${arrowLeftIcon});
            left: 36%;

            @media screen and (max-width: 1199px) {
                left: 33%;
            }
            @media screen and (max-width: 991px) {
                left: 27%;
            }
            @media screen and (max-width: 767px) {
                left: 20%;
            }
            @media screen and (max-width: 460px) {
                left: 15%;
            }
        }
        &.slick-next {
            background-image: url(${arrowRightIcon});
            right: 36%;

            @media screen and (max-width: 1199px) {
                right: 33%;
            }
            @media screen and (max-width: 991px) {
                right: 27%;
            }
            @media screen and (max-width: 767px) {
                right: 20%;
            }
            @media screen and (max-width: 460px) {
                right: 15%;
            }
        }
    }
`;

const Slider: FC<ISliderProps> = ({
    settings,
    children
}) => {
    return (
        <SlickWrapper {...settings}>
            {children}
        </SlickWrapper>
    );
};

export default Slider;
