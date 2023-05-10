import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.twitter.com"><BsTwitter /></a>
        </div>
        <div>
            <a href="https://www.facebook.com"><FaFacebookF /></a>
        </div>
        <div>
          <a href="https://www.instagram.com"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia
