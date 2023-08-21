import React from "react";
import TopBar from "../../Component/TopBar/TopBar";
import NavBar from "../../Component/NavBar/NavBar";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import Footer from "../../Component/Footer/Footer";
import CourseBox from "../../Component/CourseBox/CourseBox";

import "./Courses.css";

export default function Courses() {
  return (
    <>
      <TopBar />
      <NavBar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>

          <div className="courses-pagination">
            <ul className="courses__pagination-list">
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                </a>
              </li>
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="courses__pagination-link courses__pagination-link--active"
                >
                  1
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  2
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
