import React from 'react'
import Popup from 'reactjs-popup'
import "./about.css"
import ME from '../../assets/my-photo-about.png'
import {BsAward}  from 'react-icons/bs'
import {ImUsers}  from 'react-icons/im'
import {AiOutlineFundProjectionScreen}  from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="myimage" />
          </div>
        </div>
      

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>No of Projects</h5>
              <small>30+ projects</small>
            </article>
          </div>
          
          <p>
            Hi there! My name is Yenna Shyam Prasad Reddy, and I am a full-stack web developer and App Developer with over two years of experience in the field. I specialize in creating custom web applications using a variety of programming languages and frameworks, including React Js, Vue Js and Node Js.
          
          <Popup trigger={<button className="read__more__btn"> Read More... </button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> About Me </div>
                <div className="content">
                  {' '}
                    <p>
                    I have a strong background in both front-end and back-end development, as well as a keen eye for design and user experience. I am highly skilled at developing and maintaining complex web applications and understand how to create a seamless user journey for my clients. On the back-end, I have experience working with databases, servers, and APIs. I have a strong understanding of server-side languages such as PHP and Python, and I am comfortable working with both relational and non-relational databases.
                  </p>
                  <p>
                    In my previous projects, I have utilized my skills in Flutter, Dart, and other programming languages to create apps that range from simple utilities to more complex, feature-rich applications. I am always eager to learn and stay up-to-date with the latest technologies and best practices in app development, which allows me to produce high-quality work consistently.
                  </p>
                  <p><br/>
                    As a freelancer, I have worked with a wide range of clients from various industries. I am a reliable, detail-oriented developer who consistently delivers high-quality work on time. I am constantly looking to improve my skills and stay up-to-date with the latest technologies and trends in web development and app development. In my free time, I enjoy participating in hackathons and coding challenges to continue learning and growing as a developer. I am a detail-oriented and analytical thinker with a passion for solving complex problems.
                  </p>
                  <p>
                    I am excited to use my skills and expertise to build high-quality, user-friendly web and mobile applications that meet the needs of my clients. Please take a look at my portfolio to see some of my past work, and contact me if you have any questions or are interested in working together. In addition to my technical skills, I am a strong communicator and team player. I enjoy collaborating with others and always strive to work in a transparent and efficient way.
                  </p><br/>
                  <p>
                    <b>If you are in need of a reliable, experienced full-stack developer, please don't hesitate to reach out to me. I would love the opportunity to discuss your project and how I can help bring it to life.</b>
                  </p>
                </div>
                <div className="actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    Read less...
                  </button>
                </div>
              </div>
            )}
        
          </Popup>
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About