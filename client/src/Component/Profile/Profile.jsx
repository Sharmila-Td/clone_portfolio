import React from 'react';
import './Profile.css';
import me from '../../assets/me.png'

const Profile = () => {
  return (
    <div className='profile_center'>
        <div className='profile_black'>
        <div className='profile_intro'>
                <h1> Hi, </h1>
                <h3> I'm Sharmi </h3>
                <h6> An highly skilled, Mern Developer as a  Fresher with the proven ability to adapt to any situation. A Programming Polyglot and Goal driven Natural Leader </h6>
            </div>
        </div>
        <div className='profile_white'>
            <div className='profile_img'>
                <img className='pic' src={me} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Profile