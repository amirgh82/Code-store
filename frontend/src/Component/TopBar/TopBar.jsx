import React, { useEffect, useState } from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {

    const [allTopbarLinks, setAllTopbarLinks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/v1/menus/topbar`)
            .then(res => res.json())
            .then(topbarData => {
                setAllTopbarLinks(topbarData)

            })
    }, [])

    console.log(allTopbarLinks);

    const getRandomItemsFromArray = (arr, randomCount) => {
        const shuffeld = [...arr].sort(() => 0.5 - Math.random())
        return shuffeld.slice(0, randomCount)

    }

    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="top-bar__content">
                    <div className="top-bar__right">
                        <ul className="top-bar__menu">

                            {getRandomItemsFromArray(allTopbarLinks, 5).map(link => (
                                <li className="top-bar__item">
                                    <a href={link.href} className="top-bar__link">
                                        {link.title}
                                    </a>
                                </li>
                            ))}


                            {/* <li className="top-bar__item">
                                <a href="#" className="top-bar__link">
                                    آموزش Css
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href="#" className="top-bar__link">
                                    آموزش جاوا اسکریپت
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href="#" className="top-bar__link">
                                    آموزش بوت استرپ
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href="#" className="top-bar__link">
                                    آموزش پایتون
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href="#" className="top-bar__link">
                                    آموزش ری‌اکت
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href="#" className="top-bar__link">
                                    20,000 تومان
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="top-bar__left">
                        <div className="top-bar__email">
                            <a href="#" className="top-bar__email-text top-bar__link">
                                sabzlearn@gmail.com
                            </a>
                            <i className="fas fa-envelope top-bar__email-icon"></i>
                        </div>
                        <div className="top-bar__phone">
                            <a href="#" className="top-bar__phone-text top-bar__link">
                                09921558293
                            </a>
                            <i className="fas fa-phone top-bar__phone-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
