import React from 'react'
import './Index.css'
import Header from '../../Component/Header/Header'
import LastCourses from '../../Component/LastCourses/LastCourses'
import AboutUs from '../../Component/AboutUs/AboutUs'

export default function Index() {
  return (
    <div>
      <Header />
      <LastCourses />
      <AboutUs />
    </div>
  )
}
