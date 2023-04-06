import React, {useState} from 'react'
import './qualification.css'
import {FaGraduationCap} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toogleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h5>My Journey</h5>
        <h2>Qualification</h2>
        <div className="qualification_container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex " } onClick={() => toogleTab(1)}>
                    <FaGraduationCap className="qualification__icon"/> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex " } onClick={() => toogleTab(2)}>
                    <MdWork className="qualification__icon"/> Experience
                </div>
            </div> 
            <div className="qualification__sections">
                <div className= {toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Masters in Computer Science</h3>
                            <span className="qualification__subtitle">Northern Arizona University</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender"/>2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bachelors of Technology in Computer Science</h3>
                            <span className="qualification__subtitle">Sir Padampat singhania University</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender"/>2018 - 2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Senior High School(12<sup>th</sup>)</h3>
                            <span className="qualification__subtitle">Narayana Junior College</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender"/>2016 - 2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">High School(10<sup>th</sup>)</h3>
                            <span className="qualification__subtitle">Prerana High School</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender"/>2016
                            </div>
                        </div>

                    </div>
                </div>

                {/* end of first content qualification */}

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Associate Software Developer</h3>
                            <span className="qualification__subtitle">Quantana Pvt Ltd</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender"/>2021 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Wordpress and Php Developer</h3>
                            <span className="qualification__subtitle">Nkg Online</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender" />2021 - 2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Online Coding Tutor</h3>
                            <span className="qualification__subtitle">Lido Learning</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender"/>2020-2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">IEEE student Branch Technical Lead</h3>
                            <span className="qualification__subtitle">Sir Padampat Singhania University</span>
                            <div className="qualification__calender">
                                <SlCalender className="qualification__icon-calender"/>2020-2022
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification