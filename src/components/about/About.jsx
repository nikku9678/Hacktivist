import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px]
        xl:gap-0 flex-col lg:flex-row'>
            {/* about img */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10
            order-2 lg:order-1'>
                <img src={aboutImg} alt="" />
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px]
                right-[%30] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>
            {/* about content */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text_para'
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore unde maiores expedita, ullam culpa minima aliquid excepturi eius, ex nihil adipisci rerum ipsa, ea ad repellendus ratione perspiciatis odio aut aliquam inventore quam enim obcaecati natus. Alias ipsam nulla sed perferendis dolores consequuntur! Vero, ipsa. Vel pariatur eius aut vero.</p>
                <p className="text_para mt-[30px]">Lorem eritatis aliquam magni eum qui atque, itaque pariatur quibusdam, reiciendis adipisci nobis eaque ut repellendus velit esse rem minus unde. Doloremque architecto veniam dicta nisi similique, eligendi, ea quibusdam beatae, hic numquam laboriosam suscipit accusamus alias optio ab. Quaerat porro aliquam nulla, cum commodi accusamus, quas hic quia aliquid optio dignissimos repudiandae!</p>
                <Link to='/'>
                    <button className='btn'>Learn More</button>
                </Link>
            </div>
        </div>
    </div>
  </section>
}

export default About