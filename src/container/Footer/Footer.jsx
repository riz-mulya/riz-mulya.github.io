import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', massage: ''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, massage } = formData;

    const handleChangeInput = e => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            massage: massage
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
    }
  return (
    
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:rizmulya3@gmail.com" className='p-text'>hello@rizmulya.com</a>
        </div>
        <div className="app__footer-card">
            <img src={images.telegram} alt="mobile" />
            <a href="https://t.me/rizmulya" className='p-text'>@rizmulya</a>
        </div>
      </div>

    {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
            <input className='p-text' name='name' type='text' placeholder='Your Name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
            <input className='p-text' name='email' type='email' placeholder='Your Email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
            <textarea className='p-text' placeholder='Your Massage' value={massage} name="massage" onChange={handleChangeInput} />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Massage'}
        </button>
      </div>
      :
      <div>
        <h3 className='head-text'>
            thank you for getting in touch
        </h3>
      </div>
        }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg')
