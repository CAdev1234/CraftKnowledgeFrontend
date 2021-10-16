import Button from "components/common/Button";
import Slider from "components/common/Slider";
import { ourPicksIcon, ourPicksSearchIcon } from "helper/constants";
import { homeSliderSettings } from "helper/utils";
import styled from "styled-components";
import OurPick from "./OurPick";

const IndexWrapper = styled.div`
    margin-bottom: 63px;
    
    .main-head{
        margin-bottom: 22px;

        .head-title {
            font-size: 32px;
            font-family: "montserrat-semi-bold";
            color: #0C1125;
        }
        .head-icon {
            margin-right: 18px;
        }
        .show-all {
            margin-left: auto;
            font-size: 18px;
            font-family: "montserrat-semi-bold";
            color: rgba(0, 0, 0, 0.6);;

            img {
                margin-left: 13px;
            }
        }
    }
    .explore-sources {
        margin-top: 100px;
        
        .explore-btn {
            max-width: 382px !important;
            margin: auto;

            @media screen and (max-width: 1399.99px) {
                font-size: 18px !important;
            }
        }
    }
    .slick-slider {
        @media screen and (min-width: 991px) {
            margin: 0 -20px;
        }
    }
`;

const Index = () => {
    return (
        <IndexWrapper>
            <div className="flex-x align-center main-head">
                <div className="flex-x align-center">
                    <img src={ourPicksIcon} alt="ourPicks" className="head-icon" />
                    <span className="head-title">Our Picks</span>
                </div>
                <div className="show-all flex-x align-center cursor-pointer">
                    Show all
                    <img src={ourPicksSearchIcon} alt="search" />
                </div>
            </div>
            <Slider settings={homeSliderSettings}>
                <OurPick />
                <OurPick />
                <OurPick />
                <OurPick />
            </Slider>
            <div className="explore-sources">
                <Button text="Explore more sources" className="explore-btn" />
            </div>
        </IndexWrapper>
    );
};

export default Index;
