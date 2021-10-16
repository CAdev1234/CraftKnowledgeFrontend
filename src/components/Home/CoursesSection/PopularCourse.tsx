import { calenderIcon, seatIcon } from "helper/constants";

const PopularCourse = () => {
    return (
        <div className="courses-item">
            <div className="courses-item-inner">
                <div className="content-wraper d-flex">
                    <div className="text-wraper">
                        <h4>Mulesoft</h4>
                        <p>An Integration software for connecting app lications, data and devices.</p>
                    </div>
                    <div className="icon-wraper">

                    </div>
                </div>
                <div className="bottom-detail align-center align-center">
                    <ul>
                        <li><img src={calenderIcon} alt="Logo" /><span>3 months</span></li>
                        <li><img src={seatIcon} alt="Logo" /><span>Few seat left</span></li>
                    </ul>
                </div>
                <div className="box-wraper"></div>
                <div className="actions-wraper d-flex align-center">
                    <div className="theme-btn">Enroll</div>
                    <div className="link">Learn More</div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;
