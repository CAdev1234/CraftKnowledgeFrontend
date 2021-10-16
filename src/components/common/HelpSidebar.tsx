import clsx from "clsx";
import { arrowLeftHeadIcon, headerCertificatesIcon, headerCoursesIcon, headerCreateIcon, headerPathIcon, headerSearchIcon } from "helper/constants";
import { useState } from "react";
import styled from "styled-components";

const HelpSidebarWrapper = styled.div`
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: fixed;
    z-index: 999;
    top: 0;
    left: -178px;
    background-color: #F5F5F5;
    height: 100%;
    padding: 0;
    max-width: 180px;
    width: 180px;
    
    &.expanded {
        left: 0px;

    }
    
    @media screen and (max-width: 991.99px) {
        left: -138px;
        max-width: 140px;
        width: 140px;
    }
    @media screen and (max-width: 576.99px) {
        left: -118px;
        max-width: 120px;
        width: 120px;
    }
    
    .menu-arrow {
        position: absolute;
        top: 10%;
        left: 95%;
        height: 46px;
        width: 35px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #F5F5F5;
        display: flex;
        
        img {
            margin: auto;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

            &.expanded {
                transform: rotate(180deg);
            }
        }
    }

    .content {
        padding: 56px 35px 26px;

        ::-webkit-scrollbar {
          width: 0px;
        }

        @media screen and (max-width: 991.99px) {
            padding: 46px 20px 16px;
        }
        @media screen and (max-width: 576.99px) {
            padding: 46px 10px 16px;
        }

        .menu-item-wrapper {
            margin-bottom: 70px;

            &.create {
                margin-bottom: 0px;
                margin-top: auto !important;
            }

            img {
                width: 32px;
                object-fit: cover;
                margin-bottom: 10px;

                @media screen and (max-width: 991.99px) {
                    width: 30px;
                }
                @media screen and (max-width: 576.99px) {
                    width: 28px;
                }
            }
            
            .menu-title {
                font-size: 18px;
                line-height: 24px;
                color: #000;
                font-family: "montserrat-semi-bold";

                @media screen and (max-width: 991.99px) {
                    font-size: 16px;
                    line-height: 20px;
                }
                @media screen and (max-width: 576.99px) {
                    font-size: 14px;
                    line-height: 18px;
                }
            }
        }

        &.expanded {
            overflow: auto;
            height: 100%;
        }
    }
`;

const HelpSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onArrowClick = () => setIsExpanded(prevState => !prevState);

    const menuItem = [
        {
            title: "Explore",
            icon: headerSearchIcon
        },
        {
            title: "Path",
            icon: headerPathIcon
        },
        {
            title: "My Courses",
            icon: headerCoursesIcon
        },
        {
            title: "Certificates",
            icon: headerCertificatesIcon
        },
    ]

    return (
        <HelpSidebarWrapper className={`${isExpanded && "expanded"}`}>
            <div className="menu-arrow cursor-pointer" onClick={onArrowClick}>
                <img className={`${isExpanded && "expanded"}`} src={arrowLeftHeadIcon} alt="arrow-left" />
            </div>
            <div className={clsx("content flex-y align-center", isExpanded && "expanded")}>
                {
                    menuItem.map(x => (
                        <div className="flex-y align-center menu-item-wrapper">
                            <img src={x.icon} alt="icon" />
                            <div className="menu-title">{x.title}</div>
                        </div>
                    ))
                }
                <div className="flex-y align-center menu-item-wrapper create">
                    <img src={headerCreateIcon} alt="icon" />
                    <div className="menu-title">Create</div>
                </div>
            </div>
        </HelpSidebarWrapper>
    );
};

export default HelpSidebar;
