import React from "react";
import Hemlet from "react-helmet";
import "assets/scss/public/ExploreAllCourses.scss";
import { calendarIcon } from "helper/constants";
import { cartIcon } from "helper/constants";
import Button from "components/common/Button";
import { calenderIcon, dashCartIcon, seatIcon } from "helper/constants";
import { ButtonWithIcon } from "../../components/common/Button";
import styled from "styled-components";

// temp
import data from "temp-data/exploreCource";

const ExploreAllCourseWrapper = styled.div`
  padding: 22px 25px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #9c9c9c;

  .head-wrapper {
    margin-bottom: 19px;

    @media screen and (max-width: 460px) {
      display: block;
    }

    .label-image {
      height: 96px;
      width: 96px;
      border-radius: 10px;
      background-color: #dff4f1;

      @media screen and (max-width: 460px) {
        width: 100%;
        margin-bottom: 10px;
      }
    }

    .points-tag {
      background: #ebebeb;
      color: #5d6162;
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
    color: #0c1125;
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
    color: #5d6162;
    margin-bottom: 25px;

    @media screen and (max-width: 1399.99px) {
      font-size: 15px;
    }

    img {
      margin-right: 7px;
    }

    .rating-wrapper {
      margin-left: 10px;

      @media screen and (max-width: 1024px) {
        margin-left: 0px;
        margin-top: 15px;
      }
    }

    @media screen and (max-width: 1024px) {
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
      color: #5d6162;

      @media screen and (max-width: 1399.99px) {
        font-size: 15px;
      }

      @media screen and (max-width: 460px) {
        margin-top: 10px;
      }
    }
  }
`;

export default function ExploreAllCourses() {
  return (
    <div className="course-wrapper">
      <Hemlet>
        <title>Explore All Course | Craft Knowledge</title>
      </Hemlet>
      <div className="container">
        <div className="course-info">
          <div className="content">
            <h3 className="text-center">
              Explore Courses : follow guided learning paths
            </h3>
            <p className="text-center my-2 mx-5">
              Below are guided learning paths through modules and projects that
              help you cover the most ground in the shortest amount of time.
              Consider them your personal game plan for exploring new skills.
            </p>
          </div>
          <hr />
          <div className="search-box">
            <h5 className="mb-4">Find the right course for you</h5>
            <a href="" className="clear-filter">clear filters</a>
            <div className="search container">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="search-param">
                    <h4>Your Role</h4>
                    <ul>
                      <li>
                        <a className="btn">Software Tester</a>
                      </li>
                      <li>
                        <a className="btn btn-light">Dev Ops</a>
                      </li>
                      <li>
                        <a className="btn">Programmer</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="search-param">
                    <h4>Your Level</h4>
                    <ul>
                      <li>
                        <a className="btn">Beginner</a>
                      </li>
                      <li>
                        <a className="btn btn-active">Intermediate</a>
                      </li>
                      <li>
                        <a className="btn">Advanced</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-12 col-md-6 col-lg-4 col-xl-4 ">
                  <div className="search-param">
                    <h4>Products</h4>
                    <div className="d-flex">
                      <ul className="mr-5">
                        <li>
                          <a className="btn">Commerce Cloud</a>
                        </li>
                        <li>
                          <a className="btn">Education Cloud</a>
                        </li>
                        <li>
                          <a className="btn">Paradot</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a className="btn">Einstein</a>
                        </li>
                        <li>
                          <a className="btn">Mule Soft</a>
                        </li>
                        <li>
                          <a className="btn">Quip</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}

                <div className="col-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="search-param">
                    <h4>Products</h4>
                    <ul>
                      <li>
                        <a className="btn">Comerce Cloud</a>
                      </li>
                      <li>
                        <a className="btn">Education Cloud</a>
                      </li>
                      <li>
                        <a className="btn">Paradot</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="search-param">
                    <h4>.</h4>
                    <ul>
                      <li>
                        <a className="btn">Einstein</a>
                      </li>
                      <li>
                        <a className="btn">Mule Soft</a>
                      </li>
                      <li>
                        <a className="btn">Quip</a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="search-result">
          <h3 className="my-3">
            Showing
            <span> 118 </span>
            trails out of
            <span> 268 </span>
          </h3>

          {/* <div className="course-list d-flex justify-content-between flex-wrap mb-4"> */}
            <div className="container-fluid my-3">
              <div className="row g-3">
                {data.map((elem) => (
                  <>
                    <div className="col-12 col-md-6 col-lg-4">
                      <ExploreAllCourseWrapper>
                        <div className="flex-x space-between head-wrapper">
                          <div className="label-image"></div>
                          <div className="points-tag">+1,600 points</div>
                        </div>
                        <div className="title">
                          Accelerate Tableau CRM with Apps
                        </div>
                        <div className="description">
                          Learn how out-of-the-box apps can help you go faster
                          with Tableau CRM.
                        </div>
                        <div className="flex-x align-center stats">
                          <div className="flex-x align-center">
                            <img src={calenderIcon} alt="calender" />3 months
                          </div>
                          <div className="flex-x align-center rating-wrapper">
                            <img src={seatIcon} alt="seat" />
                            4.8 Star (30780 Rating)
                          </div>
                        </div>
                        <div className="flex-x align-center space-between action-section">
                          <Button
                            text="Enroll"
                            className="enroll-btn"
                            prefixIcon={dashCartIcon}
                          />
                          <div className="duration">~5 hrs 40 min</div>
                        </div>
                      </ExploreAllCourseWrapper>
                    </div>
                  </>
                ))}
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
