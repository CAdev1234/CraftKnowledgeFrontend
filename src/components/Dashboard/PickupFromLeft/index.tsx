import { ourPicksSearchIcon } from "helper/constants";
import styled from "styled-components";
import Card from "./Card";

const IndexWrapper = styled.div`
    margin-bottom: 60px;

    .row {
        margin: 0 -15px;
    }
    
    .title {
        font-size: 18px;
        font-family: "montserrat-semi-bold";
        color: #000;
    }

    .show-all {
        margin-left: auto;
        font-size: 18px;
        font-family: "montserrat-semi-bold";
        color: rgba(0, 0, 0, 0.6);
        
        img {
            margin-left: 13px;
        }
    }
`;

const Index = () => {
    return (
        <IndexWrapper>
            <div className="flex-x space-between">
                <div className="title">Pick up form where you left</div>
                <div className="show-all flex-x align-center cursor-pointer">
                    Show all
                    <img src={ourPicksSearchIcon} alt="search" />
                </div>
            </div>
            <div className="row">
                {[1, 2, 3, 4, 5].map(x => <Card key={x} />)}
            </div>
        </IndexWrapper>
    );
};

export default Index;
