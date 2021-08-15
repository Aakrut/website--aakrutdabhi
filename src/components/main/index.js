import React from 'react';
import './Main.css'

const index = () => {
    return (
        <section className="main">

            <div className="container">

                <a href="https://www.behance.net/aakrutdabhi" target='_blank' rel="noopener noreferrer" className="content">
                    <i class='bx bxl-behance'></i>
                    <span>Behance</span>
                </a>

                <a href="https://dribbble.com/AakrutDabhi" rel="noopener noreferrer" target='_blank' className="content">
                    <i class='bx bxl-dribbble' ></i>
                    <span>Dribbble</span>
                </a>

                <a href="https://instagram.com/aakrutdabhidesign" rel="noopener noreferrer" target='_blank' className="content">
                    <i class='bx bxl-instagram'></i>
                    <span>Instagram</span>
                </a>

                <a href="https://twitter.com/aakrut_d" target='_blank' rel="noopener noreferrer" className="content">
                    <i class='bx bxl-twitter'></i>
                    <span>Twitter</span>
                </a>


            </div>

        </section>
    )
}

export default index