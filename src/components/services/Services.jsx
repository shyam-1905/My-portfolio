import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Website design and development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>E-commerce development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Content management systems (CMS) development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Responsive web design.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Website maintenance and support.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Web Hosting and Domain registration.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>API Development and Integrations.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Website Migration and Upgradation.</p>
            </li>
          </ul>
        </article>
        {/* ============================ */}
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon' />
            <p>App design and development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Cross-platform development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Backend development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Push notifications.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>App testing and quality assurance.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>App submission and publishing.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>App maintenance and support.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>App performance optimization.</p>
            </li>
          </ul>
        </article>
        {/* ===================== */}
        <article className="service">
          <div className="service__head">
            <h3>Digital Marketing</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Keyword research.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>On-page optimization.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Off-page optimization.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Social media marketing.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Analytics and reporting.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services