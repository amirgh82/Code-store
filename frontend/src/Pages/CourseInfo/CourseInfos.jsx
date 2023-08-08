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
            <Footer />
        </>

    )
}
