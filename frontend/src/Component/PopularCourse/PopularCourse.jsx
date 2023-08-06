import React from 'react'
import './PopularCourse.css'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function PopularCourse() {
    return (
        <>
            <div className='popular'>
                <div className='container'>
                    <SectionHeader title='محبوب ترین دوره ها' desc='دوره های محبوب بر اساس امتیاز دانشجو ها' />
                </div>
            </div>
        </>
    )
}
