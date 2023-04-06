import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'IEEE Sir Padampat Singhania University Student Branch App',
    github: 'https://github.com/shyam-1905/IEEESPSUAPP',
    demo: 'https://github.com/shyam-1905/IEEESPSUAPP'
  },
  {
    id: 2,
    image: IMG2,
    title: 'College Management System for Sir Padampat Singhania University',
    github: 'https://github.com/mikhtechsolutions/cms/tree/shyam_cms',
    demo: 'https://github.com/mikhtechsolutions/cms/tree/shyam_cms'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tic-Tac-Toe game uisng Python',
    github: 'https://github.com/shyam-1905/Tic-Tac-Toe-',
    demo: 'https://github.com/shyam-1905/Tic-Tac-Toe-'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Web Application of Mikhvision Digi Solutions',
    github: 'https://mikhvision.com/',
    demo: 'https://mikhvision.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'A Web Application to Sell Domain and Hosting',
    github: 'https://mikhhost.in/',
    demo: 'https://mikhhost.in/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Training and Placement Management System',
    github: 'https://github.com/shyam-1905/Training-and-placement-management-System',
    demo: 'https://github.com/shyam-1905/Training-and-placement-management-System'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn" target="_blank">demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio