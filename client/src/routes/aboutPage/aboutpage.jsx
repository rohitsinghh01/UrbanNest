import React from 'react';
import './aboutpage.scss';


function About() {
  return (
    <div className='aboutPage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>About Urban Nest</h1>
          <p>
            Welcome to <strong>Urban Nest</strong>, your premier destination for
            discovering, renting, and purchasing real estate. Our platform is
            designed to cater to all your property needs, whether you're looking
            for a cozy apartment in the heart of the city, a sprawling suburban
            home, or a commercial space to grow your business. At Urban Nest, we
            bring together a diverse range of properties to ensure that you find
            exactly what you're looking for.
          </p>
          <p className='about-text'>
            At the heart of Urban Nest lies our commitment to giving back to the
            community through the Urban Nest Foundation. Our foundation focuses
            on improving housing conditions and supporting sustainable urban
            development. We believe that everyone deserves a safe and
            comfortable place to live, and through our various initiatives, we
            strive to make a positive impact on society. From funding housing
            projects to supporting environmental sustainability, the Urban Nest
            Foundation is dedicated to creating better living conditions for
            all.
          </p>
          <p className='about-signature'>
            Sincerely, <br />
            Urban Nest Team
          </p>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/about.jpg' alt='' />
      </div>
    </div>
  );
}


export default About;
