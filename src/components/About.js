import React from 'react'
import aboutImg from '../images/about.webp'
import Title from './Title'

export default function About() {
  return (
    <section className="section" id="about">
    <Title title='about' subTitle=' us'/>
    <div className="section-center about-center">
        <div className="about-img">
            <img src={aboutImg} alt="awesome beach" className="about-photo"/>
        </div>
        <article className="about-info">
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rerum! Deserunt hic inventore porro officia dolore voluptatibus vitae reiciendis voluptatem!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, reprehenderit tenetur cum atque in ratione doloremque. Deserunt reprehenderit sapiente nemo.</p>
            <a href="#tours" className="btn">read more</a>
        </article>
    </div>
    </section>
  )
}
