import React from 'react'

const Contact = () => {
  return <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center'>Contact Us</h2>
      <p className='mb-8 lg:mb-16 font-light text-center text__para'>Got a technical issue we are here to solve it !</p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form_label'>
            Your Email
          </label>
          <input type="email" placeholder='example@gmail.com' id="email" 
          className='form__input mt-1'/>
        </div>
        <div>
          <label htmlFor="subject" className='form_label'>
            Subject
          </label>
          <input type="text" placeholder='How Can we help you' id="subject" 
          className='form__input mt-1'/>
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form_label'>
            Your Message
          </label>
          <textarea rows='6' type="text" placeholder='Leave a Comment' id="message" 
          className='form__input mt-1'/>
        </div>
        <div className='flex items-center justify-center'>
        <button type='submit' className='btn rounded'>Submit</button>
        </div>
      </form>
    </div>
  </section>
}

export default Contact