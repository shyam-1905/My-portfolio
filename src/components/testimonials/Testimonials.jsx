import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
{
  avatar: AVTR1,
  name: 'Kamal Kant Hiran',
  review: "I had the pleasure of working with Shyam Prasad Reddy on an IEEE student branch project. His web development skills were obvious from the start, as he was able to quickly understand the project's requirements and implement them with a high level of technical proficiency. His attention to detail and ability to troubleshoot any issues that arose were impressive, and he met or exceeded deadlines on a consistent basis.Shyam prasad reddy is a valuable asset to any team, and I highly recommend him for any web development project."
},
{
  avatar: AVTR2,
  name: 'Ravi Kiran',
  review: "I recently had the pleasure of working on a project with shyam prasad reddy, and I was extremely pleased with the results. Not only did they understand my vision and bring it to life with their expert coding skills, but they were also an excellent communicator and were always available to answer any questions I had. They went above and beyond to finish the project on time and to my liking. I wholeheartedly recommend shyam to anyone in need of a skilled and dependable web developer."
},
{
  avatar: AVTR3,
  name: 'Revanth Kumar',
  review: "For the past year, I've had the pleasure of working alongside Shyam prasad reddy, and I can confidently say he is one of the most skilled and dedicated web developers I've had the pleasure of working with. His attention to detail and ability to think creatively are unrivaled. He consistently produces high-quality work while meeting tight deadlines without compromising the integrity of his work. He is always willing to help and is a valuable asset to any team. I strongly recommend Shyam to any organization in need of a top-tier web developer."
},
// {
//   avatar: AVTR4,
//   name: 'Kwame Despite',
//   review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porrblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
// },


]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slides PerView={1}
      pagination={{ clickable: true }} >
      {
        data.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="avator1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials