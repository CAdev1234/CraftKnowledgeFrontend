import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabSectionWrapper = styled.div`
    margin-bottom: 85px;
    @media screen and (max-width: 767px) {
        margin-bottom: 50px;
    }
    .heading {
        font-family: 'montserrat-bold';
        font-size: 42px;
        line-height: 60px;
        color: #0C1125;
        font-weight: bold;
        margin-bottom: 30px;

        @media screen and (max-width: 991px) {
            font-size: 36px;
            line-height: 42px;
        }
        @media screen and (max-width: 767px) {
            font-family: montserrat-semi-bold;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 20px;
        }
    }
    .react-tabs {
        text-align: center;
    }
    .react-tabs__tab-list {
        border: 1px solid #006980;
        padding: 15px;
        display: inline-block;
        border-radius: 40px;
        margin-bottom: 30px;

        @media screen and (max-width: 767px) {
            padding: 5px;
        }
    }
    .react-tabs__tab {
        font-size: 26px;
        color: #0C1125;
        font-family: 'montserrat-medium';
        border: 0;
        padding: 12px 30px;

        @media screen and (max-width: 1199px) {
            font-size: 20px;
        }

        @media screen and (max-width: 991px) {
            font-size: 18px;
            padding: 12px 15px;
        }
        @media screen and (max-width: 767px) {
            font-size: 15px;
            padding: 10px 8px;
        }
        @media screen and (max-width: 575px) {
            font-size: 10px;
        }

        &.react-tabs__tab--selected {
            font-family: montserrat-semi-bold;
            background-color: #006980;
            color: #fff;
            border-radius: 40px;
        }
    }
    .tab-content {
        p {
            font-size: 23px;
            line-height: 38px;
            color: #646464;
            margin-bottom: 30px;

            @media screen and (max-width: 1199px) {
                font-size: 18px;
                line-height: 32px;
                margin-bottom: 20px;
            }
            @media screen and (max-width: 767px) {
                font-size: 12px;
                line-height: 19px;
                margin-bottom: 20px;
            }
        }
        .box-wraper {
            width: 100%;
            height: 450px;
            background-color: #DFF4F1;

            @media screen and (max-width: 575px) {
                height: 200px;
            }
        }
    }
`;

const TabSection = () => {
    return (
        <TabSectionWrapper>
            <div className="container">
                <h2 className="heading text-center">Target Audience</h2>
                <Tabs>
                    <TabList>
                        <Tab>Individuals</Tab>
                        <Tab>Corporate businesses</Tab>
                        <Tab>Government employees</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="tab-content">
                            <p>At Craft Knowledge, we believe in providing nothing but the best, so our seasoned and highly skilled professional Trainers are readily available to provide online and onsite IT training in cutting- edge technologies.</p>
                            <div className="box-wraper"></div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content">
                            <p>2 At Craft Knowledge, we believe in providing nothing but the best, so our seasoned and highly skilled professional Trainers are readily available to provide online and onsite IT training in cutting- edge technologies.</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content">
                            <p> 3 At Craft Knowledge, we believe in providing nothing but the best, so our seasoned and highly skilled professional Trainers are readily available to provide online and onsite IT training in cutting- edge technologies.</p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </TabSectionWrapper>
    );
};

export default TabSection;
