import { useState, useEffect } from "react";
import { langEn, logo, menuIcon, searchIcon } from 'helper/constants';
import 'assets/scss/common/header.scss';
import { useHistory } from "react-router";
import clsx from "clsx";


const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [show, setShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 80)
        })
    }, []);

    return (
        <header className={scroll ? "main-header sticky-header" : "main-header"}>
            <div className="header-wrapper">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-4 col-md-12 col-lg-2 cursor-pointer" onClick={() => history.push('/')}>
                            <div className="logo-wraper">
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>
                        <div className="col-4 col-md-8 col-lg-7">
                            <div className="header-middle">
                                <div className="header-search-wraper">
                                    <div className="courses-caregory-menu">
                                        <label className="cursor-pointer" onClick={() => setShow(prevState => !prevState)}>Browse All Courses</label>
                                        <div className={clsx("courses-menu-wrap", show && "display")}>
                                            <div className="menu-container">
                                                <div className="menu-left-wraper">
                                                    <h5>Courses Categories</h5>
                                                    <ul>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 1</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 2</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 11</div></li>
                                                                            <li><div>Course Name 22</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 3</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 4</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 5</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 6</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 7</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 8</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item">
                                                            <div className="menu-link">Course Category 9</div>
                                                            <div className="submenu-container">
                                                                <div className="submenu-inner">
                                                                    <div className="submenu">
                                                                        <h5>Popular Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="submenu">
                                                                        <h5>New Courses</h5>
                                                                        <ul>
                                                                            <li><div>Course Name 1</div></li>
                                                                            <li><div>Course Name 2</div></li>
                                                                            <li><div>Course Name 3</div></li>
                                                                            <li><div>Course Name 4</div></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="menu-right-wraper">
                                                    <h5>Special Courses</h5>
                                                    <div className="special-courses-list">
                                                        <div className="course-item">
                                                            <div className="icon-wrap">
                                                            </div>
                                                            <div className="text-wrap">
                                                                <h4>Mulesoft Computing</h4>
                                                                <p>An Integration software for connecting applications, data and devices.</p>

                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <div className="icon-wrap">
                                                            </div>
                                                            <div className="text-wrap">
                                                                <h4>Mulesoft Computing</h4>
                                                                <p>An Integration software for connecting applications, data and devices.</p>
                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <div className="icon-wrap">
                                                            </div>
                                                            <div className="text-wrap">
                                                                <h4>Mulesoft Computing</h4>
                                                                <p>An Integration software for connecting applications, data and devices.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" placeholder="What do you want to learn?" />
                                        <button className="search-btn"><img src={searchIcon} alt="search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-3">
                            <div className="header-right">
                                <div className="Language-select">
                                    <select>
                                        <option value="1" style={{ backgroundImage: `url(${langEn})` }}>EN</option>
                                    </select>
                                </div>
                                <div className="header-links">
                                    <ul>
                                        <li className="cursor-pointer" onClick={() => history.push('/register')}>
                                            <div className="register">Register</div>
                                        </li>
                                        <li className="cursor-pointer" onClick={() => history.push('/login')}>
                                            <div className="login">Log In</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="toggle-menu d-md-none"><img src={menuIcon} alt="Logo" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
