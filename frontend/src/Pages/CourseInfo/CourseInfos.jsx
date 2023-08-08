import React from 'react'
import './CourseInfos.css'
import TopBar from '../../Component/TopBar/TopBar'
import NavBar from '../../Component/NavBar/NavBar'
import Footer from '../../Component/Footer/Footer'
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb'


export default function CourseInfos() {
    return (
        <>
            <TopBar />
            <NavBar />
            <Breadcrumb links={[
                { id: 1, title: "خانه", to: '' },
                { id: 2, title: "آموزش برنامه نویسی فرانت‌اند", to: 'category-info/frontend' },
                { id: 3, title: "دوره متخصص جاوا اسکریپت", to: 'course-info/js-expert' },
            ]} />

            <section class="course-info">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <a href="#" class="course-info__link">
                                آموزش برنامه نویسی فرانت اند
                            </a>
                            <h1 class="course-info__title">
                                آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
                            </h1>
                            <p class="course-info__text">
                                امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند.
                                به قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با
                                Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک
                                های موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس
                                عالی فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار
                                استفاده می شوند را به خوبی بلد باشید
                            </p>
                            <div class="course-info__social-media">
                                <a href="#" class="course-info__social-media-item">
                                    <i class="fab fa-telegram-plane course-info__icon"></i>
                                </a>
                                <a href="#" class="course-info__social-media-item">
                                    <i class="fab fa-twitter course-info__icon"></i>
                                </a>
                                <a href="#" class="course-info__social-media-item">
                                    <i class="fab fa-facebook-f course-info__icon"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-6">
                            <video
                                src=""
                                poster="/images/courses/js_project.png"
                                class="course-info__video"
                                controls
                            ></video>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}
