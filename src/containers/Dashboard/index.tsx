import PickupFromLeft from "components/Dashboard/PickupFromLeft";
import OurPicks from "components/Dashboard/OurPicks";
import styled from "styled-components";
import Hemlet from 'react-helmet';

const IndexWrapper = styled.div`
    .dash-welcome-back {
        padding: 50px 0 37px;
        font-size: 34px;
        font-family: "montserrat-semi-bold";
        color: #2C2C2C;
    }
`;

const Index = () => {
    return (
        <IndexWrapper className="container">
            <Hemlet>
                <title>Dashboard | Craft Knowledge</title>
            </Hemlet>
            <div className="row">
                <div className="col-sm-12">
                    <div className="dash-welcome-back">Welcome back, Abdul!</div>
                </div>
                <div className="col-sm-12">
                    <PickupFromLeft />
                </div>
                <div className="col-sm-12">
                    <OurPicks />
                </div>
            </div>
        </IndexWrapper>
    );
};

export default Index;
