import React from 'react'
import './Index.css'
import Header from '../../Component/Header/Header'
import LastCourses from '../../Component/LastCourses/LastCourses'
import AboutUs from '../../Component/AboutUs/AboutUs'
import PopularCourse from '../../Component/PopularCourse/PopularCourse'
import PresellCourses from '../../Component/PresellCourses/PresellCourses'
import LastArticles from '../../Component/LastArticles/LastArticles'


export default function Index() {
  return (
    <div>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourse />
      <PresellCourses />
      < LastArticles />
    </div>
  )
}
